# ربط طلبات عرض السعر بـ Google Sheets API

يستخدم الموقع Google Sheets API عبر **Service Account**. لا نحتاج Google Apps Script أو رابط Web App. تُنشأ ورقة **طلبات عرض السعر** وتنسيقها تلقائياً عند أول طلب، وتصل حالة كل طلب جديد بقيمة **جديد**.

## 1. فعّل Google Sheets API

1. افتح [Google Cloud Console](https://console.cloud.google.com/).
2. أنشئ مشروعاً جديداً أو اختر مشروعاً موجوداً خاصاً بناجي دورز.
3. من **APIs & Services → Library** ابحث عن **Google Sheets API** ثم اختر **Enable**.

## 2. أنشئ Service Account

1. من **IAM & Admin → Service Accounts** اختر **Create service account**.
2. الاسم المقترح: `naji-doors-quotes`.
3. لا تحتاج إلى إعطاءه دوراً على مستوى مشروع Google Cloud. اختر **Done**.
4. افتح الـ Service Account الذي أنشأته، ثم تبويب **Keys**.
5. اختر **Add key → Create new key → JSON** ثم أنشئ المفتاح ونزّل ملف JSON.

احتفظ بالملف في مكان آمن. لا ترفعه إلى GitHub ولا ترسله في المحادثة.

## 3. امنح Service Account حق الوصول إلى الملف

1. انسخ البريد الإلكتروني للـ Service Account. ينتهي عادةً بـ `iam.gserviceaccount.com`.
2. افتح ملف Google Sheets الخاص بناجي دورز واختر **Share**.
3. أضف هذا البريد بصلاحية **Editor**.

قيمة معرّف الملف المستخدمة في الموقع هي:

```text
18ZtF5V6OQmagYXOYSbTJDQWLK_IJP8afvmD0SCHF1gE
```

## 4. أضف متغيرات Vercel السرية

من **Vercel → Project → Settings → Environment Variables** أضف القيم التالية إلى بيئة **Production**:

| الاسم | القيمة |
| --- | --- |
| `GOOGLE_SHEETS_SPREADSHEET_ID` | `18ZtF5V6OQmagYXOYSbTJDQWLK_IJP8afvmD0SCHF1gE` |
| `GOOGLE_SHEETS_SERVICE_ACCOUNT_JSON` | محتوى ملف JSON الذي نزّلته كاملاً، من أول `{` إلى آخر `}` |

استخدم محتوى ملف JSON كما هو، ولا تحوّله إلى لقطة شاشة أو تضعه داخل ملفات المشروع. لا تضف بادئة `NEXT_PUBLIC_` إلى أي متغير.

بعد الحفظ، أعد نشر آخر نسخة من الموقع في Vercel.

## 5. الاختبار

أرسل طلباً تجريبياً من صفحة **طلب تسعيرة**. سيُنشئ الموقع تبويباً باسم **طلبات عرض السعر** عند الحاجة، ثم يضيف الأعمدة:

`تاريخ الطلب، الاسم، رقم الجوال، نوع المشروع، الكمية التقريبية، الحي، تفاصيل إضافية، صفحة المصدر، الحالة`.

ستظهر قيمة الحالة **جديد** تلقائياً.

## معالجة المشاكل الشائعة

- خطأ `403`: افتح مشاركة ملف Google Sheets وتأكد من أن بريد الـ Service Account لديه صلاحية **Editor**.
- خطأ `Google Sheets API has not been used`: فعّل **Google Sheets API** للمشروع نفسه الذي أنشأت فيه الـ Service Account.
- رسالة أن الخدمة غير مهيأة: تحقق من إضافة متغيري Vercel إلى بيئة Production ثم أعد النشر.
