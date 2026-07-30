"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";
import { useForm as useHookForm } from "react-hook-form";

const quoteSchema = z.object({
  name: z.string().min(2, { message: "الاسم يجب أن يحتوي على حرفين على الأقل" }),
  phone: z.string().regex(/^(05)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/, { message: "رقم الجوال غير صحيح (يجب أن يبدأ بـ 05)" }),
  projectType: z.enum(["residential", "commercial", "other"], { required_error: "الرجاء اختيار نوع المشروع" }),
  quantity: z.string().min(1, { message: "الرجاء إدخال الكمية التقريبية" }),
  district: z.string().min(2, { message: "الرجاء إدخال الحي في الرياض" }),
  details: z.string().optional(),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

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

  const onSubmit = async (data: QuoteFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
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
              <label className="block text-sm font-medium text-gray-700">الاسم الكريم <span className="text-red-500">*</span></label>
              <input
                {...register("name")}
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                placeholder="أدخل اسمك"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">رقم الجوال <span className="text-red-500">*</span></label>
              <input
                {...register("phone")}
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
              <label className="block text-sm font-medium text-gray-700">نوع المشروع <span className="text-red-500">*</span></label>
              <select
                {...register("projectType")}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
              >
                <option value="">اختر النوع</option>
                <option value="residential">سكني (فيلا / قصر)</option>
                <option value="commercial">تجاري (فندق / مكتب / مستشفى)</option>
                <option value="other">أخرى</option>
              </select>
              {errors.projectType && <p className="text-red-500 text-sm mt-1">{errors.projectType.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">الكمية التقريبية <span className="text-red-500">*</span></label>
              <input
                {...register("quantity")}
                type="number"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                placeholder="مثال: 15 باب"
              />
              {errors.quantity && <p className="text-red-500 text-sm mt-1">{errors.quantity.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">الحي (داخل الرياض) <span className="text-red-500">*</span></label>
            <input
              {...register("district")}
              type="text"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
              placeholder="مثال: الياسمين، الملقا، النرجس..."
            />
            {errors.district && <p className="text-red-500 text-sm mt-1">{errors.district.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">تفاصيل إضافية (اختياري)</label>
            <textarea
              {...register("details")}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all resize-none"
              placeholder="أضف أي تفاصيل أخرى ترغب في مشاركتها..."
            ></textarea>
          </div>

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
