/* =============================================
   TaniSmart - Modern Agricultural E-Commerce
   Main JavaScript
   =============================================
   ⚙️ CONFIG: Ubah nomor WhatsApp admin di sini
   ============================================= */

const ADMIN_WHATSAPP = '6285795185561'; // Ganti dengan nomor WA admin (tanpa +)

/* =============================================
   PRODUCT DATABASE
   Data produk dari folder gambar & file teks
   ============================================= */

const PRODUCT_DATA = [

  /* ===== BIBIT (12 produk) ===== */
  {
    id: 'bibit-1',
    name: 'Pioner P21',
    weight: '1KG',
    category: 'bibit',
    desc: 'Benih jagung hibrida unggulan Pioner P21. Varietas unggul dengan potensi hasil tinggi, adaptif di berbagai jenis lahan, dan tahan terhadap cuaca ekstrem.',
    img: 'gambar-untuk-web-pertanian/bibit/1.jpg',
    featured: true,
  },
  {
    id: 'bibit-2',
    name: 'Chaitai Jagung Manis Master Sweet',
    weight: '250GR',
    category: 'bibit',
    desc: 'Benih jagung manis hibrida berkualitas tinggi. Menghasilkan jagung manis dengan rasa lezat dan produksi melimpah.',
    img: 'gambar-untuk-web-pertanian/bibit/2.jpg',
    featured: true,
  },
  {
    id: 'bibit-3',
    name: 'Chiatai Timun Harmony Plus',
    weight: '20GR',
    category: 'bibit',
    desc: 'Pertumbuhan tanaman kuat dan seragam, toleran penyakit kresek. Buah berwarna hijau tua, seragam dan tidak pahit. Panjang buah ±23cm, berat ±270g/buah. Umur panen ±32 hari.',
    img: 'gambar-untuk-web-pertanian/bibit/3.jpg',
    featured: false,
  },
  {
    id: 'bibit-4',
    name: 'Aura Kuning Semangka',
    weight: '10GR',
    category: 'bibit',
    desc: 'Umur panen 55–58 HST. Bentuk buah lonjong, kulit hijau gelap bergaris hijau tua. Daging buah kuning manis dengan kadar gula 13–14 Brix. Berat buah 5–8 Kg.',
    img: 'gambar-untuk-web-pertanian/bibit/4.jpg',
    featured: false,
  },
  {
    id: 'bibit-5',
    name: 'Chiatai Pak Choi Sawi',
    weight: '50GR',
    category: 'bibit',
    desc: 'Sangat adaptif, dapat tumbuh hampir di semua lokasi. Tanaman tegap berdaun lebar, hijau cerah. Umur panen ±30 hari. Toleran penyakit jamur.',
    img: 'gambar-untuk-web-pertanian/bibit/5.jpg',
    featured: false,
  },
  {
    id: 'bibit-6',
    name: 'Chiatai Sawi Gardena',
    weight: '15GR',
    category: 'bibit',
    desc: 'Pertumbuhan cepat, kuat, dan seragam. Toleran terhadap panas dan cocok di dataran tinggi. Daun lebar, serat halus, rasanya enak. Umur panen ±30 hari.',
    img: 'gambar-untuk-web-pertanian/bibit/6.jpg',
    featured: false,
  },
  {
    id: 'bibit-7',
    name: 'Aura Tomat Annisa',
    weight: '5GR',
    category: 'bibit',
    desc: 'Umur panen 64–67 HST. Berat buah 55–85 gram, potensi hasil 40–62 ton/ha. Bentuk buah bulat, warna merah hati. Tahan penyakit gemini virus dan layu bakteri.',
    img: 'gambar-untuk-web-pertanian/bibit/7.jpg',
    featured: false,
  },
  {
    id: 'bibit-8',
    name: 'Chiatai Puspita 06 Kacang Panjang',
    weight: '50GR',
    category: 'bibit',
    desc: 'Benih kacang panjang unggul dengan potensi produksi tinggi dan kualitas terbaik untuk berbagai jenis lahan pertanian.',
    img: 'gambar-untuk-web-pertanian/bibit/8.jpg',
    featured: false,
  },
  {
    id: 'bibit-9',
    name: 'Chiatai Esteem Semangka',
    weight: '20GR',
    category: 'bibit',
    desc: 'Pertumbuhan kuat dan seragam. Daging buah kuning, renyah dan sangat manis (kadar gula 11–12% Brix). Berat buah 2,5–3,5 kg. Umur panen ±58 HST.',
    img: 'gambar-untuk-web-pertanian/bibit/9.jpg',
    featured: false,
  },
  {
    id: 'bibit-10',
    name: 'Aura Legimo Semangka',
    weight: '10GR',
    category: 'bibit',
    desc: 'Umur panen 55–57 HST. Berat buah 3–5 kg, kadar gula 14,5–15,5 Brix. Daging buah merah. Tanaman kokoh dengan daya adaptasi luas, tahan simpan.',
    img: 'gambar-untuk-web-pertanian/bibit/10.jpg',
    featured: false,
  },
  {
    id: 'bibit-11',
    name: 'Aura Sawi Tosan',
    weight: '25GR',
    category: 'bibit',
    desc: 'Warna daun hijau segar. Umur panen 28–35 HST. Produktivitas tinggi mencapai 50–56 ton/Ha. Jumlah tangkai daun banyak.',
    img: 'gambar-untuk-web-pertanian/bibit/11.jpg',
    featured: false,
  },
  {
    id: 'bibit-12',
    name: 'Aura Terong Arya Hijau',
    weight: '10GR',
    category: 'bibit',
    desc: 'Umur panen 60–65 HST. Bentuk buah silindris memanjang, warna kulit hijau muda. Buah manis, berat per tanaman 6–7 kg. Beradaptasi baik di dataran rendah.',
    img: 'gambar-untuk-web-pertanian/bibit/12.jpg',
    featured: false,
  },

  /* ===== NUTRISI (12 produk) ===== */
  {
    id: 'nutrisi-1',
    name: 'Top Mix',
    weight: '500GR',
    category: 'nutrisi',
    desc: 'Memperbaiki konversi ransum sehingga biaya makanan lebih rendah. Anak ayam tumbuh lebih cepat dan sehat. Meningkatkan dan memperpanjang masa produksi telur.',
    img: 'gambar-untuk-web-pertanian/nutrisi/1.jpg',
    featured: true,
  },
  {
    id: 'nutrisi-2',
    name: 'Mineral Ayam',
    weight: '1KG',
    category: 'nutrisi',
    desc: 'Memperbaiki produksi telur dan meningkatkan mutu telur. Membantu pertumbuhan tulang dan bulu yang normal. Mempertinggi daya tetas telur dan mencegah penyakit kekurangan mineral.',
    img: 'gambar-untuk-web-pertanian/nutrisi/2.jpg',
    featured: false,
  },
  {
    id: 'nutrisi-3',
    name: 'Trimezyn-S',
    weight: '100GR',
    category: 'nutrisi',
    desc: 'Indikasi: Corisa, Colibacillosis, CRD, Kolera, Pullorum. Antibiotik untuk unggas yang efektif mengatasi berbagai infeksi bakteri.',
    img: 'gambar-untuk-web-pertanian/nutrisi/3.jpg',
    featured: false,
  },
  {
    id: 'nutrisi-4',
    name: 'Antisep',
    weight: '60ML',
    category: 'nutrisi',
    desc: 'Unggas: Cacar, luka dan infeksi kulit. Membasmi kuman penyakit di kandang. Sapi: Membilas ambing sebelum diperah dan pencelupan ambing sesudah diperah.',
    img: 'gambar-untuk-web-pertanian/nutrisi/4.jpg',
    featured: false,
  },
  {
    id: 'nutrisi-5',
    name: 'Vita Plex',
    weight: '100 Kapsul',
    category: 'nutrisi',
    desc: 'Mencegah dan mengobati penyakit akibat kekurangan vitamin B kompleks. Menambah daya tahan unggas, mencegah stres, dan mempercepat pertumbuhan.',
    img: 'gambar-untuk-web-pertanian/nutrisi/5.jpg',
    featured: false,
  },
  {
    id: 'nutrisi-6',
    name: 'Vita Stress',
    weight: '10GR',
    category: 'nutrisi',
    desc: 'Menambah daya tahan tubuh dan mencegah stres vaksinasi, potong paruh, pindah kandang. Mempercepat pemulihan kesehatan setelah sakit.',
    img: 'gambar-untuk-web-pertanian/nutrisi/6.jpg',
    featured: false,
  },
  {
    id: 'nutrisi-7',
    name: 'Trimezyn Bolus',
    weight: '1 Bolus',
    category: 'nutrisi',
    desc: 'Mengobati infeksi saluran pencernaan dan pernafasan. Melindungi uterus terhadap infeksi bakteri (Endometritis, metritis).',
    img: 'gambar-untuk-web-pertanian/nutrisi/7.jpg',
    featured: false,
  },
  {
    id: 'nutrisi-8',
    name: 'Egg Stimulant',
    weight: '250GR',
    category: 'nutrisi',
    desc: 'Meningkatkan produksi telur hingga 37%. Memperbaiki efisiensi ransum hingga 18%. Memperpanjang masa produksi telur dan memperkecil angka kematian.',
    img: 'gambar-untuk-web-pertanian/nutrisi/8.jpg',
    featured: true,
  },
  {
    id: 'nutrisi-9',
    name: 'Vita Chicks',
    weight: '5GR',
    category: 'nutrisi',
    desc: 'Mempercepat pertumbuhan anak ayam. Mencegah kekurangan vitamin dan mengatasi stres. Mengurangi angka kematian pada anak ayam.',
    img: 'gambar-untuk-web-pertanian/nutrisi/9.jpg',
    featured: false,
  },
  {
    id: 'nutrisi-10',
    name: 'Therapy',
    weight: '100GR',
    category: 'nutrisi',
    desc: 'Untuk mencegah penyakit waktu stres dan mencegah terhadap adanya wabah penyakit pada unggas.',
    img: 'gambar-untuk-web-pertanian/nutrisi/10.jpg',
    featured: false,
  },
  {
    id: 'nutrisi-11',
    name: 'Vita Plex',
    weight: '50 Kapsul',
    category: 'nutrisi',
    desc: 'Mencegah dan mengobati penyakit akibat kekurangan vitamin B kompleks. Menambah daya tahan unggas, mencegah stres, dan mempertinggi efisiensi ransum.',
    img: 'gambar-untuk-web-pertanian/nutrisi/11.jpg',
    featured: false,
  },
  {
    id: 'nutrisi-12',
    name: 'Super Power',
    weight: '10 Kapsul',
    category: 'nutrisi',
    desc: 'Menambah tenaga ayam, membuat nafas lebih panjang dan tahan lelah. Menjaga kesehatan dan mempertinggi daya tahan terhadap perubahan suhu.',
    img: 'gambar-untuk-web-pertanian/nutrisi/12.jpg',
    featured: false,
  },

  /* ===== PAKAN (12 produk) ===== */
  {
    id: 'pakan-1',
    name: 'Pakan Ikan BA6',
    weight: '30KG',
    category: 'pakan',
    desc: 'Pakan ikan bermutu tinggi dengan kandungan nutrisi lengkap untuk mendukung pertumbuhan optimal ikan budidaya.',
    img: 'gambar-untuk-web-pertanian/pakan/1.jpg',
    featured: false,
  },
  {
    id: 'pakan-2',
    name: 'All Feed – 3',
    weight: '30KG',
    category: 'pakan',
    desc: 'Pakan ikan apung berkualitas tinggi. Formulasi khusus untuk ikan budidaya dengan kandungan protein tinggi.',
    img: 'gambar-untuk-web-pertanian/pakan/2.jpg',
    featured: false,
  },
  {
    id: 'pakan-3',
    name: 'New Supra Z – 2',
    weight: '30KG',
    category: 'pakan',
    desc: 'Pakan ikan premium dengan formula terbaik untuk mendukung pertumbuhan ikan yang optimal dan sehat.',
    img: 'gambar-untuk-web-pertanian/pakan/3.jpg',
    featured: false,
  },
  {
    id: 'pakan-4',
    name: 'Pakan Ayam Buras 582M',
    weight: '50KG',
    category: 'pakan',
    desc: 'Pakan komplit butiran ayam buras tanpa antibiotik Growth Promoter. Formula alami untuk ayam kampung yang sehat dan produktif.',
    img: 'gambar-untuk-web-pertanian/pakan/4.jpg',
    featured: true,
  },
  {
    id: 'pakan-5',
    name: 'Pakan Sapi NC62',
    weight: '50KG',
    category: 'pakan',
    desc: 'Pakan butiran masa penggemukan sapi potong. Formulasi khusus untuk mempercepat pertambahan bobot badan sapi.',
    img: 'gambar-untuk-web-pertanian/pakan/5.jpg',
    featured: false,
  },
  {
    id: 'pakan-6',
    name: 'HI-Pro-Vite 594',
    weight: '50KG',
    category: 'pakan',
    desc: 'Pakan komplit butiran ayam hobi untuk umur di atas 22 minggu. Formulasi nutrisi lengkap untuk kesehatan ayam hobi dewasa.',
    img: 'gambar-untuk-web-pertanian/pakan/6.jpg',
    featured: false,
  },
  {
    id: 'pakan-7',
    name: 'HI-Pro-Vite 593',
    weight: '50KG',
    category: 'pakan',
    desc: 'Pakan komplit butiran ayam hobi untuk umur 14–22 minggu. Nutrisi seimbang untuk pertumbuhan optimal ayam hobi remaja.',
    img: 'gambar-untuk-web-pertanian/pakan/7.jpg',
    featured: false,
  },
  {
    id: 'pakan-8',
    name: 'HI-Pro-Vite 591',
    weight: '50KG',
    category: 'pakan',
    desc: 'Pakan komplit butiran ayam hobi untuk umur 1 hari – 8 minggu. Formula starter khusus untuk anak ayam hobi.',
    img: 'gambar-untuk-web-pertanian/pakan/8.jpg',
    featured: false,
  },
  {
    id: 'pakan-9',
    name: 'HI-Pro-Vite 324KJ',
    weight: '50KG',
    category: 'pakan',
    desc: 'Pakan komplit tepung ayam petelur (Layer). Formula lengkap untuk mendukung produksi telur yang optimal dan berkelanjutan.',
    img: 'gambar-untuk-web-pertanian/pakan/9.jpg',
    featured: false,
  },
  {
    id: 'pakan-10',
    name: 'HI-Pro-Vite 144',
    weight: '50KG',
    category: 'pakan',
    desc: 'Pakan konsentrat itik petelur. Kandungan nutrisi tinggi untuk mendukung produksi telur itik yang optimal.',
    img: 'gambar-untuk-web-pertanian/pakan/10.jpg',
    featured: false,
  },
  {
    id: 'pakan-11',
    name: 'HJ-Pro-Vite 112',
    weight: '50KG',
    category: 'pakan',
    desc: 'Pakan konsentrat ayam pedaging (Finisher). Formula khusus untuk fase penggemukan ayam broiler agar cepat besar.',
    img: 'gambar-untuk-web-pertanian/pakan/11.jpg',
    featured: false,
  },
  {
    id: 'pakan-12',
    name: 'T-79-3',
    weight: '30KG',
    category: 'pakan',
    desc: 'Pakan ternak berkualitas tinggi dengan kandungan nutrisi seimbang untuk mendukung pertumbuhan dan kesehatan ternak.',
    img: 'gambar-untuk-web-pertanian/pakan/12.jpg',
    featured: false,
  },

  /* ===== PERALATAN (12 produk) ===== */
  {
    id: 'peralatan-1',
    name: 'Neo Antisep',
    weight: 'Spray',
    category: 'peralatan',
    desc: 'Antiseptik premium untuk kandang dan peralatan ternak. Formula efektif membunuh kuman dan bakteri penyebab penyakit.',
    img: 'gambar-untuk-web-pertanian/peralatan/1.jpg',
    featured: false,
  },
  {
    id: 'peralatan-2',
    name: 'Imustim',
    weight: 'Suplemen',
    category: 'peralatan',
    desc: 'Sistem imun kuat, ayam sehat. Suplemen imunostimulan untuk meningkatkan daya tahan tubuh unggas terhadap berbagai penyakit.',
    img: 'gambar-untuk-web-pertanian/peralatan/2.jpg',
    featured: false,
  },
  {
    id: 'peralatan-3',
    name: 'Pendekar 3 in 1',
    weight: '16 Liter',
    category: 'peralatan',
    desc: '3 in 1: Electric, manual, dan Easy taking battery. Sprayer serbaguna yang fleksibel untuk berbagai kebutuhan penyemprotan.',
    img: 'gambar-untuk-web-pertanian/peralatan/3.jpg',
    featured: true,
  },
  {
    id: 'peralatan-4',
    name: 'Yoto Sprayer',
    weight: '16 Liter',
    category: 'peralatan',
    desc: 'Dilengkapi regulator pengatur kecepatan, lampu LED indikator pengisian baterai, tali gendong lebar, dan karet punggung ergonomis.',
    img: 'gambar-untuk-web-pertanian/peralatan/4.jpg',
    featured: false,
  },
  {
    id: 'peralatan-5',
    name: 'Dragon Star HS-DS14',
    weight: '14 Liter',
    category: 'peralatan',
    desc: 'Sprayer elektrik Dragon Star kapasitas 14 liter. Tekanan semprot stabil dan efisien untuk penyemprotan lahan pertanian.',
    img: 'gambar-untuk-web-pertanian/peralatan/5.jpg',
    featured: false,
  },
  {
    id: 'peralatan-6',
    name: 'Multipro Expert',
    weight: '16 Liter',
    category: 'peralatan',
    desc: 'Power Sprayer 2 in 1 manual dan electric. Fleksibel digunakan dengan tenaga listrik maupun pompa manual.',
    img: 'gambar-untuk-web-pertanian/peralatan/6.jpg',
    featured: true,
  },
  {
    id: 'peralatan-7',
    name: 'Maspion Hand Sprayer MH-14',
    weight: '14 Liter',
    category: 'peralatan',
    desc: 'Hand sprayer berkualitas dari Maspion. Ringan, tahan lama, dan mudah digunakan untuk penyemprotan di kebun dan ladang.',
    img: 'gambar-untuk-web-pertanian/peralatan/7.jpg',
    featured: false,
  },
  {
    id: 'peralatan-8',
    name: 'eSpray Electric',
    weight: '16 Liter',
    category: 'peralatan',
    desc: 'Electric Sprayer modern dengan teknologi terkini. Semprot lebih efisien dan merata tanpa perlu memompa manual.',
    img: 'gambar-untuk-web-pertanian/peralatan/8.jpg',
    featured: false,
  },
  {
    id: 'peralatan-9',
    name: 'Swan SA-14BIG',
    weight: '14 Liter',
    category: 'peralatan',
    desc: 'Semi auto Knapsack Sprayer berkapasitas besar. Sistem semi-otomatis untuk efisiensi penyemprotan yang lebih baik.',
    img: 'gambar-untuk-web-pertanian/peralatan/9.jpg',
    featured: false,
  },
  {
    id: 'peralatan-10',
    name: 'Iyo Tata Sprayer',
    weight: '16 Liter',
    category: 'peralatan',
    desc: 'Sprayer gendong kapasitas 16 liter dengan desain ergonomis dan nyaman. Cocok untuk penggunaan intensif di lahan pertanian.',
    img: 'gambar-untuk-web-pertanian/peralatan/10.jpg',
    featured: false,
  },
  {
    id: 'peralatan-11',
    name: 'Hokita Sprayer',
    weight: '16 Liter',
    category: 'peralatan',
    desc: 'Alat semprot panggul bertekanan tinggi. Dirancang untuk memberikan tekanan semprot maksimal dengan penggunaan yang nyaman.',
    img: 'gambar-untuk-web-pertanian/peralatan/11.jpg',
    featured: false,
  },
  {
    id: 'peralatan-12',
    name: 'Swan SA-14BIG Pro',
    weight: '14 Liter',
    category: 'peralatan',
    desc: '+20% Tekanan pompa lebih besar dan lebih ringan. Versi premium dengan peningkatan performa untuk hasil semprot yang optimal.',
    img: 'gambar-untuk-web-pertanian/peralatan/12.jpg',
    featured: false,
  },

  /* ===== PESTISIDA (12 produk) ===== */
  {
    id: 'pestisida-1',
    name: 'Acrobat Fungisida',
    weight: '10GR',
    category: 'pestisida',
    desc: 'Fungisida sistemik berbentuk tepung untuk mengendalikan penyakit pada cabai, jagung, kentang, semangka, tembakau, dan tomat.',
    img: 'gambar-untuk-web-pertanian/Pestisida/1.jpg',
    featured: true,
  },
  {
    id: 'pestisida-2',
    name: 'Extra Zinc',
    weight: '500GR',
    category: 'pestisida',
    desc: 'Mempercepat pertumbuhan, meningkatkan kekebalan tanaman, menstabilkan pH tanah, merangsang pertumbuhan akar, dan meningkatkan hasil panen.',
    img: 'gambar-untuk-web-pertanian/Pestisida/2.jpg',
    featured: false,
  },
  {
    id: 'pestisida-3',
    name: 'Top Zone Herbisida',
    weight: '1 Liter',
    category: 'pestisida',
    desc: 'Herbisida purna tumbuh untuk mengendalikan gulma berdaun lebar, sempit, dan teki pada jagung TOT, kelapa sawit TBM, kopi TBM, dan padi sawah TOT.',
    img: 'gambar-untuk-web-pertanian/Pestisida/3.jpg',
    featured: false,
  },
  {
    id: 'pestisida-4',
    name: 'Sirkus',
    weight: '1 Liter',
    category: 'pestisida',
    desc: 'Pupuk cair pemacu tumbuh untuk meningkatkan kualitas dan kuantitas panen. Juga melindungi tanaman dari tikus, belalang, kepik, ulat, dan hama lainnya.',
    img: 'gambar-untuk-web-pertanian/Pestisida/4.jpg',
    featured: false,
  },
  {
    id: 'pestisida-5',
    name: 'Spontan Insektisida',
    weight: '1 Liter',
    category: 'pestisida',
    desc: 'Insektisida racun kontak, lambung, dan sistemik. Efektif mengendalikan penggerek batang, wereng coklat, lalat bibit, belalang pada jagung, dan hama lainnya.',
    img: 'gambar-untuk-web-pertanian/Pestisida/5.jpg',
    featured: true,
  },
  {
    id: 'pestisida-6',
    name: 'Sidatan Insektisida',
    weight: '1 Liter',
    category: 'pestisida',
    desc: 'Insektisida racun kontak dan lambung berbentuk larutan berwarna merah untuk mengendalikan hama pada tanaman padi sawah.',
    img: 'gambar-untuk-web-pertanian/Pestisida/6.jpg',
    featured: false,
  },
  {
    id: 'pestisida-7',
    name: 'Velimek Fungisida',
    weight: '800GR',
    category: 'pestisida',
    desc: 'Fungisida berkualitas tinggi untuk perlindungan tanaman dari serangan jamur dan penyakit sistemik. Efektif dan mudah diaplikasikan.',
    img: 'gambar-untuk-web-pertanian/Pestisida/7.jpg',
    featured: false,
  },
  {
    id: 'pestisida-8',
    name: 'Roundup 486AS',
    weight: '1 Liter',
    category: 'pestisida',
    desc: 'Herbisida purna sistemik untuk mengendalikan gulma pada cengkeh, kakao, karet, kelapa, kelapa sawit, kopi, teh, jagung tanpa olah tanah, dan kedelai.',
    img: 'gambar-untuk-web-pertanian/Pestisida/8.jpg',
    featured: false,
  },
  {
    id: 'pestisida-9',
    name: 'Raja Lele Rimba',
    weight: '1 Liter',
    category: 'pestisida',
    desc: 'Mikroba probiotik isolat asli Indonesia untuk budidaya lele. Mengandung Lactobacillus, Acetobacter, dan yeast. Efektif untuk lele, nila, gurami, patin, dan ikan lainnya.',
    img: 'gambar-untuk-web-pertanian/Pestisida/9.jpg',
    featured: false,
  },
  {
    id: 'pestisida-10',
    name: 'Sidafos 480SL',
    weight: '1 Liter',
    category: 'pestisida',
    desc: 'Herbisida sistemik purna tumbuh untuk mengendalikan gulma pada kakao TBM, karet TBM, kelapa sawit TBM, kopi TBM, dan persiapan lahan padi sawah TOT.',
    img: 'gambar-untuk-web-pertanian/Pestisida/10.jpg',
    featured: false,
  },
  {
    id: 'pestisida-11',
    name: 'See Top 525SL',
    weight: '1 Liter',
    category: 'pestisida',
    desc: 'Herbisida sistemik purna tumbuh untuk mengendalikan gulma berdaun lebar dan sempit pada karet TBM, kelapa sawit TBM, lahan padi sawah TOT, dan teh TBM.',
    img: 'gambar-untuk-web-pertanian/Pestisida/11.jpg',
    featured: false,
  },
  {
    id: 'pestisida-12',
    name: 'Ramzink',
    weight: '1KG',
    category: 'pestisida',
    desc: 'Sangat dianjurkan untuk tanah sawah yang selalu tergenang air, curah hujan tinggi, dan tanah dengan kondisi asam. Mengatasi defisiensi zinc pada padi.',
    img: 'gambar-untuk-web-pertanian/Pestisida/12.jpg',
    featured: false,
  },

  /* ===== PUPUK (12 produk) ===== */
  {
    id: 'pupuk-1',
    name: 'ESTA Kieser MAG Kieserit',
    weight: '50KG',
    category: 'pupuk',
    desc: 'Pupuk Magnesium dan Sulfur dari ekstraksi mineral Kieserit alami. MgO 26%, S 21%. Efisien untuk kelapa sawit, cocok semua tipe tanah dan pH.',
    img: 'gambar-untuk-web-pertanian/pupuk/1.jpg',
    featured: true,
  },
  {
    id: 'pupuk-2',
    name: 'Meroke MOP Pupuk KCl',
    weight: '50KG',
    category: 'pupuk',
    desc: 'Pupuk Kalium Oksida (K2O) 60%. Berfungsi untuk kekuatan batang, transportasi gula (buah manis), kualitas buah lebih besar dan berat, tahan stres kekeringan.',
    img: 'gambar-untuk-web-pertanian/pupuk/2.jpg',
    featured: true,
  },
  {
    id: 'pupuk-3',
    name: 'Meroke ZA Ammonium Sulfat',
    weight: '50KG',
    category: 'pupuk',
    desc: 'Pupuk tunggal N 21% dan S 24%. Merangsang pertumbuhan tanaman lebih cepat, meningkatkan produksi. Lebih tidak volatil dan tidak higroskopis dibanding Urea.',
    img: 'gambar-untuk-web-pertanian/pupuk/3.jpg',
    featured: false,
  },
  {
    id: 'pupuk-4',
    name: 'Meroke Rock Fosfat Alam',
    weight: '50KG',
    category: 'pupuk',
    desc: 'Pupuk Rock Phosphate P2O5 27%. Meningkatkan pertumbuhan akar dan fungsi reproduksi tanaman (bunga dan buah). Ideal sebagai pupuk dasar.',
    img: 'gambar-untuk-web-pertanian/pupuk/4.jpg',
    featured: false,
  },
  {
    id: 'pupuk-5',
    name: 'Meroke TSP Triple Super Fosfat',
    weight: '50KG',
    category: 'pupuk',
    desc: 'Pupuk tunggal P2O5 46% berbentuk granular. Mengatasi masalah tanaman kerdil dan pembuahan tidak sempurna. Ideal sebagai pupuk dasar dan sebelum pembungaan.',
    img: 'gambar-untuk-web-pertanian/pupuk/5.jpg',
    featured: false,
  },
  {
    id: 'pupuk-6',
    name: 'NPK Mutiara 16-16-16',
    weight: '25KG',
    category: 'pupuk',
    desc: 'NPK seimbang N 16%, P2O5 16%, K2O 16%. Mengandung Nitrat-N dan Amonium-N kombinasi terbaik. Butiran biru, rendah debu, mudah diaplikasikan.',
    img: 'gambar-untuk-web-pertanian/pupuk/6.jpg',
    featured: true,
  },
  {
    id: 'pupuk-7',
    name: 'Karate Plus Boroni Kalsium Nitrat',
    weight: '25KG',
    category: 'pupuk',
    desc: 'N 15,5%, CaO 26%, B 0,2%. Kalsium dan Boron memperkuat dinding sel, memperbaiki titik tumbuh tanaman, dan meningkatkan kualitas buah.',
    img: 'gambar-untuk-web-pertanian/pupuk/7.jpg',
    featured: false,
  },
  {
    id: 'pupuk-8',
    name: 'SS Ammophos Makro Majemuk',
    weight: '50KG',
    category: 'pupuk',
    desc: 'Pupuk majemuk N 16%, P2O5 20%, S 12%. Mendukung pertumbuhan vegetatif (akar, daun, anakan). Efisiensi N meningkat dengan kombinasi P dan S.',
    img: 'gambar-untuk-web-pertanian/pupuk/8.jpg',
    featured: false,
  },
  {
    id: 'pupuk-9',
    name: 'Korn Kali+B Makro K-Mg-B',
    weight: '50KG',
    category: 'pupuk',
    desc: 'K2O 40%, MgO 6%, S 4%, B2O3 0,8%. Menjamin penyerapan K, Mg, dan B secara efisien. Hemat biaya – 6 kg setara dengan 3 pupuk tunggal terpisah.',
    img: 'gambar-untuk-web-pertanian/pupuk/9.jpg',
    featured: false,
  },
  {
    id: 'pupuk-10',
    name: 'NPK Mutiara Grower',
    weight: '25KG',
    category: 'pupuk',
    desc: 'N 15%, P2O5 9%, K2O 20%, MgO 1%, S 3,4%. Butiran hijau mengandung 5 hara penting. Sumber Kalium dari KCl dan K2SO4 yang unik.',
    img: 'gambar-untuk-web-pertanian/pupuk/10.jpg',
    featured: false,
  },
  {
    id: 'pupuk-11',
    name: 'SuburKali Butir Makro K-Mg-S',
    weight: '50KG',
    category: 'pupuk',
    desc: 'K2O 30%, MgO 10%, S 17%. Bebas Klor, cocok untuk kentang, nanas, jeruk, cabai, tomat, kubis, anggur, dan bawang merah. Meningkatkan rasa dan warna.',
    img: 'gambar-untuk-web-pertanian/pupuk/11.jpg',
    featured: false,
  },
  {
    id: 'pupuk-12',
    name: 'Meroke Kalnit Kalsium Nitrat',
    weight: '25KG',
    category: 'pupuk',
    desc: 'N 15,5%, CaO 26%. Nitrogen bentuk Nitrat untuk respon lebih cepat. Kalsium larut air untuk titik tumbuh tanaman. Bisa digunakan sebagai stok A dalam AB Mix hidroponik.',
    img: 'gambar-untuk-web-pertanian/pupuk/12.jpg',
    featured: true,
  },

];

