import logoHarbas from "@/assets/logo-harbas.png";

const Header = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={logoHarbas} 
              alt="Logo SMK Harapan Bangsa" 
              className="h-10 md:h-12 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="font-heading font-bold text-primary text-sm md:text-base">
                12 TKJ
              </h1>
              <p className="text-xs text-muted-foreground">
                SMK Harapan Bangsa
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("beranda")}
              className="text-sm font-medium text-foreground hover:text-secondary transition-colors"
            >
              Beranda
            </button>
            <button 
              onClick={() => scrollToSection("tentang")}
              className="text-sm font-medium text-foreground hover:text-secondary transition-colors"
            >
              Tentang
            </button>
            <button 
              onClick={() => scrollToSection("galeri")}
              className="text-sm font-medium text-foreground hover:text-secondary transition-colors"
            >
              Galeri
            </button>
            <button 
              onClick={() => scrollToSection("visi-misi")}
              className="text-sm font-medium text-foreground hover:text-secondary transition-colors"
            >
              Visi & Misi
            </button>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
