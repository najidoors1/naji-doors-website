import { NextRequest, NextResponse } from "next/server";
import { projectTypeLabels, quoteSchema } from "@/lib/quote";

export const runtime = "nodejs";

const requestLog = new Map<string, number[]>();
const LIMIT_WINDOW_MS = 60 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

function getClientIp(request: NextRequest) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    || request.headers.get("x-real-ip")
    || "unknown";
}

function isRateLimited(clientIp: string) {
  const now = Date.now();
  const recentRequests = (requestLog.get(clientIp) || []).filter((timestamp) => now - timestamp < LIMIT_WINDOW_MS);

  if (recentRequests.length >= MAX_REQUESTS_PER_WINDOW) {
    requestLog.set(clientIp, recentRequests);
    return true;
  }

  recentRequests.push(now);
  requestLog.set(clientIp, recentRequests);
  return false;
}

export async function POST(request: NextRequest) {
  const clientIp = getClientIp(request);

  if (isRateLimited(clientIp)) {
    return NextResponse.json(
      { message: "تم إرسال عدة طلبات من هذا الاتصال. يرجى المحاولة لاحقاً أو التواصل معنا عبر واتساب." },
      { status: 429 }
    );
  }

  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "بيانات الطلب غير صالحة." }, { status: 400 });
  }

  const parsed = quoteSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ message: "يرجى مراجعة الحقول المطلوبة ثم المحاولة مرة أخرى." }, { status: 400 });
  }

  if (parsed.data.website) {
    return NextResponse.json({ success: true });
  }

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const webhookToken = process.env.GOOGLE_SHEETS_WEBHOOK_TOKEN;

  if (!webhookUrl || !webhookToken) {
    console.error("Google Sheets quote webhook is not configured.");
    return NextResponse.json(
      { message: "خدمة طلبات الأسعار غير مهيأة حالياً. يرجى التواصل معنا عبر واتساب." },
      { status: 503 }
    );
  }

  const { name, phone, projectType, quantity, district, details } = parsed.data;

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: webhookToken,
        submittedAt: new Date().toISOString(),
        name,
        phone,
        quantity,
        district,
        details,
        projectType: projectTypeLabels[projectType] || projectType,
        sourcePage: request.headers.get("referer") || "",
        status: "جديد",
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });

    const result = await response.json().catch(() => null);

    if (!response.ok || !result?.success) {
      throw new Error(`Google Sheets webhook returned ${response.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Unable to send quote request to Google Sheets.", error);
    return NextResponse.json(
      { message: "تعذر إرسال الطلب الآن. يرجى المحاولة مرة أخرى أو التواصل معنا عبر واتساب." },
      { status: 502 }
    );
  }
}