/* =============================================
   FAQ DATA
   ============================================= */

const FAQ_DATA = [
  {
    q: 'Bagaimana cara memesan produk di TaniSmart?',
    a: 'Mudah sekali! Pilih produk yang Anda inginkan, klik "Tambah ke Keranjang", lalu klik ikon keranjang di pojok kanan atas. Setelah selesai memilih produk, klik "Checkout via WhatsApp" dan isi data pengiriman Anda. Pesanan akan langsung terkirim ke WhatsApp admin kami.'
  },
  {
    q: 'Apakah ada minimum pembelian?',
    a: 'Tidak ada minimum pembelian untuk pesanan online. Anda bisa memesan produk sesuai kebutuhan Anda. Namun untuk pembelian dalam jumlah besar (grosir), kami memberikan harga spesial. Hubungi admin kami untuk informasi harga grosir.'
  },
  {
    q: 'Berapa lama pengiriman produk?',
    a: 'Untuk wilayah Pulau Jawa, estimasi pengiriman 1–3 hari kerja. Untuk luar Jawa, estimasi 3–7 hari kerja tergantung ekspedisi dan lokasi tujuan. Kami bekerja sama dengan JNE, J&T, SiCepat, dan ekspedisi terpercaya lainnya.'
  },
  {
    q: 'Apakah produk yang dijual asli/original?',
    a: 'Ya, semua produk yang kami jual adalah produk asli langsung dari produsen atau distributor resmi. Kami bekerja sama langsung dengan PT. Yara Indonesia, Syngenta, Bayer, PT. BASF Indonesia, dan produsen terpercaya lainnya. Setiap produk memiliki garansi keaslian.'
  },
  {
    q: 'Apakah ada layanan konsultasi pertanian?',
    a: 'Ada! Kami menyediakan layanan konsultasi gratis seputar permasalahan pertanian, peternakan, dan perikanan. Konsultasi tersedia langsung di toko offline kami maupun via WhatsApp. Tim ahli kami siap membantu Anda menemukan solusi terbaik.'
  },
  {
    q: 'Bagaimana cara pembayaran?',
    a: 'Saat ini kami melayani pemesanan via WhatsApp. Setelah konfirmasi pesanan, admin akan memberikan informasi rekening bank untuk transfer. Kami menerima transfer via BCA, Mandiri, BRI, BNI, dan dompet digital seperti OVO dan GoPay.'
  },
  {
    q: 'Apakah bisa retur atau penukaran produk?',
    a: 'Ya, kami menerima retur produk jika terdapat kerusakan saat pengiriman atau produk tidak sesuai dengan yang dipesan. Retur harus dilakukan dalam 24 jam setelah produk diterima dengan menyertakan foto bukti kerusakan. Hubungi admin kami via WhatsApp.'
  },
  {
    q: 'Apakah ada program loyalitas atau diskon untuk pelanggan tetap?',
    a: 'Ya! Pelanggan setia TaniSmart mendapatkan berbagai keuntungan seperti diskon pembelian, informasi promo eksklusif, dan prioritas layanan. Hubungi admin kami untuk informasi lebih lanjut tentang program loyalitas pelanggan.'
  },
  {
    q: 'Apakah produk tersedia untuk wilayah seluruh Indonesia?',
    a: 'Ya, kami melayani pengiriman ke seluruh Indonesia. Dari Sabang sampai Merauke. Biaya pengiriman akan dikalkulasi berdasarkan berat produk dan lokasi tujuan. Kami bekerja sama dengan berbagai ekspedisi untuk memastikan produk sampai dengan aman.'
  },
  {
    q: 'Bagaimana jika produk yang dicari tidak tersedia di website?',
    a: 'Jika produk yang Anda cari tidak tersedia di website, silakan hubungi admin kami via WhatsApp. Kami mungkin memiliki stok yang belum ditampilkan, atau kami bisa membantu Anda mendapatkan produk tersebut melalui jaringan distributor kami.'
  },
];

