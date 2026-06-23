# TaniSmart – Modern Agricultural E-Commerce Website

Website ecommerce pertanian modern premium. Dibuat dengan HTML, TailwindCSS CDN, dan Vanilla JavaScript.

## 🚀 Cara Menjalankan

Cukup buka file `index.html` di browser. **Tidak perlu npm, node, atau build process apapun.**

```
web-tani-pupuk/
└── index.html   ← Buka file ini di browser
```

## ⚙️ Konfigurasi

### Ganti Nomor WhatsApp Admin
Buka `script.js`, cari baris paling atas:

```js
const ADMIN_WHATSAPP = '6281234567890'; // Ganti nomor ini
```

Ganti `6281234567890` dengan nomor WhatsApp admin Anda (format internasional, tanpa tanda +).

## 📁 Struktur File

```
web-tani-pupuk/
├── index.html              ← Halaman utama
├── style.css               ← Custom styles
├── script.js               ← JavaScript (data produk + logika)
├── Header-Profil.jpg       ← Banner halaman Profil
├── gambar-untuk-web-pertanian/
│   ├── bibit/              ← 1.jpg – 12.jpg
│   ├── nutrisi/            ← 1.jpg – 12.jpg
│   ├── pakan/              ← 1.jpg – 12.jpg
│   ├── peralatan/          ← 1.jpg – 12.jpg
│   ├── Pestisida/          ← 1.jpg – 12.jpg
│   └── pupuk/              ← 1.jpg – 12.jpg
└── teks-deskripsi-*/       ← File teks deskripsi produk
```

## 🌟 Fitur

- ✅ Sticky navbar dengan blur effect
- ✅ Mobile responsive navbar
- ✅ Hero section premium dengan animasi GSAP
- ✅ Featured products
- ✅ Katalog 72 produk (6 kategori × 12 produk)
- ✅ Filter kategori real-time
- ✅ Pencarian produk real-time
- ✅ Quick view modal per produk
- ✅ Sistem keranjang belanja (Add to Cart)
- ✅ Cart sidebar modern
- ✅ Checkout otomatis via WhatsApp
- ✅ Floating WhatsApp button
- ✅ FAQ accordion
- ✅ Halaman Profil dengan Header-Profil.jpg
- ✅ Halaman Kontak dengan form WhatsApp
- ✅ AOS scroll animations
- ✅ Testimonial section
- ✅ Footer profesional
- ✅ SEO meta tags & Open Graph
- ✅ Lazy loading gambar
- ✅ Smooth scrolling

## 🎨 Design

- **Font**: Inter (Google Fonts)
- **Warna**: Hijau modern premium + putih clean + dark accent
- **Style**: Glassmorphism, gradient modern, card hover animation
- **Referensi**: Hostinger, Shopify, Stripe, Linear

## 📦 CDN yang Digunakan

- TailwindCSS: `https://cdn.tailwindcss.com`
- AOS Animation: `https://unpkg.com/aos@2.3.4/dist/aos.css`
- GSAP: `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js`
- Google Fonts: Inter

## 🚢 Deploy

Website ini langsung siap di-deploy tanpa build process ke:
- **Vercel**: Drop folder project ke vercel.com
- **Netlify**: Drag & drop folder ke netlify.com
- **GitHub Pages**: Push ke repo → enable Pages

---

Dibuat untuk portfolio freelancer web developer modern 🚀
