import { z } from "zod";

export const quoteSchema = z.object({
  name: z.string().trim().min(2, { message: "الاسم يجب أن يحتوي على حرفين على الأقل" }).max(100),
  phone: z.string().trim().regex(/^05[0-9]{8}$/, { message: "رقم الجوال غير صحيح (يجب أن يبدأ بـ 05)" }),
  projectType: z.string().trim().min(1, { message: "الرجاء اختيار نوع المشروع" }).max(100),
  quantity: z.string().trim().regex(/^[0-9]+$/, { message: "الرجاء إدخال كمية صحيحة" }).max(8),
  district: z.string().trim().min(2, { message: "الرجاء إدخال الحي في الرياض" }).max(100),
  details: z.string().trim().max(1500).optional(),
  website: z.string().max(0).optional(),
});

export type QuoteFormValues = z.infer<typeof quoteSchema>;

export const projectTypeLabels: Record<string, string> = {
  residential: "سكني (فيلا / منزل)",
  commercial: "تجاري أو مشروع",
  other: "أخرى",
};
