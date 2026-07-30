import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { Download, FileText, BookOpen, Palette } from "lucide-react";

export const metadata: Metadata = {
  title: "مركز التحميلات | كتالوج الأبواب والألوان",
  description: "حمل أحدث كتالوجات أبواب WPC، كتالوج الألوان، والملف التعريفي الخاص بمؤسسة ناجي دورز.",
};

export default function DownloadsPage() {
  const files = [
    {
      id: "doors-catalog",
      title: "كتالوج أبواب WPC 2024",
      description: "استعرض أحدث تصاميم وموديلات الأبواب الداخلية الفاخرة للغرف والحمامات.",
      icon: BookOpen,
      fileUrl: "/Files/كتالوج ابواب مؤسسه ناجي دورز.pdf",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      size: "15 MB"
    },
    {
      id: "colors-catalog",
      title: "كتالوج الألوان والتشطيبات",
      description: "دليل شامل لجميع الألوان المتاحة لتتناسب مع ديكور مشروعك.",
      icon: Palette,
      fileUrl: "/Files/كتالوج الوان مؤسسه ناجي دورز.pdf",
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      size: "8 MB"
    },
    {
      id: "company-profile",
      title: "الملف التعريفي للمؤسسة (Profile)",
      description: "تعرف على تاريخنا، رؤيتنا، واعتماداتنا في تنفيذ أضخم مشاريع الرياض.",
      icon: FileText,
      fileUrl: "/Files/الملف التعريفي ل  مؤسسه ناجي دورز للابواب ال wpc .pdf",
      color: "text-gold",
      bg: "bg-gold/10",
      size: "12 MB"
    }
  ];

  return (
    <main className="min-h-screen bg-warm-beige pb-24">
      <PageHero 
        title="مركز التحميلات"
        description="جميع الملفات والكتالوجات التي تحتاجها لاتخاذ القرار الأفضل لمشروعك متاحة للتحميل المباشر."
        bgImage="/Images/Products Hero Background.png"
        breadcrumbs={[{ name: "التحميلات", href: "/downloads" }]}
      />
      
      <div className="container mx-auto px-6 pt-16 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-deep-brown mb-4">
            تصفح الكتالوجات بصيغة PDF
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            نوفر لك نسخاً رقمية عالية الجودة من كتالوجاتنا لتتمكن من مشاركتها مع مهندس الديكور الخاص بك بكل سهولة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {files.map((file) => {
            const Icon = file.icon;
            return (
              <div key={file.id} className="bg-white rounded-3xl p-6 md:p-8 luxury-card flex flex-col h-full border border-gray-100 group">
                <div className={`w-16 h-16 rounded-2xl ${file.bg} flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                  <Icon className={`w-8 h-8 ${file.color}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-deep-brown mb-3">{file.title}</h3>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                  {file.description}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-auto">
                  <span className="text-sm font-medium text-gray-400 bg-gray-50 px-3 py-1 rounded-full">{file.size}</span>
                  <a 
                    href={file.fileUrl} 
                    download
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-deep-brown text-white px-6 py-3 rounded-full font-bold hover:bg-gold hover:text-deep-brown transition-all shadow-md hover:shadow-lg"
                  >
                    <Download className="w-5 h-5" />
                    تحميل
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