/* =============================================
   STATE
   ============================================= */

let cart = [];
let currentPage = 'home';
let currentCategory = 'all';
let currentQvProduct = null;
let qvQty = 1;

/* =============================================
   INIT
   ============================================= */

document.addEventListener('DOMContentLoaded', function () {
  // AOS
  AOS.init({ duration: 700, once: true, offset: 80, easing: 'ease-out-cubic' });

  // Navbar scroll
  window.addEventListener('scroll', handleNavbarScroll);

  // Generate content
  renderFeaturedProducts();
  renderAllProducts();
  renderFAQ();

  // Counter animation
  animateCounters();

  // GSAP Hero
  initHeroAnimation();

  // Init page
  showPage('home');
});

/* =============================================
   NAVBAR
   ============================================= */

function handleNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 30) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  menu.classList.toggle('hidden');
  menuIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
}

/* =============================================
   PAGE NAVIGATION
   ============================================= */

function showPage(page) {
  // Hide all pages
  document.querySelectorAll('.page-section').forEach(p => {
    p.classList.add('hidden');
  });

  // Show target page
  const target = document.getElementById('page-' + page);
  if (target) {
    target.classList.remove('hidden');
  }

  currentPage = page;

  // Update nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('text-white', 'bg-white/15');
    link.classList.add('text-white/80');
    if (link.getAttribute('data-page') === page) {
      link.classList.add('text-white', 'bg-white/15');
      link.classList.remove('text-white/80');
    }
  });

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Re-init AOS for newly shown page
  setTimeout(() => AOS.refresh(), 100);

  // Re-run counter if home
  if (page === 'home') {
    animateCounters();
    initHeroAnimation();
  }

  return false;
}

