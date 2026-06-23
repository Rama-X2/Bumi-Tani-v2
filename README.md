# BumiTani – Modern Agricultural E-Commerce Website

Website e-commerce pertanian modern premium. Dibuat dengan HTML, TailwindCSS CDN, dan Vanilla JavaScript.

## 🚀 Cara Menjalankan

Cukup buka file `index.html` di browser. **Tidak perlu npm, node, atau build process apapun.**

```text
web-tani-pupuk/
└── index.html   ← Buka file ini di browser
```

## ⚙️ Konfigurasi

### Ganti Nomor WhatsApp Admin
Buka `script.js`, cari baris paling atas:

```js
const ADMIN_WHATSAPP = "085795185561"; // Ganti nomor ini
```

Ganti `"085795185561"` dengan nomor WhatsApp admin Anda. Sistem secara otomatis mengonversi awalan angka `0` menjadi format kode negara Indonesia (`62`) saat melakukan pengalihan pesan.

## 📁 Struktur File

```text
web-tani-pupuk/
├── index.html              ← Halaman utama (SPA)
├── style.css               ← Custom styles & typography
├── script.js               ← JavaScript (database 72 produk & logika keranjang)
├── favicon.png             ← Icon website (Favicon)
├── Header-Profil.jpg       ← Gambar Banner halaman Profil Perusahaan
└── products/
    ├── bibit/              ← 1.jpg – 12.jpg
    ├── nutrisi/            ← 1.jpg – 12.jpg
    ├── pakan/              ← 1.jpg – 12.jpg
    ├── peralatan/          ← 1.jpg – 12.jpg
    ├── pestisida/          ← 1.jpg – 12.jpg
    └── pupuk/              ← 1.jpg – 12.jpg
```

## 🌟 Fitur

- ✅ Sticky navbar dengan blur effect
- ✅ Mobile responsive menu drawer
- ✅ Hero section premium dengan visual elegan (tanpa emoji)
- ✅ Featured products (pilihan produk rating tertinggi)
- ✅ Katalog lengkap 72 produk (6 kategori × 12 produk)
- ✅ Filter kategori real-time
- ✅ Pencarian produk real-time
- ✅ Quick view modal detail per produk dengan deskripsi lengkap
- ✅ Sistem keranjang belanja dinamis (Add to Cart) menggunakan LocalStorage
- ✅ Cart sidebar modern
- ✅ Checkout otomatis via WhatsApp dengan template data pengiriman lengkap (Nama, Alamat, Catatan)
- ✅ Form Kontak direct ke WhatsApp admin
- ✅ Floating WhatsApp button untuk konsultasi langsung
- ✅ FAQ accordion yang interaktif
- ✅ Halaman Profil dengan estetika premium (frame rounded & bayangan)
- ✅ SEO meta tags & Open Graph
- ✅ Lazy loading gambar untuk performa optimal
- ✅ Smooth scrolling

## 🎨 Design

- **Font**: Inter & Manrope (Google Fonts)
- **Warna**: Natural premium (Sage green, forest green, broken white, dark accent)
- **Style**: Clean luxury UI, subtle shadows, glassmorphism, card hover micro-animations
- **Ikon**: Lucide Icons (bebas emoji untuk kesan profesional)

## 📦 CDN / Library yang Digunakan

- TailwindCSS: `https://cdn.tailwindcss.com`
- Lucide Icons: `https://unpkg.com/lucide@latest`

## 🚢 Deploy

Website ini langsung siap di-deploy tanpa build process ke layanan hosting statis apa pun:
- **Vercel**: Drop folder project ke vercel.com
- **Netlify**: Drag & drop folder ke netlify.com
- **GitHub Pages**: Push ke repo → aktifkan di Settings/Pages

---

Dibuat untuk portfolio freelancer web developer modern 🚀
