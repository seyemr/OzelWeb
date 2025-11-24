# Göreneller - Özel Eğitim & Rehabilitasyon Merkezi

Modern, erişilebilir ve kullanıcı dostu bir React + TailwindCSS web sitesi. Görme engelli bireyler için özel eğitim ve rehabilitasyon hizmetleri sunan Göreneller Merkezi'nin resmi web sitesidir.

## 🌟 Özellikler

### 📱 Modern Tasarım
- **Responsive Design**: Mobil, tablet ve masaüstü cihazlarda mükemmel görünüm
- **Modern UI**: Yuvarlak köşeli kartlar, gradient renkler ve smooth animasyonlar
- **Beyaz Ağırlıklı Tema**: Temiz ve profesyonel görünüm

### ♿ Erişilebilirlik
- **Yüksek Kontrast Modu**: Görme zorluğu yaşayan kullanıcılar için
- **Büyük Yazı Modu**: Yazıları büyüterek okunabilirliği artırır
- **Klavye Navigasyonu**: Tab ile gezinme desteği
- **Screen Reader Uyumlu**: ARIA etiketleri ve semantik HTML

### 🎯 Ana Bölümler
1. **Hero Section**: Etkileyici başlık ve kurumsal slogan
2. **Hakkımızda**: Kurum tanıtımı ve değerler
3. **Hizmetler**: 
   - Rehberle Yürüme Eğitimi
   - Duvar Takibi Teknikleri
   - Koruma Teknikleri
4. **Eğitmenler**: Uzman kadro tanıtımı (slider ile)
5. **İletişim**: Adres, telefon ve harita bilgileri

### 🚀 Teknolojiler
- **React 19**: Modern React hooks ve component yapısı
- **TypeScript**: Type-safe geliştirme
- **TailwindCSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animasyonlar ve geçişler
- **Lucide React**: Modern ve accessible iconlar
- **Vite**: Hızlı development ve build

### 📞 İletişim Özellikleri
- **WhatsApp Butonu**: Tek tıkla WhatsApp üzerinden iletişim
- **Telefon Linki**: Doğrudan arama yapma
- **Google Maps**: Lokasyon bilgisi ve yol tarifi

## 🛠️ Kurulum ve Çalıştırma

### Gereksinimler
- Node.js 18+ 
- npm veya yarn

### Kurulum
```bash
# Projeyi klonlayın
git clone <repository-url>

# Proje klasörüne gidin
cd goreneller

# Bağımlılıkları yükleyin
npm install

# Development sunucusunu başlatın
npm run dev
```

### Build
```bash
# Production build oluşturun
npm run build

# Build'i önizleyin
npm run preview
```

## 📁 Proje Yapısı

```
src/
├── components/          # Yeniden kullanılabilir componentler
├── assets/             # Statik dosyalar (resimler, iconlar)
├── App.tsx            # Ana uygulama componenti
├── main.tsx           # Uygulama giriş noktası
├── index.css          # Global stiller ve TailwindCSS
└── App.css            # Component-specific stiller

public/
├── vite.svg           # Favicon
└── index.html         # HTML şablonu

tailwind.config.js     # TailwindCSS konfigürasyonu
postcss.config.js      # PostCSS konfigürasyonu
tsconfig.json          # TypeScript konfigürasyonu
vite.config.ts         # Vite konfigürasyonu
```

## 🎨 Tasarım Sistemi

### Renkler
- **Primary**: Mavi tonları (#0ea5e9 - #0c4a6e)
- **Secondary**: Gri tonları (#f8fafc - #0f172a)
- **Background**: Beyaz ağırlıklı (#f9fafb)
- **Accent**: WhatsApp yeşil (#10b981)

### Tipografi
- **Font**: Inter (Google Fonts)
- **Boyutlar**: 14px - 64px arası responsive boyutlar
- **Ağırlık**: 300 - 700 arası font weights

### Spacing
- **Container**: max-width 1280px, responsive padding
- **Sections**: 64px - 96px vertical spacing
- **Components**: 16px - 32px internal spacing

## 📧 İletişim

**Göreneller Özel Eğitim ve Rehabilitasyon Merkezi**
- 📍 Adres: Merkez Mahallesi, Eğitim Caddesi No:123, Çankaya/Ankara
- 📞 Telefon: +90 555 123 45 67
- 💬 WhatsApp: Doğrudan site üzerinden
- 🗺️ Harita: Google Maps entegrasyonu

## 🔧 Geliştirme Notları

- Tüm componentler TypeScript ile yazılmıştır
- Erişilebilirlik standartlarına uygun geliştirilmiştir
- Mobile-first yaklaşımla responsive tasarlanmıştır
- SEO optimizasyonu yapılmıştır
- Performance optimizasyonu sağlanmıştır

## 📄 Lisans

Bu proje Göreneller Özel Eğitim ve Rehabilitasyon Merkezi için geliştirilmiştir.
© 2024 Tüm hakları saklıdır.