/* =============================================
   HERO ANIMATION (GSAP)
   ============================================= */

function initHeroAnimation() {
  if (typeof gsap === 'undefined') return;

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.fromTo('#hero-badge', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, 0)
    .fromTo('#hero-title', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 }, 0.2)
    .fromTo('#hero-desc', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, 0.5)
    .fromTo('#page-home .flex.flex-col.sm\\:flex-row.gap-4', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, 0.7);
}

/* =============================================
   COUNTER ANIMATION
   ============================================= */

function animateCounters() {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        counter.textContent = target + '+';
        clearInterval(timer);
      } else {
        counter.textContent = Math.floor(current) + '+';
      }
    }, 30);
  });
}

/* =============================================
   PRODUCT RENDERING
   ============================================= */

const CATEGORY_LABELS = {
  bibit: '🌱 Bibit',
  nutrisi: '💊 Nutrisi',
  pakan: '🐄 Pakan',
  peralatan: '🔧 Peralatan',
  pestisida: '🧪 Pestisida',
  pupuk: '🌾 Pupuk',
};

function createProductCard(product) {
  const catLabel = CATEGORY_LABELS[product.category] || product.category;

  const card = document.createElement('div');
  card.className = 'product-card';
  card.setAttribute('data-category', product.category);
  card.setAttribute('data-name', product.name.toLowerCase());

  card.innerHTML = `
    <div class="card-img-wrapper" onclick="openQuickView('${product.id}')">
      <img
        src="${product.img}"
        alt="${product.name}"
        loading="lazy"
        onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22 viewBox=%220 0 400 300%22><rect fill=%22%23f1f5f9%22 width=%22400%22 height=%22300%22/><text x=%22200%22 y=%22150%22 font-size=%2240%22 text-anchor=%22middle%22 fill=%22%2394a3b8%22>🌿</text></svg>'"
        onload="this.classList.add('loaded')"
      />
      <div class="card-overlay">
        <button class="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-4 py-2 rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-200">
          👁 Quick View
        </button>
      </div>
    </div>
    <div class="card-body">
      <span class="card-category-badge category-${product.category}">${catLabel}</span>
      <h3 class="card-title">${product.name}</h3>
      <p class="card-desc">${product.weight} · ${product.desc}</p>
      <div class="card-actions">
        <button class="btn-add-cart" onclick="addToCart('${product.id}')">
          <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          Tambah
        </button>
        <button class="btn-quick-view" onclick="openQuickView('${product.id}')" title="Quick View">
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </button>
      </div>
    </div>
  `;

  return card;
}

