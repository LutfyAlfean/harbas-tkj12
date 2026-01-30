import { Target, Eye, CheckCircle } from "lucide-react";

const VisionMission = () => {
  const missions = [
    "Menguasai konsep dasar dan lanjutan jaringan komputer",
    "Mengembangkan kemampuan troubleshooting dan problem solving",
    "Membangun karakter profesional dan berintegritas",
    "Siap bersaing di dunia kerja maupun melanjutkan pendidikan",
    "Berkontribusi positif dalam perkembangan teknologi Indonesia"
  ];

  return (
    <section id="visi-misi" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border relative overflow-hidden group hover:shadow-hover transition-all duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-colors"></div>
            
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl gradient-secondary flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-secondary-foreground" />
              </div>
              
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                Visi
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Menjadi kelas yang unggul dalam penguasaan teknologi jaringan komputer, 
                menghasilkan lulusan yang kompeten, inovatif, dan siap berkontribusi 
                dalam era digital Indonesia.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border relative overflow-hidden group hover:shadow-hover transition-all duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors"></div>
            
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                Misi
              </h3>
              
              <ul className="space-y-4">
                {missions.map((mission, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{mission}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-16 text-center">
          <blockquote className="text-xl md:text-2xl font-heading font-medium text-foreground italic">
            "Bersama kita bisa, bersama kita jadi juara!"
          </blockquote>
          <p className="mt-4 text-secondary font-semibold">— XII TKJ 2025/2026</p>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
