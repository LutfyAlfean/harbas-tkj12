const About = () => {
  return (
    <section id="tentang" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
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

        {/* Bottom Text */}
        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground">
            Dibimbing oleh guru-guru profesional dan berpengalaman
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