function renderFeaturedProducts() {
  const container = document.getElementById('featured-products');
  if (!container) return;

  const featured = PRODUCT_DATA.filter(p => p.featured).slice(0, 8);
  container.innerHTML = '';

  featured.forEach((product, i) => {
    const card = createProductCard(product);
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', String(i * 80));
    container.appendChild(card);
  });
}

function renderAllProducts(filterCat = 'all', searchQuery = '') {
  const container = document.getElementById('product-grid');
  const noResults = document.getElementById('no-products');
  const countEl = document.getElementById('products-count');
  if (!container) return;

  let filtered = PRODUCT_DATA.filter(product => {
    const matchCat = filterCat === 'all' || product.category === filterCat;
    const matchSearch = searchQuery === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  container.innerHTML = '';

  if (filtered.length === 0) {
    noResults.classList.remove('hidden');
    container.classList.add('hidden');
    if (countEl) countEl.textContent = '0';
  } else {
    noResults.classList.add('hidden');
    container.classList.remove('hidden');
    if (countEl) countEl.textContent = filtered.length;

    filtered.forEach((product, i) => {
      const card = createProductCard(product);
      card.setAttribute('data-aos', 'fade-up');
      card.setAttribute('data-aos-delay', String((i % 4) * 60));
      container.appendChild(card);
    });

    // Refresh AOS
    setTimeout(() => AOS.refresh(), 50);
  }
}

/* =============================================
   PRODUCT FILTERS
   ============================================= */

function filterByCategory(cat) {
  currentCategory = cat;

  // Update active button
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-cat') === cat) {
      btn.classList.add('active');
    }
  });

  const search = document.getElementById('product-search');
  const query = search ? search.value : '';
  renderAllProducts(cat, query);
}

