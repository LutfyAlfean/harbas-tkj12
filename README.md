# 🎓 Website 12 TKJ SMK Harapan Bangsa 2025/2026

![XII TKJ Banner](https://img.shields.io/badge/XII_TKJ-2025%2F2026-1a365d?style=for-the-badge)
![SMK Harapan Bangsa](https://img.shields.io/badge/SMK-Harapan_Bangsa-2d8b74?style=for-the-badge)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=white)

Website resmi kelas XII Teknik Komputer dan Jaringan SMK Harapan Bangsa tahun ajaran 2025/2026. Dibuat dengan teknologi modern dan desain yang menarik.

---

## 📝 Deskripsi

Website ini merupakan website statis yang menampilkan profil kelas XII TKJ SMK Harapan Bangsa. Website dibuat menggunakan React dengan Tailwind CSS dan menampilkan:

- **Hero Section** - Landing page dengan background foto kelas dan statistik
- **About Section** - Informasi tentang kelas XII TKJ SMK Harapan Bangsa
- **Gallery Section** - Galeri foto 5 kelas (TKJ 1, TKJ 2, TKJ 3, TKJ 4, TKJ 5) dengan layout 3 kolom dan fitur lightbox
- **Footer** - Informasi kontak lengkap, lokasi sekolah, dan social media

---

## ✨ Fitur Unggulan

### 🎨 Desain Modern
- Warna tema biru navy dan tosca sesuai identitas sekolah
- Typography menggunakan font Poppins dan Plus Jakarta Sans
- Animasi smooth menggunakan CSS animations
- Fully responsive untuk semua device

### 🖼️ Gallery Interaktif
- Grid layout 3 kolom dengan 5 foto kelas TKJ
- Urutan foto TKJ 1 sampai TKJ 5
- Hover effect dengan overlay informasi
- Lightbox untuk melihat foto full size
- Smooth transitions

### ⚡ Performa Tinggi
- Static site = loading super cepat
- Optimized images
- Gzip compression
- Browser caching

### 🔒 Keamanan
- Security headers (X-Frame-Options, X-Content-Type-Options, X-XSS-Protection)
- No backend = minimal attack surface

### 🐳 Docker Ready
- Dockerfile untuk build production
- Docker Compose untuk easy deployment
- Nginx sebagai web server
- Health check endpoint

### 📱 Responsive Design
- Mobile-first approach
- Adaptif untuk tablet dan desktop
- Touch-friendly interface

---

## 🛠️ Tech Stack

| Technology | Description |
|------------|-------------|
| React 18.3 | Library UI |
| TypeScript 5.0 | Type Safety |
| Tailwind CSS 3.4 | Styling |
| Vite 5.0 | Build Tool |
| Nginx Alpine | Web Server |
| Docker 20.10+ | Containerization |

---

## 📍 Informasi Kontak

| Info | Detail |
|------|--------|
| **Alamat** | Jl. Komjen Pol. M. Jasin (Akses UI) No. 89, Kelapa Dua Cimanggis, Depok, Jawa Barat 16951 |
| **Telepon** | 021 - 87720786 |
| **Fax** | 021 - 87721016 |
| **Website** | [www.smkharapanbangsa.sch.id](https://www.smkharapanbangsa.sch.id) |
| **Instagram** | [@smk_harapanbangsa](https://www.instagram.com/smk_harapanbangsa) |
| **YouTube** | [SMK Harapan Bangsa](https://www.youtube.com/channel/UCfJ_yGJB-K9qv90ks6DGMzA) |

---

## 🚀 Quick Start

### Development

```bash
# Clone repository
git clone <repository-url>
cd 12tkj-harbas-website

# Install dependencies
npm install

# Run development server
npm run dev
```

### Production with Docker

```bash
# Build dan run dengan Docker Compose
docker compose up -d --build

# Akses di http://localhost:8213
```

---

## 📂 Struktur Project

```
12tkj-harbas-website/
├── src/
│   ├── assets/           # Gambar dan assets
│   │   ├── logo-harbas.png
│   │   └── gallery/      # Foto galeri (tkj1-tkj5)
│   ├── components/       # React components
│   │   ├── Header.tsx    # Navigasi header
│   │   ├── Hero.tsx      # Hero section dengan CTA
│   │   ├── About.tsx     # Informasi tentang kelas
│   │   ├── Gallery.tsx   # Galeri foto 3 kolom
│   │   └── Footer.tsx    # Footer dengan kontak & social media
│   ├── pages/
│   │   └── Index.tsx     # Halaman utama
│   ├── index.css         # Design system
│   └── main.tsx
├── public/
│   └── favicon.png
├── Dockerfile            # Docker build config
├── docker-compose.yml    # Docker Compose config
├── nginx.conf            # Nginx configuration
├── devops.md             # Deployment guide
└── README.md
```

---

## 🧭 Navigasi Website

| Menu | Deskripsi |
|------|-----------|
| Beranda | Hero section dengan welcome message |
| Tentang Kami | Informasi tentang kelas XII TKJ |
| Galeri Foto | Dokumentasi foto 5 kelas TKJ |

---

## 📖 Dokumentasi Deployment

Untuk panduan lengkap deployment dengan Docker, Nginx, atau Apache, silakan baca **[devops.md](devops.md)**

---

## 👥 Tim Pengembang

Dibuat dengan ❤️ oleh siswa-siswi **XII TKJ SMK Harapan Bangsa** tahun ajaran 2025/2026.

---

## 📄 License

MIT License - Silakan gunakan untuk keperluan edukasi.

---

<p align="center">
  <strong>🎓 XII TKJ SMK Harapan Bangsa 2025/2026</strong><br>
  <em>"Bersama kita bisa, bersama kita jadi juara!"</em>
</p>
