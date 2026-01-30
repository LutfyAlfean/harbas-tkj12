import { useState } from "react";
import tkj2 from "@/assets/gallery/tkj2.jpg";
import tkj3 from "@/assets/gallery/tkj3.jpeg";
import tkj4 from "@/assets/gallery/tkj4.jpeg";
import tkj5 from "@/assets/gallery/tkj5.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: tkj2,
      title: "Foto Bersama di Kelas",
      description: "Momen kebersamaan dengan wali kelas tercinta"
    },
    {
      src: tkj5,
      title: "Kegiatan Keagamaan",
      description: "Peringatan hari besar keagamaan bersama"
    },
    {
      src: tkj3,
      title: "Hari Profesi",
      description: "Menunjukkan cita-cita dan profesi impian"
    },
    {
      src: tkj4,
      title: "Outdoor Class",
      description: "Belajar bersama di luar kelas dengan suasana segar"
    }
  ];

  return (
    <section id="galeri" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Galeri Foto
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Momen <span className="text-gradient">Berharga</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Dokumentasi perjalanan kami selama di SMK Harapan Bangsa. 
            Setiap foto menyimpan cerita dan kenangan indah.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-hover transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-heading text-xl font-semibold text-primary-foreground mb-2">
                    {image.title}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm">
                    {image.description}
                  </p>
                </div>
              </div>

              {/* Corner Badge */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-secondary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-secondary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full animate-zoom-in">
            <img 
              src={selectedImage} 
              alt="Full size" 
              className="w-full h-auto rounded-xl shadow-2xl"
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center hover:bg-accent transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