function filterProducts() {
  const search = document.getElementById('product-search');
  if (!search) return;
  renderAllProducts(currentCategory, search.value);
}

/* =============================================
   QUICK VIEW
   ============================================= */

function openQuickView(productId) {
  const product = PRODUCT_DATA.find(p => p.id === productId);
  if (!product) return;

  currentQvProduct = product;
  qvQty = 1;

  const catLabel = CATEGORY_LABELS[product.category] || product.category;
  const badgeColors = {
    bibit: 'bg-emerald-500',
    nutrisi: 'bg-blue-500',
    pakan: 'bg-amber-500',
    peralatan: 'bg-slate-500',
    pestisida: 'bg-pink-500',
    pupuk: 'bg-violet-500',
  };

  document.getElementById('qv-img').src = product.img;
  document.getElementById('qv-img').alt = product.name;
  document.getElementById('qv-title').textContent = product.name + ' – ' + product.weight;
  document.getElementById('qv-desc').textContent = product.desc;
  document.getElementById('qv-badge').textContent = catLabel;
  document.getElementById('qv-badge').className = 'px-3 py-1 rounded-full text-xs font-bold text-white ' + (badgeColors[product.category] || 'bg-primary-500');
  document.getElementById('qv-qty').textContent = '1';

  document.getElementById('quickview-overlay').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeQuickView(e) {
  if (e && e.target !== document.getElementById('quickview-overlay')) {
    // Clicked inside modal – do nothing unless explicit close
    return;
  }
  document.getElementById('quickview-overlay').classList.add('hidden');
  document.body.style.overflow = '';
  currentQvProduct = null;
}

function changeQvQty(delta) {
  qvQty = Math.max(1, qvQty + delta);
  document.getElementById('qv-qty').textContent = qvQty;
}

function addQvToCart() {
  if (!currentQvProduct) return;
  for (let i = 0; i < qvQty; i++) {
    addToCart(currentQvProduct.id, false);
  }
  document.getElementById('quickview-overlay').classList.add('hidden');
  document.body.style.overflow = '';
  showToast(`${currentQvProduct.name} (${qvQty}×) ditambahkan!`);
  updateCartUI();
}

/* =============================================
   CART SYSTEM
   ============================================= */

function addToCart(productId, showNotif = true) {
  const product = PRODUCT_DATA.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  updateCartUI();
  if (showNotif) showToast(`${product.name} ditambahkan ke keranjang!`);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartUI();
}

function changeCartQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
  } else {
    updateCartUI();
  }
}

