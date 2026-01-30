# 📘 Panduan Deployment - Website 12 TKJ SMK Harapan Bangsa

Dokumentasi lengkap step-by-step untuk deploy website 12 TKJ ke server menggunakan Docker.

## 📋 Prerequisites

Pastikan server Anda sudah terinstall:

- **Git** - untuk clone repository
- **Docker** - versi 20.10 atau lebih baru
- **Docker Compose** - versi 2.0 atau lebih baru (biasanya sudah include di Docker Desktop)

### Cek Instalasi

```bash
git --version
docker --version
docker compose version
```

---

## 🚀 Cara Deploy

### Option 1: Deploy dengan Docker Compose (Recommended)

Cara paling mudah dan direkomendasikan untuk production.

#### Step 1: Clone Repository

```bash
git clone <repository-url>
cd 12tkj-harbas-website
```

#### Step 2: Build dan Run dengan Docker Compose

```bash
# Build dan jalankan container
docker compose up -d --build

# Atau jika menggunakan docker-compose versi lama
docker-compose up -d --build
```

#### Step 3: Verifikasi Deployment

```bash
# Cek status container
docker compose ps

# Cek logs
docker compose logs -f

# Test akses
curl http://localhost:8213
```

#### Step 4: Akses Website

Buka browser dan akses: **http://localhost:8213** atau **http://YOUR_SERVER_IP:8213**

---

### Option 2: Deploy dengan Docker Manual

Jika tidak menggunakan Docker Compose.

#### Step 1: Clone Repository

```bash
git clone <repository-url>
cd 12tkj-harbas-website
```

#### Step 2: Build Docker Image

```bash
docker build -t 12tkj-harbas-web .
```

#### Step 3: Run Container

```bash
docker run -d \
  --name 12tkj-harbas-web \
  -p 8213:8213 \
  --restart unless-stopped \
  12tkj-harbas-web
```

#### Step 4: Verifikasi

```bash
docker ps
curl http://localhost:8213
```

---

### Option 3: Deploy ke Nginx/Apache (Tanpa Docker)

Untuk hosting tradisional menggunakan web server.

#### Step 1: Install Node.js dan Build Project

```bash
# Install Node.js 20 LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone dan build
git clone <repository-url>
cd 12tkj-harbas-website

npm install
npm run build
```

#### Step 2a: Setup Nginx

```bash
# Install Nginx
sudo apt update
sudo apt install nginx -y

# Copy hasil build ke web root
sudo cp -r dist/* /var/www/html/12tkj/

# Buat config Nginx
sudo nano /etc/nginx/sites-available/12tkj
```

Isi konfigurasi:

```nginx
server {
    listen 8213;
    server_name _;
    root /var/www/html/12tkj;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

Aktifkan site:

```bash
sudo ln -s /etc/nginx/sites-available/12tkj /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

#### Step 2b: Setup Apache

```bash
# Install Apache
sudo apt update
sudo apt install apache2 -y

# Copy hasil build
sudo cp -r dist/* /var/www/html/12tkj/

# Buat config Apache
sudo nano /etc/apache2/sites-available/12tkj.conf
```

Isi konfigurasi:

```apache
Listen 8213

<VirtualHost *:8213>
    ServerAdmin admin@localhost
    DocumentRoot /var/www/html/12tkj
    
    <Directory /var/www/html/12tkj>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    # Handle SPA routing
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]

    ErrorLog ${APACHE_LOG_DIR}/12tkj_error.log
    CustomLog ${APACHE_LOG_DIR}/12tkj_access.log combined
</VirtualHost>
```

Aktifkan site:

```bash
sudo a2ensite 12tkj.conf
sudo a2enmod rewrite
sudo systemctl restart apache2
```

---

## 🔧 Manajemen Container

### Commands Umum

```bash
# Start container
docker compose up -d

# Stop container
docker compose down

# Restart container
docker compose restart

# Lihat logs
docker compose logs -f

# Lihat status
docker compose ps

# Rebuild tanpa cache
docker compose build --no-cache
docker compose up -d
```

### Update Website

```bash
# Pull perubahan terbaru
git pull origin main

# Rebuild dan deploy
docker compose up -d --build
```

---

## 🌐 Setup Domain (Optional)

### Dengan Nginx Reverse Proxy

```nginx
server {
    listen 80;
    server_name 12tkj.smkharapanbangsa.sch.id;

    location / {
        proxy_pass http://localhost:8213;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Setup SSL dengan Certbot

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d 12tkj.smkharapanbangsa.sch.id
```

---

## ❓ Troubleshooting

### Port sudah digunakan

```bash
# Cek port yang sedang digunakan
sudo lsof -i :8213

# Kill proses jika diperlukan
sudo kill -9 <PID>
```

### Container tidak berjalan

```bash
# Cek logs untuk error
docker compose logs

# Cek event container
docker events
```

### Build gagal

```bash
# Clear Docker cache
docker system prune -a

# Rebuild dari awal
docker compose build --no-cache
```

---

## 📞 Support

Jika mengalami masalah, silakan:

1. Baca dokumentasi ini dengan teliti
2. Cek logs container
3. Hubungi tim pengembang 12 TKJ

---

**Made with ❤️ by XII TKJ SMK Harapan Bangsa 2025/2026**
