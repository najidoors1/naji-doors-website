"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";
import { useForm as useHookForm } from "react-hook-form";
import { quoteSchema, type QuoteFormValues } from "@/lib/quote";

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useHookForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
  });

  const [submitError, setSubmitError] = useState("");

  const onSubmit = async (data: QuoteFormValues) => {
    setIsSubmitting(true);
    setSubmitError("");
    
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        const result = await response.json().catch(() => null);
        setSubmitError(result?.message || "حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.");
      }
    } catch {
      setSubmitError("حدث خطأ في الاتصال. يرجى التأكد من اتصالك بالإنترنت.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl luxury-card w-full max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-deep-brown mb-2">طلب تسعيرة</h3>
        <p className="text-gray-500">أكمل النموذج أدناه وسيقوم فريق المبيعات بالتواصل معك في أقرب وقت.</p>
      </div>

      {isSuccess ? (
        <div className="flex flex-col items-center justify-center py-12 text-green-600">
          <CheckCircle2 className="w-16 h-16 mb-4" />
          <h4 className="text-xl font-bold mb-2">تم إرسال طلبك بنجاح!</h4>
          <p className="text-gray-600 text-center">شكراً لثقتك بناجي دورز، سنتواصل معك قريباً.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="quote-name" className="block text-sm font-medium text-gray-700">الاسم الكريم <span className="text-red-500">*</span></label>
              <input
                {...register("name")}
                id="quote-name"
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                placeholder="أدخل اسمك"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="quote-phone" className="block text-sm font-medium text-gray-700">رقم الجوال <span className="text-red-500">*</span></label>
              <input
                {...register("phone")}
                id="quote-phone"
                type="tel"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all text-left"
                placeholder="05XXXXXXXX"
                dir="ltr"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="quote-project-type" className="block text-sm font-medium text-gray-700">نوع المشروع <span className="text-red-500">*</span></label>
              <select
                {...register("projectType")}
                id="quote-project-type"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
              >
                <option value="">اختر النوع</option>
                <option value="residential">سكني (فيلا / قصر)</option>
                <option value="commercial">تجاري أو مشروع</option>
                <option value="other">أخرى</option>
              </select>
              {errors.projectType && <p className="text-red-500 text-sm mt-1">{errors.projectType.message}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="quote-quantity" className="block text-sm font-medium text-gray-700">الكمية التقريبية <span className="text-red-500">*</span></label>
              <input
                {...register("quantity")}
                id="quote-quantity"
                type="number"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                placeholder="مثال: 15 باب"
              />
              {errors.quantity && <p className="text-red-500 text-sm mt-1">{errors.quantity.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="quote-district" className="block text-sm font-medium text-gray-700">الحي (داخل الرياض) <span className="text-red-500">*</span></label>
            <input
              {...register("district")}
              id="quote-district"
              type="text"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
              placeholder="مثال: الياسمين، الملقا، النرجس..."
            />
            {errors.district && <p className="text-red-500 text-sm mt-1">{errors.district.message}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="quote-details" className="block text-sm font-medium text-gray-700">تفاصيل إضافية (اختياري)</label>
            <textarea
              {...register("details")}
              id="quote-details"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all resize-none"
              placeholder="أضف أي تفاصيل أخرى ترغب في مشاركتها..."
            ></textarea>
          </div>

          <input
            {...register("website")}
            type="text"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />

          {submitError && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm font-medium text-center">
              {submitError}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-deep-brown hover:bg-black text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-70"
          >
            {isSubmitting ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                إرسال الطلب
                <ArrowLeft className="w-5 h-5" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