function clearCart() {
  cart = [];
  updateCartUI();
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const countBadge = document.getElementById('cart-count');
  const countText = document.getElementById('cart-item-count-text');

  // Badge
  if (totalItems > 0) {
    countBadge.textContent = totalItems > 99 ? '99+' : totalItems;
    countBadge.classList.remove('hidden');
  } else {
    countBadge.classList.add('hidden');
  }

  // Item count text
  countText.textContent = totalItems + ' produk';

  // Cart list
  const cartList = document.getElementById('cart-list');
  const cartEmpty = document.getElementById('cart-empty');
  const cartFooter = document.getElementById('cart-footer');

  if (cart.length === 0) {
    cartEmpty.classList.remove('hidden');
    cartList.classList.add('hidden');
    cartFooter.classList.add('hidden');
  } else {
    cartEmpty.classList.add('hidden');
    cartList.classList.remove('hidden');
    cartFooter.classList.remove('hidden');

    cartList.innerHTML = '';
    cart.forEach(item => {
      const el = document.createElement('div');
      el.className = 'cart-item';
      el.innerHTML = `
        <img src="${item.img}" alt="${item.name}" class="cart-item-img"
          onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><rect fill=%22%23f1f5f9%22 width=%22200%22 height=%22200%22/><text x=%22100%22 y=%22110%22 font-size=%2240%22 text-anchor=%22middle%22 fill=%22%2394a3b8%22>🌿</text></svg>'" />
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-cat">${item.weight} · ${CATEGORY_LABELS[item.category] || item.category}</div>
          <div class="cart-item-qty-wrapper">
            <button class="qty-btn" onclick="changeCartQty('${item.id}', -1)">−</button>
            <span class="cart-item-qty">${item.qty}</span>
            <button class="qty-btn" onclick="changeCartQty('${item.id}', 1)">+</button>
            <button class="qty-btn remove-btn" onclick="removeFromCart('${item.id}')" style="margin-left:auto" title="Hapus">
              <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      `;
      cartList.appendChild(el);
    });

    // Total — no price, just show item list total
    document.getElementById('cart-total').textContent = `${totalItems} item`;
  }
}

