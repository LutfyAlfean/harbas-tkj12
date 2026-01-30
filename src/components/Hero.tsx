import tkj4 from "@/assets/gallery/tkj4.jpeg";

const Hero = () => {
  const scrollToGallery = () => {
    document.getElementById("galeri")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${tkj4})` }}
      >
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/30 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="text-primary-foreground text-sm font-medium">
              Tahun Ajaran 2025/2026
            </span>
          </div>

          {/* Title */}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-slide-up">
            XII TKJ
          </h1>
          
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-secondary mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Teknik Komputer & Jaringan
          </h2>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            SMK Harapan Bangsa
          </p>

          {/* Tagline */}
          <p className="text-base md:text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            Menyiapkan generasi ahli jaringan komputer yang kompeten, 
            inovatif, dan berintegritas untuk masa depan teknologi Indonesia.
          </p>

          {/* CTA Button */}
          <button 
            onClick={scrollToGallery}
            className="group inline-flex items-center gap-3 px-8 py-4 gradient-secondary text-secondary-foreground rounded-full font-semibold shadow-glow hover:shadow-hover transition-all duration-300 transform hover:scale-105 animate-zoom-in"
            style={{ animationDelay: '0.4s' }}
          >
            Lihat Galeri Kami
            <svg 
              className="w-5 h-5 group-hover:translate-y-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="text-center">
              <div className="font-heading text-3xl md:text-4xl font-bold text-secondary">34+</div>
              <div className="text-sm text-primary-foreground/70">Siswa</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-3xl md:text-4xl font-bold text-secondary">3</div>
              <div className="text-sm text-primary-foreground/70">Tahun Belajar</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-3xl md:text-4xl font-bold text-secondary">100%</div>
              <div className="text-sm text-primary-foreground/70">Semangat</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary-foreground/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
