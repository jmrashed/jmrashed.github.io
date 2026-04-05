import { Trophy, Star, Medal } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

const awards = [
  {
    icon: Trophy,
    title: "Innovator of the Year",
    org: "Onest Tech LLC — 2022",
    color: "from-yellow-500 to-yellow-600",
    border: "border-yellow-500/30",
    textColor: "text-yellow-300",
  },
  {
    icon: Star,
    title: "Employee of The Year",
    org: "United Group — 2017",
    color: "from-green-500 to-green-600",
    border: "border-green-500/30",
    textColor: "text-green-300",
  },
  {
    icon: Medal,
    title: "Leadership Excellence",
    org: "Multiple Projects — 2022–2024",
    color: "from-blue-500 to-blue-600",
    border: "border-blue-500/30",
    textColor: "text-blue-300",
  },
];

export default function Awards() {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Recognition & Awards" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, i) => (
            <AnimatedSection key={award.title} delay={i * 0.15}>
              <div className={`text-center p-8 card-glass border ${award.border}`}>
                <div className={`w-20 h-20 bg-gradient-to-br ${award.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <award.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-xl font-bold ${award.textColor} mb-2`}>{award.title}</h3>
                <p className="text-gray-300">{award.org}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