function toggleCart() {
  const sidebar = document.getElementById('cart-sidebar');
  const overlay = document.getElementById('cart-overlay');

  const isOpen = !sidebar.classList.contains('translate-x-full');

  if (isOpen) {
    sidebar.classList.add('translate-x-full');
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
  } else {
    sidebar.classList.remove('translate-x-full');
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

/* =============================================
   CHECKOUT
   ============================================= */

function openCheckoutForm() {
  if (cart.length === 0) return;
  toggleCart();
  setTimeout(() => {
    document.getElementById('checkout-overlay').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    document.getElementById('checkout-modal').style.transform = 'scale(1)';
  }, 300);
}

function closeCheckoutForm() {
  document.getElementById('checkout-overlay').classList.add('hidden');
  document.body.style.overflow = '';
}

function submitCheckout(e) {
  e.preventDefault();

  const name = document.getElementById('checkout-name').value.trim();
  const address = document.getElementById('checkout-address').value.trim();
  const note = document.getElementById('checkout-note').value.trim();

  if (!name || !address) {
    alert('Mohon lengkapi nama dan alamat pengiriman.');
    return;
  }

  // Build order message
  let orderLines = cart.map(item => `• *${item.name}* (${item.weight})\n  Qty: ${item.qty}×`).join('\n\n');
  const totalItems = cart.reduce((s, i) => s + i.qty, 0);

  let message = `Halo admin TaniSmart, saya ingin memesan:\n\n`;
  message += orderLines;
  message += `\n\n━━━━━━━━━━━━━━━\n`;
  message += `Total: *${totalItems} item*\n\n`;
  message += `*Data Pemesan:*\n`;
  message += `Nama: ${name}\n`;
  message += `Alamat: ${address}`;
  if (note) message += `\nCatatan: ${note}`;
  message += `\n\nMohon konfirmasi ketersediaan dan ongkos kirim. Terima kasih! 🙏`;

  const waUrl = `https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank');

  // Clear
  closeCheckoutForm();
  clearCart();
  document.getElementById('checkout-form').reset();
  showToast('Pesanan berhasil dikirim ke WhatsApp!');
}

/* =============================================
   CONTACT FORM
   ============================================= */

function submitContactForm(e) {
  e.preventDefault();

  const name = document.getElementById('contact-name').value.trim();
  const phone = document.getElementById('contact-phone').value.trim();
  const subject = document.getElementById('contact-subject').value.trim();
  const message = document.getElementById('contact-message').value.trim();

  let waMessage = `Halo TaniSmart! 👋\n\n`;
  waMessage += `Nama: *${name}*\n`;
  waMessage += `No. HP: ${phone}\n`;
  waMessage += `Subjek: *${subject}*\n\n`;
  waMessage += `Pesan:\n${message}`;

  const waUrl = `https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(waMessage)}`;
  window.open(waUrl, '_blank');

  document.getElementById('contact-name').value = '';
  document.getElementById('contact-phone').value = '';
  document.getElementById('contact-subject').value = '';
  document.getElementById('contact-message').value = '';

  showToast('Pesan berhasil dikirim!');
}

/* =============================================
   FAQ
   ============================================= */

function renderFAQ() {
  const container = document.getElementById('faq-list');
  if (!container) return;

  container.innerHTML = '';
  FAQ_DATA.forEach((item, i) => {
    const el = document.createElement('div');
    el.className = 'faq-item';
    el.id = 'faq-' + i;

    el.innerHTML = `
      <button class="faq-question" onclick="toggleFAQ(${i})">
        <span>${item.q}</span>
        <span class="faq-icon">
          <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div class="faq-answer" id="faq-answer-${i}">
        <p>${item.a}</p>
      </div>
    `;

    container.appendChild(el);
  });
}

function toggleFAQ(index) {
  const item = document.getElementById('faq-' + index);
  const answer = document.getElementById('faq-answer-' + index);
  const isOpen = item.classList.contains('open');

  // Close all
  document.querySelectorAll('.faq-item').forEach(i => {
    i.classList.remove('open');
    const a = i.querySelector('.faq-answer');
    if (a) a.classList.remove('open');
  });

  // Toggle current
  if (!isOpen) {
    item.classList.add('open');
    answer.classList.add('open');
  }
}

/* =============================================
   TOAST NOTIFICATION
   ============================================= */

let toastTimer = null;

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');

  toastMsg.textContent = message;
  toast.classList.remove('translate-x-full');
  toast.classList.add('translate-x-0');

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.add('translate-x-full');
    toast.classList.remove('translate-x-0');
  }, 3000);
}

/* =============================================
   KEYBOARD / ESCAPE
   ============================================= */

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    document.getElementById('quickview-overlay').classList.add('hidden');
    document.getElementById('checkout-overlay').classList.add('hidden');
    const sidebar = document.getElementById('cart-sidebar');
    if (!sidebar.classList.contains('translate-x-full')) {
      toggleCart();
    }
    document.body.style.overflow = '';
  }
});
