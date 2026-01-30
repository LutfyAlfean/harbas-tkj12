import logoHarbas from "@/assets/logo-harbas.png";
import { MapPin, Phone, Globe } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logoHarbas} 
                alt="Logo SMK Harapan Bangsa" 
                className="h-16 w-auto bg-background rounded-lg p-1"
              />
              <div>
                <h3 className="font-heading font-bold text-xl">XII TKJ</h3>
                <p className="text-primary-foreground/80 text-sm">SMK Harapan Bangsa</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 max-w-md mb-6">
              Website resmi kelas XII Teknik Komputer dan Jaringan 
              SMK Harapan Bangsa tahun ajaran 2025/2026. Dibuat dengan 
              penuh semangat oleh siswa-siswi TKJ.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="https://www.instagram.com/smk_harapanbangsa" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-secondary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/channel/UCfJ_yGJB-K9qv90ks6DGMzA" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-secondary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  Jl. Komjen Pol. M. Jasin ( Akses UI ) No. 89 Kelapa Dua Cimanggis, Depok Jawa Barat 16951
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  Telp. 021 - 87720786 | Fax. 021 - 87721016
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="https://www.smkharapanbangsa.sch.id" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 text-sm hover:text-secondary transition-colors">
                  www.smkharapanbangsa.sch.id
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#beranda" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#tentang" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#galeri" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                  Galeri Foto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © {currentYear} XII TKJ SMK Harapan Bangsa. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Made with ❤️ by XII TKJ 2025/2026
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
