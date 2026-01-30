import { Network, Shield, Users, Code, Server, Wrench } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Network,
      title: "Jaringan Komputer",
      description: "Membangun dan mengelola infrastruktur jaringan modern"
    },
    {
      icon: Server,
      title: "Server Administration",
      description: "Konfigurasi dan maintenance server berbagai platform"
    },
    {
      icon: Shield,
      title: "Keamanan Jaringan",
      description: "Implementasi firewall dan sistem keamanan jaringan"
    },
    {
      icon: Code,
      title: "Programming",
      description: "Scripting dan automasi untuk efisiensi sistem"
    },
    {
      icon: Wrench,
      title: "Troubleshooting",
      description: "Diagnosis dan perbaikan masalah hardware & software"
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Kolaborasi tim dalam proyek-proyek besar"
    }
  ];

  return (
    <section id="tentang" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Tentang Kami
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Siapa <span className="text-gradient">Kami?</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Kami adalah siswa-siswi kelas XII program keahlian Teknik Komputer dan Jaringan 
            SMK Harapan Bangsa angkatan 2025/2026. Bersama-sama kami belajar, berkembang, 
            dan mempersiapkan diri untuk menjadi tenaga ahli di bidang teknologi informasi.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group bg-card p-6 rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 border border-border hover:border-secondary/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <skill.icon className="w-7 h-7 text-secondary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                {skill.title}
              </h3>
              <p className="text-muted-foreground">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground">
            Dibimbing oleh guru-guru profesional dan berpengalaman
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
