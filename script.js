// BumiTani - Premium Agriculture E-commerce
// Script Configuration & Product Database

const ADMIN_WHATSAPP = "085795185561";

// Database of 72 Products mapped from source text files
const PRODUCTS = [
  // === BIBIT ===
  {
    id: "bibit-1",
    name: "Pioner P21 1KG",
    category: "bibit",
    price: 95000,
    image: "products/bibit/1.jpg",
    stock: 35,
    rating: 4.8,
    description: "Benih jagung hibrida Pioneer P21 berkualitas tinggi. Memiliki daya adaptasi yang sangat baik di berbagai kondisi lahan, toleran kekeringan, dan menghasilkan tongkol jagung berbobot tinggi."
  },
  {
    id: "bibit-2",
    name: "Chaitai Jagung Manis Master Sweet 250GR",
    category: "bibit",
    price: 75000,
    image: "products/bibit/2.jpg",
    stock: 42,
    rating: 4.7,
    description: "Benih jagung manis Master Sweet dari Cap Kapal Terbang. Pertumbuhan tanaman seragam, tahan penyakit karat daun, serta menghasilkan tongkol jagung manis dengan rasa sangat manis dan berbobot."
  },
  {
    id: "bibit-3",
    name: "Chiatai Timun Harmony Plus 20GR",
    category: "bibit",
    price: 45000,
    image: "products/bibit/3.jpg",
    stock: 28,
    rating: 4.6,
    description: "Pertumbuhan tanaman kuat dan seragam, toleran penyakit kresek. Tanaman tetap menghasilkan buah yang besar dan lurus (tanpa leher) meskipun pengairan kurang sempurna. Buah berwarna hijau tua, seragam dan tidak pahit. Panjang buah +- 23cm, diameter +- 4,5cm dengan berat +- 270g/buah. Umur panen +- 32 hari setelah pindah tanam dengan potensi hasil +- 4g/tanaman. Kebutuhan benih 750 – 800g/ha dengan jarak tanam 70 x 40cm."
  },
  {
    id: "bibit-4",
    name: "Aura Kuning Semangka 10GR",
    category: "bibit",
    price: 55000,
    image: "products/bibit/4.jpg",
    stock: 19,
    rating: 4.9,
    description: "Umur mulai panen 55 – 58 HST\nBentuk buah Lonjong\nWarna kulit buah Hijau gelap bergaris hijau tua\nWarna daging buah Kuning\nKadar gula 13 – 14 Brix\nBerat buah 5 – 8Kg"
  },
  {
    id: "bibit-5",
    name: "Chiatai Pak Choi Sawi 50GR",
    category: "bibit",
    price: 35000,
    image: "products/bibit/5.jpg",
    stock: 60,
    rating: 4.8,
    description: "Sangat adaptif, dapat tumbuh hampir disemua lokasi. Tanamannya tegap berdaun lebar and berwarna hijau cerah. Pembungaan agak lambat, umur panen sekitar 30 hari. Dapat ditanam sepanjang tahun dengan jarak tanam 25 x 20cm. Toleran terhadap penyakit jamur, Cocok untuk berbagai macam masakan dan sangat enak rasanya."
  },
  {
    id: "bibit-6",
    name: "Chiatai Sawi Gardena 15GR",
    category: "bibit",
    price: 28000,
    image: "products/bibit/6.jpg",
    stock: 55,
    rating: 4.5,
    description: "Pertumbuhannya cepat, kuat dan seragam. Toleran terhadap panas dan cocok ditanam didataran tinggi. Daun lebar, serat daging halus, tangkai daunnya besar dan tebal. Rasanya enak, cocok untuk berbagai jenis makanan. Umur panen +-30 hari setelah tanam dengan kebutuhan benih +-450Gr/ha."
  },
  {
    id: "bibit-7",
    name: "Aura Tomat Annisa 5GR",
    category: "bibit",
    price: 40000,
    image: "products/bibit/7.jpg",
    stock: 24,
    rating: 4.7,
    description: "Umur panen 64 – 67 HST\nBerat buah 55 – 85 Gram\nPotensi hasil 40 – 62 ton/ha\nBentuk buah Bulat\nWarna buah Merah hati\n\n(Tahan penyakit gemini virus dan layu bakteri.)"
  },
  {
    id: "bibit-8",
    name: "Chiatai Puspita 06 K.Panjang 50GR",
    category: "bibit",
    price: 32000,
    image: "products/bibit/8.jpg",
    stock: 50,
    rating: 4.6,
    description: "(Benih kacang panjang unggul.)"
  },
  {
    id: "bibit-9",
    name: "Chiatai Esteem Semangka 20GR",
    category: "bibit",
    price: 85000,
    image: "products/bibit/9.jpg",
    stock: 15,
    rating: 4.8,
    description: "Pertumbuhannya kuat, seragam dan mudah perawatannya. Buah bentuk lonjong, kulit buah kuat, berwarna hijau kehitaman dan tahan simpan. Daging buah berwarna kuning, renyah dan sangat manis dengan kadar gula 11 – 12% (Brix), Berat buah 2,5 – 3,5kg, Umur panen +- 58 HST. Kebutuhan benih 230 – 260g/ha dengan jarak tanam 60 x 300cm."
  },
  {
    id: "bibit-10",
    name: "Aura Legimo Semangka 10GR",
    category: "bibit",
    price: 60000,
    image: "products/bibit/10.jpg",
    stock: 18,
    rating: 4.7,
    description: "Umur mulai panen 55 – 57 HST\nWarna buah kuning\nBentuk buah Oval\nWarna daging buah Merah\nBerat buah 3 – 5kg\nKadar gula 14,5 – 15,5 brix\n\n(Tanaman kokoh dengan daya adaptasi yang luas, tahan simpan dan pengangkutan.)"
  },
  {
    id: "bibit-11",
    name: "Aura Sawi Tosan 25GR",
    category: "bibit",
    price: 30000,
    image: "products/bibit/11.jpg",
    stock: 40,
    rating: 4.6,
    description: "Warna daun Hijau\nJumlah daun 14 – 18 helai\nUmur panen 28 – 35 HST\nUmur mulai berbeunga 43 – 45 HST\nJumlah tangkai daun banyak dan produktifitas tinggi mencapai 50 – 56 ton/Ha."
  },
  {
    id: "bibit-12",
    name: "Aura Terong Arya Hijau 10GR",
    category: "bibit",
    price: 38000,
    image: "products/bibit/12.jpg",
    stock: 22,
    rating: 4.5,
    description: "Umur mulai panen 60 – 65 Hst\nBentuk buah Silindris memanjang\nWarna kulit buah Hijau muda\nBuah manis\nBerat buah pertanaman 6 – 7kg\nBeradaptasi baik di dataran rendah dengan altitude 49 – 117 Mdpl."
  },

  // === NUTRISI ===
  {
    id: "nutrisi-1",
    name: "Top Mix 500GR",
    category: "nutrisi",
    price: 25000,
    image: "products/nutrisi/1.jpg",
    stock: 80,
    rating: 4.8,
    description: "Memperbaiki konversi ransum sehingga biaya makanan menjadi lebih rendah.\nAnak ayam tumbuh lebih cepat, sehat, ayam pedaging lebih gemuk, karena Top Mix mengandung 2 asam amino.\nMeninggikan efisiensi makanan.\nMeningkatkan dan memperpanjang masa produksi telur.\nMencegah penyakit sehingga angka kematian lebih rendah."
  },
  {
    id: "nutrisi-2",
    name: "Mineral Ayam 1KG",
    category: "nutrisi",
    price: 20000,
    image: "products/nutrisi/2.jpg",
    stock: 95,
    rating: 4.7,
    description: "Memperbaiki produksi telur dan meningkatkan mutu telur.\nMembantu pertumbuhan, terutama pertumbuhan tulang dan bulu yang normal.\nMempertinggi daya tetas telur.\nMencegah dan menyembuhkan penyakit karena kekurangan mineral seperti lumpuh, kaki bengkok (perosis), Kurang darah (anemia) dan lain-lain."
  },
  {
    id: "nutrisi-3",
    name: "Trimezyn-S 100GR",
    category: "nutrisi",
    price: 55000,
    image: "products/nutrisi/3.jpg",
    stock: 30,
    rating: 4.6,
    description: "Indikasi:\n(Corisa, Colibacillosis, CRD, Kolera, Pullorum.)"
  },
  {
    id: "nutrisi-4",
    name: "Antisep 60ML",
    category: "nutrisi",
    price: 15000,
    image: "products/nutrisi/4.jpg",
    stock: 50,
    rating: 4.7,
    description: "Indikasi\nUnggas: Cacar, luka dan infeksi kulit. Membasmi kuman penyakit yang mudah menyebar dikandang.\n\nSapi: Membilas ambing sebelum diperah dan pencelupan ambing sesudah diperah."
  },
  {
    id: "nutrisi-5",
    name: "Vita Plex 100Kpl",
    category: "nutrisi",
    price: 45000,
    image: "products/nutrisi/5.jpg",
    stock: 40,
    rating: 4.6,
    description: "Mencegah dan mengobati penyakit yang disebabkan oleh kekurangan vitamin B kompleks.\nMenambah daya tahan unggas terhadap penyakit.\nMencegah stres, terutama pada waktu perubahan cuaca, vaksinasi atau pindah kandang.\nMempertinggi efisiensi ransum dan mempercepat pertumbuhan."
  },
  {
    id: "nutrisi-6",
    name: "Vita Stress 10GR",
    category: "nutrisi",
    price: 8000,
    image: "products/nutrisi/6.jpg",
    stock: 120,
    rating: 4.8,
    description: "Menambah daya tahan tubuh and mencegah stress pada waktu sebelum dan sesudah vaksinasi, setelah potong paruh, pindah kandang, penggantian ransum, cuaca yang buruk dan masa rontok bulu.\nMencegah kekurangan vitamin pada ayam terutama jika terdapat gangguan pertumbuhan, penurunan produksi telur dan gangguan pertumbuhan bulu.\nMempercepat pemulihan kesehatan setelah sakit dan sesudah pengobatan dengan antibiotik."
  },
  {
    id: "nutrisi-7",
    name: "Trimezyn Bolus 1 Bolus",
    category: "nutrisi",
    price: 12000,
    image: "products/nutrisi/7.jpg",
    stock: 60,
    rating: 4.5,
    description: "Mengobati infeksi saluran pencernaan\nMengobati infeksi saluran pernafasan\nMelindungi uterus terhadap infeksi bakteri (Endometritis, metritis)."
  },
  {
    id: "nutrisi-8",
    name: "Egg Stimulant 250GR",
    category: "nutrisi",
    price: 65000,
    image: "products/nutrisi/8.jpg",
    stock: 25,
    rating: 4.9,
    description: "Meningkatkan produksi telur hingga 37%\nMemperbaiki efisiensi ransum hingga 18%\nMempertahankan produksi telur pada keadaan sakit\nMemperpanjang masa produksi telur\nMeningkatkan mutu telur tetas dan kesuburan pada ayam pembibit\nMemperkecil angka kematian."
  },
  {
    id: "nutrisi-9",
    name: "Vita Chicks 5GR",
    category: "nutrisi",
    price: 5000,
    image: "products/nutrisi/9.jpg",
    stock: 200,
    rating: 4.7,
    description: "Mempercepat pertumbuhan\nMencegah kekurangan vitamin\nMngatasi stres\nMengurangi angka kematian pada anak ayam."
  },
  {
    id: "nutrisi-10",
    name: "Therapy 100GR",
    category: "nutrisi",
    price: 42000,
    image: "products/nutrisi/10.jpg",
    stock: 35,
    rating: 4.6,
    description: "Untuk mencegah penyakit waktu stres\nUntuk mencegah terhadap adanya wabah."
  },
  {
    id: "nutrisi-11",
    name: "Vita Plex 50 Kpl",
    category: "nutrisi",
    price: 25000,
    image: "products/nutrisi/11.jpg",
    stock: 75,
    rating: 4.5,
    description: "Mencegah dan mengobati penyakit yang disebabkan oleh kekurangan vitamin B kompleks\nMenambah daya tahan unggas terhadap penyakit\nMencegah stres, terutama pada waktu perubahan cuaca, vaksinasi atau pindah kandang\nMempertinggi efisiensi ransum dan mempercepat pertumbuhan."
  },
  {
    id: "nutrisi-12",
    name: "Super Power 10 Kps",
    category: "nutrisi",
    price: 18000,
    image: "products/nutrisi/12.jpg",
    stock: 45,
    rating: 4.4,
    description: "Menambah tenaga ayam waktu diadu\nMembuat nafas lebih panjang, tahan lelah, sakit dan gesit\nMenjaga kesehatan, mempertinggi daya tahan terhadap perubahan suhu dan mencegah penyakit\nMencegah infeksi karena luka setelah diadu."
  },

  // === PAKAN ===
  {
    id: "pakan-1",
    name: "BA6 30KG",
    category: "pakan",
    price: 320000,
    image: "products/pakan/1.jpg",
    stock: 12,
    rating: 4.6,
    description: "(Pakan ikan bermutu.)"
  },
  {
    id: "pakan-2",
    name: "All Feed – 3 30KG",
    category: "pakan",
    price: 280000,
    image: "products/pakan/2.jpg",
    stock: 15,
    rating: 4.7,
    description: "(Pakan ikan apung.)"
  },
  {
    id: "pakan-3",
    name: "New Supra Z – 2 30KG",
    category: "pakan",
    price: 295000,
    image: "products/pakan/3.jpg",
    stock: 14,
    rating: 4.5,
    description: "Pakan ikan apung formula seimbang untuk mempercepat pertumbuhan bobot harian ikan konsumsi secara sehat."
  },
  {
    id: "pakan-4",
    name: "582M 50KG",
    category: "pakan",
    price: 420000,
    image: "products/pakan/4.jpg",
    stock: 8,
    rating: 4.8,
    description: "(Pakan komplit butiran ayam buras tanpa antibiotik Growth Promoter.)"
  },
  {
    id: "pakan-5",
    name: "NC62 50KG",
    category: "pakan",
    price: 390000,
    image: "products/pakan/5.jpg",
    stock: 10,
    rating: 4.7,
    description: "(Pakan butiran masa penggemukan sapi potong.)"
  },
  {
    id: "pakan-6",
    name: "HI – Pro – Vite 594 50KG",
    category: "pakan",
    price: 460000,
    image: "products/pakan/6.jpg",
    stock: 7,
    rating: 4.9,
    description: "(Pakan komplit butiran ayam hobi (Umur diatas 22 minggu).)"
  },
  {
    id: "pakan-7",
    name: "HI – Pro – Vite 593 50KG",
    category: "pakan",
    price: 450000,
    image: "products/pakan/7.jpg",
    stock: 9,
    rating: 4.8,
    description: "(Pakan komplit butiran ayam hobi (Umur 14 – 22 minggu).)"
  },
  {
    id: "pakan-8",
    name: "HI – Pro – Vite 591 50KG",
    category: "pakan",
    price: 480000,
    image: "products/pakan/8.jpg",
    stock: 6,
    rating: 4.9,
    description: "(Pakan komplit butiran ayam hobi (Umur 1 hari – 8 minggu).)"
  },
  {
    id: "pakan-9",
    name: "HI – Pro – Vite 324KJ 50KG",
    category: "pakan",
    price: 380000,
    image: "products/pakan/9.jpg",
    stock: 11,
    rating: 4.6,
    description: "(Pakan komplit tepung ayam petelur (Layer).)"
  },
  {
    id: "pakan-10",
    name: "HI – Pro – Vite 144 50KG",
    category: "pakan",
    price: 360000,
    image: "products/pakan/10.jpg",
    stock: 15,
    rating: 4.7,
    description: "(Pakan konsentrat itik petelur.)"
  },
  {
    id: "pakan-11",
    name: "HJ – Pro – Vite 112 50KG",
    category: "pakan",
    price: 410000,
    image: "products/pakan/11.jpg",
    stock: 8,
    rating: 4.6,
    description: "(Pakan konsentrat ayam padaging (Finisher).)"
  },
  {
    id: "pakan-12",
    name: "T – 79 – 3 30KG",
    category: "pakan",
    price: 275000,
    image: "products/pakan/12.jpg",
    stock: 20,
    rating: 4.4,
    description: "Pakan pelet apung ekonomis berkualitas untuk budidaya kolam air tawar."
  },

  // === PERALATAN ===
  {
    id: "peralatan-1",
    name: "Neo Antisep",
    category: "peralatan",
    price: 22000,
    image: "products/peralatan/1.jpg",
    stock: 45,
    rating: 4.5,
    description: "Disinfektan cair berdaya ampuh tinggi untuk membunuh kuman, bakteri, dan virus di area kandang dan perlengkapan ternak."
  },
  {
    id: "peralatan-2",
    name: "Imustim",
    category: "peralatan",
    price: 30000,
    image: "products/peralatan/2.jpg",
    stock: 38,
    rating: 4.7,
    description: "(Sitem imun kuat, ayam sehat.)"
  },
  {
    id: "peralatan-3",
    name: "Pendekar 3 in 1 16LT",
    category: "peralatan",
    price: 550000,
    image: "products/peralatan/3.jpg",
    stock: 8,
    rating: 4.8,
    description: "(3 in 1 : Electric, manual dan Easy taking battery.)"
  },
  {
    id: "peralatan-4",
    name: "Yoto 16LT",
    category: "peralatan",
    price: 480000,
    image: "products/peralatan/4.jpg",
    stock: 12,
    rating: 4.7,
    description: "Regulator pengatur kecepatan\nLampu Led sebagai indikator pengisian baterai\nTali gendong lebar untuk pemakaian lebih nyaman\nKaret punggung untuk kenyamanan."
  },
  {
    id: "peralatan-5",
    name: "Dragon Star HS – DS14",
    category: "peralatan",
    price: 220000,
    image: "products/peralatan/5.jpg",
    stock: 15,
    rating: 4.4,
    description: "Sprayer gendong manual berkapasitas 14 Liter dari bahan HDPE tebal, tangguh, dan tahan terhadap cairan pestisida korosif."
  },
  {
    id: "peralatan-6",
    name: "Multipro Expert 16LT",
    category: "peralatan",
    price: 580000,
    image: "products/peralatan/6.jpg",
    stock: 5,
    rating: 4.9,
    description: "(Power Sprayer 2 in 1 manual dan electric.)"
  },
  {
    id: "peralatan-7",
    name: "Maspion Hand Sprayer MH-14",
    category: "peralatan",
    price: 195000,
    image: "products/peralatan/7.jpg",
    stock: 20,
    rating: 4.5,
    description: "Sprayer manual berkualitas tinggi produksi Maspion dengan nozzle presisi yang dapat disetel halus kabut."
  },
  {
    id: "peralatan-8",
    name: "eSpray 16LT",
    category: "peralatan",
    price: 520000,
    image: "products/peralatan/8.jpg",
    stock: 10,
    rating: 4.8,
    description: "(Electric Sprayer.)"
  },
  {
    id: "peralatan-9",
    name: "Swan SA – 14BIG",
    category: "peralatan",
    price: 380000,
    image: "products/peralatan/9.jpg",
    stock: 14,
    rating: 4.6,
    description: "(Semi auto Knapsack Sprayer.)"
  },
  {
    id: "peralatan-10",
    name: "Iyo Tata 16LT",
    category: "peralatan",
    price: 450000,
    image: "products/peralatan/10.jpg",
    stock: 11,
    rating: 4.5,
    description: "Sprayer elektrik berkapasitas 16 liter dengan baterai tahan lama dan pengatur tekanan semprot konstan."
  },
  {
    id: "peralatan-11",
    name: "Hokita 16LT",
    category: "peralatan",
    price: 490000,
    image: "products/peralatan/11.jpg",
    stock: 9,
    rating: 4.7,
    description: "(Alat semprot panggul bertekanan tinggi.)"
  },
  {
    id: "peralatan-12",
    name: "Swan SA – 14BIG",
    category: "peralatan",
    price: 410000,
    image: "products/peralatan/12.jpg",
    stock: 7,
    rating: 4.8,
    description: "(+20% Tekanan pompa lebih besar dan lebih ringan.)"
  },

  // === PESTISIDA ===
  {
    id: "pestisida-1",
    name: "Acrobat 10GR",
    category: "pestisida",
    price: 25000,
    image: "products/pestisida/1.jpg",
    stock: 55,
    rating: 4.8,
    description: "(Fungisida sistemik berbentuk tepung yang dapat disuspensikan berwarna putih, digunakan untuk mengendalikan penyakit pada tanaman cabai, jagung, kentang, semangka, tembakau dan tomat.)"
  },
  {
    id: "pestisida-2",
    name: "Extra Zinc 500GR",
    category: "pestisida",
    price: 45000,
    image: "products/pestisida/2.jpg",
    stock: 40,
    rating: 4.6,
    description: "(Untuk mempercepat pertumbuhan dan meningkatkan daya kekebalan tanaman terhadap segala penyakit, menstabilkan kadar Ph tanah, merangsang pembentukan pertumbuhan akar, mengurangi gabah hampa dan meningkatkan hasil panen.)"
  },
  {
    id: "pestisida-3",
    name: "Top Zone 1LT",
    category: "pestisida",
    price: 85000,
    image: "products/pestisida/3.jpg",
    stock: 32,
    rating: 4.5,
    description: "(Herbisida purna tumbuh, berbentuk larutan dalam air, berwarna biru kehijauan, untuk mengendalikan gulma berdaun lebar, gulma berdaun sempit dan teki pada pertanaman jagung (TOT), Kelapa sawit (TBM), Kopi (TBM), dan padi sawah (TOT).)"
  },
  {
    id: "pestisida-4",
    name: "Sirkus 1LT",
    category: "pestisida",
    price: 75000,
    image: "products/pestisida/4.jpg",
    stock: 28,
    rating: 4.6,
    description: "(Pupuk cair yang berfungsi sebagai zat pemacu tumbuh dalam meningkatkan kualitas dan kuantitas hasil panen. Dan berfungsi juga untuk melindungi tanaman dari serangan tikus, belalang, kepik, ulat dan hama lainnya.)"
  },
  {
    id: "pestisida-5",
    name: "Spontan 1LT",
    category: "pestisida",
    price: 115000,
    image: "products/pestisida/5.jpg",
    stock: 18,
    rating: 4.9,
    description: "(Insektisida racun kontak, lambung dan sistemik berbentuk pekatan yang dapat larut dalam air, berwarna coklat kemerah-merahan untuk mengendalikan hama penggerak batang, wereng coklat, hama putih, lalat daun, hama putih palsu pada tanaman padi, lalat bibit, dan penggulung daun pada tanaman kedelai, lalat penggorok daun pada tanaman kentang, belalang pada tanaman jagung, hama tanaman kelapa, ulat penggerak polong pada tanaman kacang hijau, ulat kantong pada tanaman kelapa sawit.)"
  },
  {
    id: "pestisida-6",
    name: "Sidatan 1LT",
    category: "pestisida",
    price: 65000,
    image: "products/pestisida/6.jpg",
    stock: 25,
    rating: 4.7,
    description: "(Insektisida racun kontak dan lambung berbentuk larutan dalam air, berwarna merah untuk mengendalikan hama pada tanaman padi.)"
  },
  {
    id: "pestisida-7",
    name: "Velimek 800GR",
    category: "pestisida",
    price: 130000,
    image: "products/pestisida/7.jpg",
    stock: 15,
    rating: 4.7,
    description: "Insektisida butiran berspektrum luas untuk mematikan ulat tanah, uret, dan hama penggerek di akar hortikultura."
  },
  {
    id: "pestisida-8",
    name: "Roundup 486AS 1LT",
    category: "pestisida",
    price: 110000,
    image: "products/pestisida/8.jpg",
    stock: 50,
    rating: 4.9,
    description: "(Herbisida purna sistemik berbentuk larutan dalam air berwarna kuning keemasan untuk mengendalikan gulma pada tanaman cengkeh, kakao, karet, kelapa, kelapa sawit, kopi, teh, akasia, jagung tanpa olah tanah, kedalai tanpa olah tanah, dan padi gogo tanpa olah tanah serta memacu kemasakan dan meningkatkan kualitas nira pada tanaman tebu.)"
  },
  {
    id: "pestisida-9",
    name: "Raja Lele Rimba 1LT",
    category: "pestisida",
    price: 40000,
    image: "products/pestisida/9.jpg",
    stock: 30,
    rating: 4.8,
    description: "(Merupakan mikroba probiotik isolat asli Indonesia dengan kandungan loctobaallus acetobacter dan yeast yang sangat efektif untuk budidaya lele agar menghasilkan produksi secara maksimal, dan ramah lingkungan. Raja lele juga sangat efektif diaplikasikan pada budidaya ikan jenis lainnya seperti nilla, gurami, patin, mas, tawes, bawal, graskap, koi, dll.)"
  },
  {
    id: "pestisida-10",
    name: "Sidafos 480SL 1LT",
    category: "pestisida",
    price: 80000,
    image: "products/pestisida/10.jpg",
    stock: 45,
    rating: 4.6,
    description: "(Herbisida sistemik purna tumbuh berbentuk larutan dalam air berwarna kuning untuk mengendalikan gulma pada pertanaman kakao (TBM), karet (TBM), kelapa sawit (TBM), kopi (TBM), dan persiapan lahan budidaya padi sawah (TOT).)"
  },
  {
    id: "pestisida-11",
    name: "See Top 525SL 1LT",
    category: "pestisida",
    price: 95000,
    image: "products/pestisida/11.jpg",
    stock: 38,
    rating: 4.5,
    description: "(Herbisida sistemik purna tumbuh berbentuk larutan dalam air berwarna kuning untuk mengendalikan gulma berdaun lebar dan berdaun sempit pada pertanaman karet (TBM), Kelapa sawit (TBM), Persiapan lahan budidaya padi sawah (TOT), Persiapan lahan perkebunan dan teh (TBM).)"
  },
  {
    id: "pestisida-12",
    name: "Ramzink 1KG",
    category: "pestisida",
    price: 50000,
    image: "products/pestisida/12.jpg",
    stock: 22,
    rating: 4.7,
    description: "(Sangan dianjurkan penggunaan pupuk ini untuk pada tanah sawah yang selalu tergenang air, curah hujan tinggi and tanah kondisi asem aseman.)"
  },

  // === PUPUK ===
  {
    id: "pupuk-1",
    name: "Esta Kieser MAG Pupuk Kiesrite",
    category: "pupuk",
    price: 220000,
    image: "products/pupuk/1.jpg",
    stock: 15,
    rating: 4.8,
    description: "Spesifikasi ESTA Kieser-Mag®\nMagnesium Oksida (MgO) 26%\nSulfur (S) 21%\n\n(Pupuk ESTA Kieser-MAG® merupakan hasil ekstraksi mineral Kieserit alami melalui proses pemisahan elektrostatis endapan garam yang ramah lingkungan di Jerman.\n\nMagnesium merupakan pusat atom dari molekul klorofil, yang menjadi pigmen warna hijau di daun. Ketersediaan unsur hara Magnesium yang optimal dapat menghasilkan hijau daun dan meningkatkan produksi asimilat untuk mendapatkan hasil produksi yang tinggi.\n\nESTA Kieser-MAG® mengandung unsur hara Magnesium dan Sulfur. Merupakan unsur hara Magnesium dan Sulfur yang efisien untuk tanaman Kelapa Sawit. Pupuk ini cocok untuk diaplikasikan pada semua tipe tanah dan tidak tergantung pada pH tanah.\n\nPupuk ESTA Kieser-MAG® merupakan pupuk Magnesium berbasis Sulfur yang dikhususkan untuk menyeimbangkan unsur hara dalam sistem pertanian intensif yang bertujuan untuk mendapatkan produktivitas dan kualitas produksi yang tinggi.)"
  },
  {
    id: "pupuk-2",
    name: "Meroke MOP Pupuk KCL",
    category: "pupuk",
    price: 310000,
    image: "products/pupuk/2.jpg",
    stock: 20,
    rating: 4.7,
    description: "Spesifikasi MerokeMOP®\nKalium Oksida (K2O) 60%\n\n(Fungsi Unsur Hara Pupuk MerokeMOP®\nFungsi dari hara Kalium (K) ini adalah untuk kekuatan batang, transportasi gula (buah lebih manis), kualitas buah (lebih besar, lebih berat), tahan stres kekeringan (karena mengatur kerja stomata daun), tahan penyakit, transportasi asamilat dan kerja enzim.)\n\nKeuntungan:\nDengan memakai pupuk MerokeMOP®, tanaman akan lebih kuat, tahan stres lingkungan, toleran terhadap penyakit dan kualitas buah (warna kulit buah, warna daging buah, berat, besar, manis dan daya simpan buah) yang dihasilkan lebih baik.\nPemakaian Pupuk MerokeMOP® sebaiknya pada awal pertumbuhan atau sebagai pupuk dasar dan tahap pembesaran dan pematangan buah.\n\nGejala Kekurangan Unsur hara Kalium (K):\nPertumbuhan tanaman tidak kuat, daun tipis and lemah.\nDaun tua menguning di mulai dari tepi daun.\nPada tanaman Kelapa Sawit, daun menunjukkan gejala bintik-bintik berwarna oranye tembus pandang dan kadar minyak pada buah berkurang.\nBuah mengecil dan pematangannya tidak sempurna. Warna kulit buah kusam, warna isi buah pucat dan rasa buah menjadi masam."
  },
  {
    id: "pupuk-3",
    name: "Meroke ZA Pupuk Amonium Sulfat",
    category: "pupuk",
    price: 180000,
    image: "products/pupuk/3.jpg",
    stock: 25,
    rating: 4.6,
    description: "(Pupuk Meroke ZA® merupakan pupuk tunggal yang mengandung 21% Nitrogen-Amonium (NH4) dan 24% Sulfur (S).\n\nBila tanah dengan pH netral ataupun asam, Meroke ZA® dapat diaplikasikan dengan cara ditabur, Namun bila pada tanah basa dengan kelembaban dan suhu tinggi yang dapaat meningkatkan penguapan maka diaplikasikan dengan cara dipendam.)\n\nFungsi dari Nitrogen\nMerangsang pertumbuhan vegetatif\nBerfungsi untuk sintesa amino dan protein\nMemproduksi pigmen hijau yang membuat tumbuhan hijau\nTanaman yang mempunyai Nitrogen yang cukup, pertumbuhannya akan kuat/vigor dan berwarna hijau tua.\n\nSulfur pada tanaman dapat menghasilkan protein dan meningkatkan kemampuan tanaman untuk memanfaatkan Nitrogen yang ada.\n\nKeuntungan Pupuk MerokeZA®\nMerangsang pertumbuhan tanaman lebih cepat dan produksi lebih tinggi\nDipakai untuk tanaman yang kekurangan Nitrogen and Sulfur\nDibandingkan dengan Urea, Pupuk ZA® lebih tidak Volatil(menguap ke udara) dan Tidak Higroskopis sehingga lebih tahan lama."
  },
  {
    id: "pupuk-4",
    name: "Meroke Rock Pupuk Fosfat Alam",
    category: "pupuk",
    price: 140000,
    image: "products/pupuk/4.jpg",
    stock: 30,
    rating: 4.5,
    description: "Spesifikasi MerokeROCK®\nPhosphate (P2O5) 27 %\n\n(Fungsi unsur hara Phosphate (P) adalah meningkatkan pertumbuhan akar tanaman dan fungsi reproduksi tanaman (bunga dan buah).)\n\nGejala kekurangan unsur hara P :\nPertumbuhan tanaman kerdil, karena akar tidak bertumbuh dengan baik.\nBunga yang jadi tidak sempurna dan terkadang bunga tidak terbentuk, yang akhirnya buah juga menjadi lebih sedikit.\nPada tanaman Sawit, tanaman mengerdil dengan pelepah memendek dan batang cenderung bentuk piramid. Bunga jantan lebih dominan terbentuk.\n\nPupuk MerokeROCK® merupakan pupuk tunggal Rock Phosphate yang mengandung 27% Phosphate (P2O5), berbentuk tepung halus berwarna abu-abu yang banyak dipakai oleh petani dan pengusaha tani untuk memenuhi kebutuhan hara Phosphate (P) agar tanaman dapat berproduksi optimal.\n\nKeuntungan Pupuk MerokeROCK®\nDengan memakai pupuk MerokeROCK®, gejala-gejala tanaman kerdil dan masalah pembuahan dapat diperbaiki. Pemakaian pupuk MerokeROCK® sebaiknya pada awal pertumbuhan atau sebagi pupuk dasar dan sebelum pembungaan.\n\nDosis dan frekuensi pemupukan dapat disesuaikan dengan tingkat kesuburan dan kondisi tanah, pertumbuhan dan produktivitas tanaman serta varietas tanaman yang digunakan.\n\nPerlu diberikan Dolomit/Kapur Pertanian sebanyak 2-4 kg/meter bedeng (bila pH<5) dan pupuk kandang/bahan organik sebanyak 2-4 kg/meter bedeng."
  },
  {
    id: "pupuk-5",
    name: "Meroke TSP Pupuk Tripel Super Fosfat",
    category: "pupuk",
    price: 260000,
    image: "products/pupuk/5.jpg",
    stock: 18,
    rating: 4.6,
    description: "Spesifikasi MerokeTSP®\nPhosphate (P2O5) 46%\n\n(Pupuk MerokeTSP® merupakan pupuk tunggal mengandung 46% Phosphate (P2O5), berbentuk granular hitam atau abu-abu yang banyak dipakai oleh petani dan pengusaha tani untuk memenuhi kebutuhan hara Phosphate (P) agar tanaman dapat berproduksi optimal.)\n\nKeuntungan:\nDengan memakai Pupuk MerokeTSP®, gejala-gejala tanaman kerdil dan masalah pembuahan dapat dierbaiki.\nPemakaian Pupuk MerokeTSP® sebaiknya pada awal pertumbuhan atau sebagai pupuk dasar dan sebelum pembungaan.\n\nDosis dan frekuensi pemupukan dapat disesuaikan dengan tingkat kesuburan dan kondisi tanah, pertumbuhan dan produktivitas tanaman serta varietas tanaman yang digunakan.\n\nPerlu diberikan Dolomit/Kapur Pertanian sebanyak 2-4 kg/meter bedeng (bila pH<5) dan pupuk kandang/bahan organik sebanyak 2-4 kg/meter bedeng."
  },
  {
    id: "pupuk-6",
    name: "Mutiara Pupuk NPK 16-16-16",
    category: "pupuk",
    price: 450000,
    image: "products/pupuk/6.jpg",
    stock: 40,
    rating: 4.9,
    description: "Spesifikasi NPK Mutiara® 16-16-16\nTotal Nitrogen (N) 16,0 %\nNitrat-N 6,5 %\nAmonium-N 9,5 %\nTotal P2O5 16,0 %\nP2O5 Larut Air 11,5 %\nTotal K2O 16,0%\nBerat Jenis 1,04 Kg/l\nGranulometry (2-4mm) 85 %\nWarna Biru\n\n(NPK Mutiara® 16-16-16 mengandung kombinasi terbaik dari Nitrate-Nitrogen, yang langsung tersedia untuk tanaman, dan Ammonium-Nitrogen, yang secara perlahan tersedia sebagai cadangan. Kombinasi dari kedua jenis Nitrogen ini akan memberikan respon pertumbuhan tanaman lebih cepat dan hasil panen lebih banyak. Dan juga dengan sumber Nitrogen yang lebih efisien ini, maka kehilangan hara ke lingkungan akan lebih rendah juga.)\n\nKeuntungan:\nMengandung hara yang seimbang di setiap butiran pupuknya\nSumber Nitrogen dengan kombinasi unik\nTeknik produksi Nitrophosphate yang unik\nMengandung Poly dan Orthophosphate sebagai penyedia hara phosphatenya\nHara-hara dengan cepat akan tersedia\nPenanganan dan cara aplikasi yang mudah dan merata\nRendah debu\nKualitasnya sudah terbukti\n\nManfaat:\nTanaman tumbuh dengan sehat dan memaksimalkan produktivitas jangka panjang\nHasil produksi meningkat dengan meningkatnya jumlah dan juga ukuran buah atau umbi\nMeningkatkan kualitas, rasa, warna, kesegaran dan daya simpan buah atau umbi"
  },
  {
    id: "pupuk-7",
    name: "Karate Plus Boroni Pupuk Kalsium Nitrat",
    category: "pupuk",
    price: 280000,
    image: "products/pupuk/7.jpg",
    stock: 22,
    rating: 4.8,
    description: "Spesifikasi KARATE PLUS BORONI®\nTotal Nitrogen (N) 15,5 %\nNitrat-N 14,4 %\nAmonium-N 1,1 %\nTotal Kalsium Oksida (CaO) 26,0 %\nKalsium (Ca) 18,3 %\nBoron (B) 0,2 %\nBerat Jenis 1,1 Kg/l\nGranulometry (2-4mm) 90%\nWarna Kuning\n\n(Nitrogen ini dalam bentuk Nitrate (N-NO3), mampu memberikan respon pertumbuhan tanaman yang lebih cepat karena dalam bentuk yang lebih tersedia.\n\nUnsur hara Boron (B) berperan dalam sintesa protein, pembelahan sel dan metabolisme karbohidrat, sehingga bila kurang tersedia maka dapat menghambat pertumbuhan tunas dan bunga.\n\nUnsur hara Kalsium (Ca) dalam bentuk yang tersedia dan dapat diambil oleh akar tanaman mengikuti ‘tarikan traanspirasi’ daun tanaman. Unsur hara Kalsium (Ca), sangat penting untuk titik-titik tumbuh tanaman seperti pucuk baru dan ujung-ujung akar. Kalsium juga berperan sebagai bahan penguat dinding sel serta perekat antara dinding-dinding sel dalam jaringan tanaman.)\n\nKeuntungan:\nMengandung hara yang seimbang di setiap butiran pupuknya.\nSumber Nitrate Nitrogen, Kalsium dan Boron yang larut air.\nHara-hara dengan cepat akan tersedia.\nPenanganan dan cara aplikasi yang mudah dan merata.\nKualitasnya sudah terbukti.\n\nManfaat:\nTanaman tumbuh dengan sehat dan memaksimalkan produktivitas jangka panjang.\nHasil produksi meningkat dengan meningkatnya jumlah dan juga ukuran buah atau umbi.\nMeningkatkan kualitas, rasa, warna, kesegaran dan daya simpan buah atau umbi."
  },
  {
    id: "pupuk-8",
    name: "SS (Ammophos) Pupuk Makro Majemuk",
    category: "pupuk",
    price: 340000,
    image: "products/pupuk/8.jpg",
    stock: 15,
    rating: 4.7,
    description: "Spesifikasi SS Ammophos®\nNitrogen (N) 16 %\nFosfat (P2O5) 20 %\nS (Sulfur) 12 %\n\n(Pupuk SS Ammophos (Ammonium Phosphate) “Cap Burung” merupakan pupuk majemuk yang mengandung unsur hara N (16%), P2O5 (20%) dan S (12%). Ketiga unsur ini merupakan komponen protein yang diserap lebih awal pada tahap pertumbuhan vegetatif (pertumbuhan akar, daun dan anakan), yang kemudian ditranslokasikan dalam tanaman dan berperan dalam peningkatan hasil produksi.)\n\nFungsi Unsur N, P dan S\nUnsur P sangat diperlukan tanaman pada tahap awal pertumbuhan, terutama untuk memacu pertumbuhan dan perkembangan akar. N dapat mempengaruhi ketersediaan dan meningkatkan penyerapan P. Apabila unsur P diaplikasikan bersama dengan N, maka P akan lebih tersedia sehingga lebih banyak diserap tanaman dibandingkan apabila P diaplikasikan sebagai pupuk tunggal.\n\nUnsur S dapat juga meningkatkan efisiensi pemupukan N, sehingga jumlah N yang diambil oleh tanaman lebih banyak."
  },
  {
    id: "pupuk-9",
    name: "Korn Kali +B Pupuk Makro Tunggal K-B",
    category: "pupuk",
    price: 295000,
    image: "products/pupuk/9.jpg",
    stock: 16,
    rating: 4.7,
    description: "Spesifikasi Korn-Kali+B®\nKalium Oksida (K2O) 40 %\nMagnesium Oksida (MgO) 6 %\nSulfur (S) 4 %\nBoraks Oksida (B2O3) 0,8 %\n\nTanaman:\nKorn-Kali+B® menjamin penyerapan dan penggunaan unsur haraa K, Mg dan B secara efisien oleh tanaman.\nKorn-Kali+B® dapat meminimalkan biaya aplikasi pupuk bila dibandingkan dengan pupuk tunggal.\nPemakaian 6 kg pupuk Korn-Kali+B® setara dengan:\n4 kg pupuk KCl / MOP\n1,3 kg pupuk ESTA Kieser-MAG® dan\n100 g pupuk Borate\n\nTanaman Sawit:\nKorn-Kali+B® dapat meminimalkan biaya aplikasi pupuk bila dibandingkan dengan pupuk tunggal.\nPemakaian 6 kg pupuk Korn-Kali+B® setara dengan:\n4 kg pupuk KCl / MOP\n1,3 kg ESTA Kieser-MAG® dan\n100 g pupuk Borate\nDengan aplikasi 4-6 kg Korn-Kali+B® per pohon yang dibagi menjadi 2x akan memenuhi kebutuhan K, Mg dan B selama setahun pada Tanaman Menghasilkan (TM) Kelapa Sawit.\nKorn-Kali+B adalah pupuk gabungan yang terdiri dari unsur hara:\nKalium dari KCl / MOP\nMagnesium dari ESTA Kieser-MAG®\nBoron dari Natrium Borate\nKorn-Kali+B® menjamin penyerapan dan penggunaan unsur hara K, Mg and B secara efisien oleh tanaman Kelapa Sawit.\n\nKeuntungan:\n\nTanaman:\nMengoptimalkan keseimbangan unsur hara K : Mg di dalam tanah agar dapat diserap secara efisien oleh tanaman.\nKualitas buah lebih besar, lebih manis dan warna lebih mengkilat.\nProduk pupuk bermutu tinggi dari Jerman.\n\nTanaman Sawit:\nMengoptimalkan keseimbangan unsur hara K : Mg di dalam tanah agar dapat diserap secara efisien oleh tanaman.\nMenghemat biaya aplikasi pemupukan hingga 3x jadwal pemupukan.\nProduk pupuk bermutu tinggi dari Jerman."
  },
  {
    id: "pupuk-10",
    name: "Mutiara Grower Pupuk NPK",
    category: "pupuk",
    price: 465000,
    image: "products/pupuk/10.jpg",
    stock: 20,
    rating: 4.9,
    description: "Spesifikasi NPK Mutiara Grower®\nTotal Nitrogen (N) 15,00 %\nNitrat-N 6,93 %\nAmonium-N 8,07 %\nTotal P2O5 9,00 %\nP2O5 Larut Air 5,40 %\nP2O5 Larut dalam Asam Sitrat 8,80 %\nTotal K2O 20,00 %\nTotal MgO 1,08 %\nSulfur (S) 3,40 %\nBerat Jenis 1,08 Kg/l\nGranulometry (1-4mm) 95 %\nWarna Hijau\n\n(Setiap butiran prill dari pupuk NPK Mutiara Grower® mengandung 5 hara penting, hara Makro yaitu hara N,P,K,Mg dan S yang lengkap untuk menjamin keseragaman penyebaran.\n\nNPK Mutiara Grower® adalah pupuk lengkap yang menyediakan hara Kalium yang seimbang dengan kombinasi 2 sumber hara Kalium yang unik yaitu 65% berasal dari KCl dan 35% berasal dari K2SO4. Mengandung kombinasi terbaik dari Nitrat-Nitrogen, yang langsung tersedia untuk tanaman dan Amonium-Nitrogen, yang secara perlahan tersedia dan sebagai cadangan.)\n\nKeuntungan:\nMengandung hara yang seimbang di setiap butiran pupuknya.\nMengandung hara Makro dan hara Mikro.\nSumber Nitrogen dengan kombinasi yang unik.\nTeknik produksi Nitrophosphate yang unik.\nMengandung Poly dan Orthophosphate sebagai penyedia hara phosphatenya.\nHara-hara dengan cepat akan tersedia.\nKalium berasal dari KCL dan K2SO4.\nPenanganan dan cara aplikasi yang mudah dan merata.\nRendah debunya.\nKualitasnya sudah terbukti.\n\nManfaat:\nTanaman tumbuh dengan sehat dan memaksimalkan produktivitas jangka panjang.\nHasil produksi meningkat dengan meningkatnya jumlah dan juga ukuran buah atau umbi.\nMeningkatkan kualitas, rasa, warna, kesegaran dan daya simpan buah atau umbi."
  },
  {
    id: "pupuk-11",
    name: "Suburkali Butir Pupuk Makro Campuran",
    category: "pupuk",
    price: 330000,
    image: "products/pupuk/11.jpg",
    stock: 24,
    rating: 4.7,
    description: "Spesifikasi SuburKali Butir®\nKalium Oksida (K2O) 30 %\nMagnesium Oksida (MgO) 10 %\nSulfur (S) 17 %\n\n(SuburKali Butir® merupakan pupuk majemuk dengan kandungan seimbang tiga unsur hara: Kalium, Magnesium dan Sulfur yang cocok untuk memacu pertumbuhan dan meningkatkan kualitas hasil produksi.\n\nPupuk SuburKali Butir® adalah pupuk majemuk pemberi unsur S tinggi yang sangat cocok untuk tanaman keluarga Crustacea (Kubis, Brokoli), dan bawang-bawangan (Bawang Merah, Bawang Prei) serta tanaman lainnya yang menghasilkan minyak atsiri.\n\nPupuk SuburKali Butir® merupakan pupuk yang ideal sebagai pelengkap unsur N and P dalam bentuk pupuk tunggal maupun majemuk.\n\nPupuk SuburKali Butir® merupakan produk alami K, Mg dan S, cocok untuk tanaman yang sensitif terhadap Klor seperti Kentang, Nenas, Jeruk, Cabe, Tomat, Kubis, Anggur dan Bawang Merah.\nKarakteristik istimewanya adalah kandungan Klor yang rendah (Bebas Klor),mudah larut dalam air dan dapat langsung diserap oleh tanaman.\n\nKandungan rasio Kalium, Magnesium, Sulfur yang seimbang dapat meningkatkan fungsi enzim, sintesa protein dan pembentukan umbi sehingga hasil panen dan kualitas meningkat serta memperkaya rasa dan warna.\n\nDosis dan frekuensi pemupukan dapat disesuaikan dengan tingkat kesuburan dan kondisi tanah, pertumbuhan dan produktivitas tanaman serta varietas tanaman yang digunakan.\n\nPerlu diberikan Dolomit/Kapur Pertanian sebanyak 2-4 kg/meter bedeng (bila pH<5) dan pupuk kandang/bahan organik sebanyak 2-4 kg/meter bedeng.)"
  },
  {
    id: "pupuk-12",
    name: "Meroke Kalnit Pupuk Kalsium Nitrat",
    category: "pupuk",
    price: 290000,
    image: "products/pupuk/12.jpg",
    stock: 15,
    rating: 4.8,
    description: "Spesifikasi MerokeCALNIT®\nTotal Nitrogen (N) 15,5 %\nNitrat-N 14,4 %\nAmonium-N 1,1 %\nTotal Kalsium Oksida (CaO) 26,0 %\nKalsium (Ca) 18,3 %\nBerat Jenis 1,1 Kg/l\nGranulometry (2-4mm) 90%\nWarna Putih\n\n(Nitrogen yang dikandung dalam pupuk MerokeCALNIT ini dalam bentuk Nitrat (N-NO3), mampu memberikan respon pertumbuhan tanaman yang lebih cepat karena dalam bentuk yang lebih tersedia dibandingkan dengan N-Amonium (N-NH4).\n\nUnsur hara Kalsium (Ca) yang dikandung dalam MerokeCALNIT adalah Kalsium yang larut air. Sehingga Kalsium dalam bentuk yang tersedia dan dapat diambil oleh akar tanaman mengikuti ‘tarikan transpirasi’ daun tanaman. Unsur hara Kalsium (Ca), sangat penting untuk titik-titik tumbuh tanaman seperti pucuk baru dan ujung-ujung akar.)\n\nManfaat:\nTanaman tumbuh dengan sehat dan memaksimalkan produktivitas jangka panjang.\nHasil produksi meningkat dengan meningkatnya jumlah dan juga ukuran buah atau umbi.\nMeningkatkan kualitas, rasa, warna, kesegaran dan daya simpan buah atau umbi.\n\nKeuntungan:\nMengandung hara yang seimbang di setiap butiran pupuknya.\nSumber Nitrate Nitrogen dan Kalsium yang larut air.\nHara-hara dengan cepat akan tersedia.\nPenanganan dan cara aplikasi yang mudah dan merata.\nKualitasnya sudah terbukti.\nBiasa dipakai sebagai stok A dalam AB Mix di pertanian hidroponik."
  }
];

// Cart State (stored in localStorage)
let cart = JSON.parse(localStorage.getItem("bumitani_cart")) || [];

// Active Tab Router
function initRouter() {
  const tabs = document.querySelectorAll("[data-tab]");
  tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      const targetSection = tab.getAttribute("data-tab");
      switchTab(targetSection);
    });
  });

  // Handle URL hash if any
  const hash = window.location.hash.replace("#", "");
  if (["home", "profile", "products", "contact", "faq"].includes(hash)) {
    switchTab(hash);
  } else {
    switchTab("home");
  }
}

function switchTab(sectionId) {
  // Update section visibility
  const sections = document.querySelectorAll(".page-section");
  sections.forEach(sec => {
    if (sec.id === `${sectionId}-section`) {
      sec.classList.add("active");
    } else {
      sec.classList.remove("active");
    }
  });

  // Update navigation link highlights
  const tabTriggers = document.querySelectorAll("[data-tab]");
  tabTriggers.forEach(trigger => {
    const sectionName = trigger.getAttribute("data-tab");
    if (sectionName === sectionId) {
      trigger.classList.add("text-forest-900", "font-semibold", "border-b-2", "border-forest-900");
      trigger.classList.remove("text-stone-600", "font-medium", "border-transparent");
    } else {
      trigger.classList.remove("text-forest-900", "font-semibold", "border-b-2", "border-forest-900");
      trigger.classList.add("text-stone-600", "font-medium", "border-transparent");
    }
  });

  // Smooth scroll to top of page
  window.scrollTo({ top: 0, behavior: "smooth" });
  window.location.hash = sectionId;

  // Render product catalog specifically when entering products page
  if (sectionId === "products") {
    renderCatalog();
  }

  // Close mobile menu if open
  closeMobileMenu();
}

// Mobile Menu Operations
function initMobileMenu() {
  const openBtn = document.getElementById("mobile-menu-open");
  const closeBtn = document.getElementById("mobile-menu-close");
  const drawer = document.getElementById("mobile-menu-drawer");
  const overlay = document.getElementById("sidebar-overlay");

  if (openBtn && closeBtn && drawer && overlay) {
    openBtn.addEventListener("click", () => {
      drawer.classList.remove("translate-x-full");
      overlay.classList.add("active");
      document.body.classList.add("overflow-hidden");
    });

    closeBtn.addEventListener("click", closeMobileMenu);
    overlay.addEventListener("click", () => {
      closeMobileMenu();
      closeCart();
    });
  }
}

// Close Mobile Drawer Menu
function closeMobileMenu() {
  const drawer = document.getElementById("mobile-menu-drawer");
  const overlay = document.getElementById("sidebar-overlay");
  if (drawer && overlay) {
    drawer.classList.add("translate-x-full");
    if (!document.getElementById("cart-sidebar").classList.contains("translate-x-full")) {
      // Cart is still open, do not deactivate overlay
    } else {
      overlay.classList.remove("active");
      document.body.classList.remove("overflow-hidden");
    }
  }
}

// Shopping Cart Sidebar Operations
function initCartSidebar() {
  const openBtn = document.getElementById("cart-open-btn");
  const openBtnMobile = document.getElementById("cart-open-btn-mobile");
  const closeBtn = document.getElementById("cart-close-btn");
  const cartSidebar = document.getElementById("cart-sidebar");
  const overlay = document.getElementById("sidebar-overlay");

  const openCartHandler = () => {
    cartSidebar.classList.remove("translate-x-full");
    overlay.classList.add("active");
    document.body.classList.add("overflow-hidden");
    renderCart();
  };

  if (openBtn) openBtn.addEventListener("click", openCartHandler);
  if (openBtnMobile) openBtnMobile.addEventListener("click", openCartHandler);
  if (closeBtn) closeBtn.addEventListener("click", closeCart);
}

function closeCart() {
  const cartSidebar = document.getElementById("cart-sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  if (cartSidebar && overlay) {
    cartSidebar.classList.add("translate-x-full");
    // Only deactivate overlay if mobile menu and modals are also closed
    if (document.getElementById("mobile-menu-drawer").classList.contains("translate-x-full") &&
        document.getElementById("checkout-modal").classList.contains("pointer-events-none") &&
        document.getElementById("product-detail-modal").classList.contains("pointer-events-none")) {
      overlay.classList.remove("active");
      document.body.classList.remove("overflow-hidden");
    }
  }
}

// Shopping Cart Actions
function saveCart() {
  localStorage.setItem("bumitani_cart", JSON.stringify(cart));
  updateCartCounters();
}

// Update Cart Counters
function updateCartCounters() {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const counters = document.querySelectorAll(".cart-counter");
  counters.forEach(c => {
    c.textContent = totalCount;
    if (totalCount > 0) {
      c.classList.remove("hidden");
    } else {
      c.classList.add("hidden");
    }
  });
}

// Add Item to Cart
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    if (existingItem.quantity < product.stock) {
      existingItem.quantity++;
    } else {
      alert(`Stok produk terbatas. Maksimal pembelian ${product.stock} pcs.`);
      return;
    }
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      stock: product.stock
    });
  }

  saveCart();
  renderCart();
  
  // Show toast indicator
  showToast(`${product.name} dimasukkan ke keranjang.`);
}

function changeQuantity(productId, delta) {
  const item = cart.find(item => item.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== productId);
  } else if (item.quantity > item.stock) {
    item.quantity = item.stock;
    alert(`Stok produk terbatas. Maksimal pembelian ${item.stock} pcs.`);
  }

  saveCart();
  renderCart();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  renderCart();
}

// Show micro interaction toast
function showToast(message) {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-2 pointer-events-none";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  // FIXED button text color visibility (uses text-white directly)
  toast.className = "bg-forest-900 text-white text-sm font-medium px-5 py-3 rounded-full shadow-lg flex items-center gap-2 animate-bounce-short transition-all duration-300 opacity-0 transform translate-y-2";
  toast.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-sage-400"></span> ${message}`;
  
  container.appendChild(toast);
  
  // Trigger entry animation
  setTimeout(() => {
    toast.classList.remove("opacity-0", "translate-y-2");
  }, 10);

  // Remove toast
  setTimeout(() => {
    toast.classList.add("opacity-0", "translate-y-2");
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 2500);
}

function formatRupiah(number) {
  return "Rp " + number.toLocaleString("id-ID");
}

// Render Cart HTML
function renderCart() {
  const itemsContainer = document.getElementById("cart-items-container");
  const totalContainer = document.getElementById("cart-total-price");
  const checkoutBtn = document.getElementById("cart-checkout-btn");

  if (!itemsContainer || !totalContainer) return;

  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="flex flex-col items-center justify-center py-20 text-center text-stone-500">
        <i data-lucide="shopping-bag" class="w-10 h-10 stroke-1 text-stone-400 mb-3"></i>
        <p class="font-medium text-stone-700">Keranjang masih kosong</p>
        <p class="text-xs text-stone-400 mt-1 max-w-[200px]">Silakan pilih produk berkualitas kami untuk berkebun & bertani.</p>
      </div>
    `;
    totalContainer.textContent = "Rp 0";
    if (checkoutBtn) checkoutBtn.disabled = true;
    lucide.createIcons();
    return;
  }

  if (checkoutBtn) checkoutBtn.disabled = false;

  let totalPrice = 0;
  itemsContainer.innerHTML = cart.map(item => {
    const itemTotal = item.price * item.quantity;
    totalPrice += itemTotal;

    return `
      <div class="flex items-start gap-3 py-4 border-b border-stone-200/60">
        <div class="w-16 h-16 rounded bg-stone-100 flex-shrink-0 overflow-hidden border border-stone-200/50 cursor-pointer" onclick="openProductDetail('${item.id}')">
          <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover" onerror="this.src='https://placehold.co/100x100?text=Produk'">
        </div>
        <div class="flex-grow min-w-0">
          <h4 class="font-semibold text-stone-855 text-sm truncate leading-tight hover:text-forest-800 transition cursor-pointer" onclick="openProductDetail('${item.id}')">${item.name}</h4>
          <span class="text-xs text-stone-500 block mt-0.5">${formatRupiah(item.price)} / pcs</span>
          
          <div class="flex items-center justify-between mt-3">
            <div class="flex items-center border border-stone-300 rounded overflow-hidden">
              <button onclick="changeQuantity('${item.id}', -1)" class="w-7 h-7 flex items-center justify-center hover:bg-stone-100 text-stone-600 transition">
                <i data-lucide="minus" class="w-3.5 h-3.5"></i>
              </button>
              <span class="w-8 text-center text-xs font-semibold text-stone-855">${item.quantity}</span>
              <button onclick="changeQuantity('${item.id}', 1)" class="w-7 h-7 flex items-center justify-center hover:bg-stone-100 text-stone-600 transition">
                <i data-lucide="plus" class="w-3.5 h-3.5"></i>
              </button>
            </div>
            <button onclick="removeFromCart('${item.id}')" class="text-xs text-red-655 hover:text-red-800 hover:underline flex items-center gap-1">
              <i data-lucide="trash-2" class="w-3 h-3"></i> Hapus
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  totalContainer.textContent = formatRupiah(totalPrice);
  // FIXED button text color visibility (uses text-white directly)
  if (checkoutBtn) {
    checkoutBtn.className = "w-full bg-forest-900 hover:bg-forest-800 disabled:bg-stone-200 disabled:text-stone-400 disabled:cursor-not-allowed text-white py-3.5 rounded-lg font-semibold flex items-center justify-center gap-2.5 transition duration-200 shadow-md";
  }
  lucide.createIcons();
}

// Open Centered Checkout Modal
function openCheckoutModal() {
  if (cart.length === 0) return;

  // Close Cart Sidebar Sidebar
  closeCart();

  const modal = document.getElementById("checkout-modal");
  const modalContent = modal.querySelector(".relative");
  const summaryList = document.getElementById("checkout-summary-list");
  const totalPriceField = document.getElementById("checkout-total-price");

  // Populate Order Summary
  let totalPrice = 0;
  summaryList.innerHTML = cart.map(item => {
    const itemTotal = item.price * item.quantity;
    totalPrice += itemTotal;
    return `
      <div class="flex items-center justify-between py-1.5 text-stone-700 font-medium">
        <span class="truncate max-w-[280px]">${item.name} <span class="text-stone-400 font-semibold">x${item.quantity}</span></span>
        <span class="font-semibold">${formatRupiah(itemTotal)}</span>
      </div>
    `;
  }).join("");

  totalPriceField.textContent = formatRupiah(totalPrice);

  // Open Animations
  modal.classList.remove("pointer-events-none", "opacity-0");
  modal.classList.add("opacity-100");
  modalContent.classList.remove("scale-95");
  modalContent.classList.add("scale-100");
  
  document.body.classList.add("overflow-hidden");

  lucide.createIcons();
}

// Close Centered Checkout Modal
function closeCheckoutModal() {
  const modal = document.getElementById("checkout-modal");
  const modalContent = modal.querySelector(".relative");

  modal.classList.add("pointer-events-none", "opacity-0");
  modal.classList.remove("opacity-100");
  modalContent.classList.add("scale-95");
  modalContent.classList.remove("scale-100");

  document.body.classList.remove("overflow-hidden");
}

// Generate WhatsApp Redirect Link with Centered Form details & Beautiful Separator
function handleCheckout() {
  if (cart.length === 0) return;

  // Get shipping inputs from centered checkout modal
  const shippingName = document.getElementById("checkout-name").value.trim();
  const shippingAddress = document.getElementById("checkout-address").value.trim();
  const shippingNotes = document.getElementById("checkout-notes").value.trim();

  // Validate inputs
  if (!shippingName || !shippingAddress) {
    alert("Mohon isi Nama Lengkap Penerima dan Alamat Lengkap pengiriman terlebih dahulu.");
    return;
  }

  let orderDetails = cart.map(item => {
    return `- ${item.name}\n  Qty: ${item.quantity}x\n  Subtotal: ${formatRupiah(item.price * item.quantity)}`;
  }).join("\n\n");

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // FIXED: Added a clear separator line (━━━━━━━━━━━━━━━━━━) between products list and delivery details as requested
  const separator = "\n\n━━━━━━━━━━━━━━━━━━\n\n";
  const messageText = `Halo admin, saya ingin memesan:\n\n${orderDetails}\n\nTotal: ${formatRupiah(total)}${separator}Detail Pengiriman:\n-------------------\n- Nama: ${shippingName}\n- Alamat: ${shippingAddress}\n- Catatan: ${shippingNotes || "-"}`;
  
  const encodedText = encodeURIComponent(messageText);
  const waUrl = `https://wa.me/62${ADMIN_WHATSAPP.substring(1)}?text=${encodedText}`;

  // Redirect in new window
  window.open(waUrl, "_blank");

  // Close Checkout Modal
  closeCheckoutModal();
}

// Product Detail Modal Open
function openProductDetail(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("product-detail-modal");
  const modalContent = modal.querySelector(".relative");
  
  // Set contents
  document.getElementById("modal-product-image").src = product.image;
  document.getElementById("modal-product-image").alt = product.name;
  document.getElementById("modal-product-category").textContent = product.category;
  document.getElementById("modal-product-name").textContent = product.name;
  document.getElementById("modal-product-rating").textContent = `${product.rating} (Ulasan Realistis)`;
  document.getElementById("modal-product-stock").textContent = `Stok: ${product.stock}`;
  document.getElementById("modal-product-description").textContent = product.description;
  document.getElementById("modal-product-price").textContent = formatRupiah(product.price);

  // Set buy button handler
  const buyBtn = document.getElementById("modal-buy-btn");
  buyBtn.onclick = () => {
    addToCart(product.id);
    closeProductDetail();
  };

  // Open modal styling with transitions
  modal.classList.remove("pointer-events-none", "opacity-0");
  modal.classList.add("opacity-100");
  modalContent.classList.remove("scale-95");
  modalContent.classList.add("scale-100");
  
  document.body.classList.add("overflow-hidden");
  
  lucide.createIcons();
}

// Product Detail Modal Close
function closeProductDetail() {
  const modal = document.getElementById("product-detail-modal");
  const modalContent = modal.querySelector(".relative");
  
  modal.classList.add("pointer-events-none", "opacity-0");
  modal.classList.remove("opacity-100");
  modalContent.classList.add("scale-95");
  modalContent.classList.remove("scale-100");
  
  // Only remove overflow-hidden if other panels are closed
  const cartSidebar = document.getElementById("cart-sidebar");
  const mobileMenu = document.getElementById("mobile-menu-drawer");
  const checkoutModal = document.getElementById("checkout-modal");
  if (cartSidebar.classList.contains("translate-x-full") && 
      mobileMenu.classList.contains("translate-x-full") &&
      checkoutModal.classList.contains("pointer-events-none")) {
    document.body.classList.remove("overflow-hidden");
  }
}

// FAQ Accordion Handler
function initFAQ() {
  const faqTriggers = document.querySelectorAll(".faq-trigger");
  faqTriggers.forEach(trigger => {
    trigger.addEventListener("click", () => {
      const isExpanded = trigger.getAttribute("aria-expanded") === "true";
      
      // Close other accordions
      faqTriggers.forEach(t => {
        t.setAttribute("aria-expanded", "false");
        const content = t.nextElementSibling;
        if (content) {
          content.style.maxHeight = null;
          content.classList.remove("py-4");
          content.classList.add("py-0");
        }
      });

      // Toggle current accordion
      if (!isExpanded) {
        trigger.setAttribute("aria-expanded", "true");
        const content = trigger.nextElementSibling;
        if (content) {
          content.style.maxHeight = content.scrollHeight + "px";
          content.classList.remove("py-0");
          content.classList.add("py-4");
        }
      }
    });
  });
}

// Category Catalog Filter State
let activeCategoryFilter = "all";
let activeSearchQuery = "";

// Render Product Catalog in SPA
function renderCatalog() {
  const grid = document.getElementById("product-grid");
  if (!grid) return;

  // Filter products
  let filtered = PRODUCTS;
  if (activeCategoryFilter !== "all") {
    filtered = filtered.filter(p => p.category === activeCategoryFilter);
  }
  if (activeSearchQuery.trim() !== "") {
    const q = activeSearchQuery.toLowerCase();
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.description.toLowerCase().includes(q)
    );
  }

  // Count indicator
  const countIndicator = document.getElementById("product-count-indicator");
  if (countIndicator) {
    countIndicator.textContent = `Menampilkan ${filtered.length} Produk`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-16 flex flex-col items-center justify-center text-center text-stone-500">
        <i data-lucide="package-search" class="w-12 h-12 stroke-1 text-stone-400 mb-3"></i>
        <p class="font-medium text-stone-700 text-lg">Produk tidak ditemukan</p>
        <p class="text-sm text-stone-400 mt-1 max-w-[320px]">Coba cari dengan kata kunci lain atau pilih kategori yang berbeda.</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  grid.innerHTML = filtered.map(product => {
    return `
      <div class="product-card bg-white rounded-xl overflow-hidden flex flex-col justify-between group border border-stone-200/50">
        <div class="relative img-zoom-container bg-stone-100 aspect-square w-full border-b border-stone-100 cursor-pointer" onclick="openProductDetail('${product.id}')">
          <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover" loading="lazy" onerror="this.src='https://placehold.co/400x400?text=Produk+BumiTani'">
          <span class="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-forest-900 text-[10px] tracking-wider uppercase font-semibold px-2.5 py-1 rounded-full shadow-sm border border-stone-200/30">
            ${product.category}
          </span>
          <span class="absolute top-3 right-3 text-[10px] bg-broken-100/90 text-stone-700 font-semibold px-2.5 py-1 rounded shadow-sm border border-stone-200/20">
            Stok: ${product.stock}
          </span>
        </div>
        
        <div class="p-5 flex-grow flex flex-col justify-between">
          <div class="cursor-pointer" onclick="openProductDetail('${product.id}')">
            <div class="flex items-center gap-1.5 mb-2">
              <div class="flex text-amber-500 items-center">
                <i data-lucide="star" class="w-3.5 h-3.5 fill-current"></i>
              </div>
              <span class="text-xs font-semibold text-stone-700">${product.rating}</span>
            </div>
            
            <h3 class="font-display font-bold text-stone-855 text-base leading-tight group-hover:text-forest-755 transition duration-300">
              ${product.name}
            </h3>
            
            <p class="text-xs text-stone-500 mt-2 line-clamp-3 leading-relaxed">
              ${product.description}
            </p>
          </div>
          
          <div class="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between gap-2">
            <span class="font-display font-extrabold text-stone-900 text-base">
              ${formatRupiah(product.price)}
            </span>
            <!-- FIXED button text color visibility (uses text-white directly) -->
            <button onclick="event.stopPropagation(); addToCart('${product.id}')" class="bg-forest-900 hover:bg-forest-800 text-white text-xs font-semibold px-3 py-2 rounded-lg flex items-center gap-1.5 transition duration-300 shadow-sm">
              <i data-lucide="shopping-cart" class="w-3.5 h-3.5"></i>
              Beli
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  lucide.createIcons();
}

// Catalog Filtering Interactions
function initCatalogFilters() {
  const filterBtns = document.querySelectorAll("[data-filter]");
  const searchInput = document.getElementById("catalog-search");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      activeCategoryFilter = btn.getAttribute("data-filter");
      
      // Update UI active states
      filterBtns.forEach(b => {
        b.classList.remove("bg-forest-900", "text-broken-100", "border-forest-900");
        b.classList.add("bg-white", "text-stone-700", "border-stone-200", "hover:border-stone-400");
      });
      
      btn.classList.remove("bg-white", "text-stone-700", "border-stone-200", "hover:border-stone-400");
      btn.classList.add("bg-forest-900", "text-white", "border-forest-900");
      
      renderCatalog();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      activeSearchQuery = e.target.value;
      renderCatalog();
    });
  }
}

// Featured Products on Home Page
function renderFeaturedProducts() {
  const container = document.getElementById("featured-products-container");
  if (!container) return;

  // Pick 4 highly-rated featured products
  const featured = PRODUCTS.filter(p => p.rating >= 4.8).slice(0, 4);

  container.innerHTML = featured.map(product => {
    return `
      <div class="product-card bg-white rounded-xl overflow-hidden flex flex-col justify-between group border border-stone-200/50">
        <div class="relative img-zoom-container bg-stone-100 aspect-square w-full cursor-pointer" onclick="openProductDetail('${product.id}')">
          <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover" loading="lazy" onerror="this.src='https://placehold.co/400x400?text=BumiTani+Produk'">
          <span class="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-forest-900 text-[10px] tracking-wider uppercase font-semibold px-2.5 py-1 rounded-full shadow-sm border border-stone-200/30">
            ${product.category}
          </span>
        </div>
        <div class="p-5 flex-grow flex flex-col justify-between">
          <div class="cursor-pointer" onclick="openProductDetail('${product.id}')">
            <div class="flex items-center gap-1.5 mb-2">
              <div class="flex text-amber-500 items-center">
                <i data-lucide="star" class="w-3.5 h-3.5 fill-current"></i>
              </div>
              <span class="text-xs font-semibold text-stone-700">${product.rating}</span>
            </div>
            <h3 class="font-display font-bold text-stone-850 text-sm md:text-base leading-tight group-hover:text-forest-750 transition duration-300">
              ${product.name}
            </h3>
            <p class="text-xs text-stone-500 mt-2 line-clamp-2 leading-relaxed">
              ${product.description}
            </p>
          </div>
          <div class="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between gap-2">
            <span class="font-display font-extrabold text-stone-900 text-sm md:text-base">
              ${formatRupiah(product.price)}
            </span>
            <!-- FIXED button text color visibility (uses text-white directly) -->
            <button onclick="event.stopPropagation(); addToCart('${product.id}')" class="bg-forest-900 hover:bg-forest-800 text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1 transition duration-300 shadow-sm">
              Tambah
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
  
  lucide.createIcons();
}

// Contact Form Handler & Real WhatsApp Redirection (Not simulated!)
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("contact-name").value.trim();
      const email = document.getElementById("contact-email").value.trim();
      const message = document.getElementById("contact-message").value.trim();

      if (!name || !email || !message) {
        alert("Semua kolom pesan wajib diisi.");
        return;
      }

      // Premium visual confirmation
      const submitBtn = form.querySelector("button[type='submit']");
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span class="flex items-center gap-2 justify-center"><i data-lucide="loader" class="w-4 h-4 animate-spin"></i> Mengirim...</span>`;
      lucide.createIcons();

      setTimeout(() => {
        submitBtn.innerHTML = `<span class="flex items-center gap-2 justify-center"><i data-lucide="check" class="w-4 h-4"></i> Berhasil Terkirim</span>`;
        lucide.createIcons();
        form.reset();
        
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          lucide.createIcons();
          
          // REAL REDIRECTION: Formulate text message and redirect to admin WhatsApp
          const waMessage = `Halo admin BumiTani, saya ingin mengirimkan pesan/pertanyaan:\n\nNama: ${name}\nEmail: ${email}\nPesan: ${message}`;
          const encodedText = encodeURIComponent(waMessage);
          const waUrl = `https://wa.me/62${ADMIN_WHATSAPP.substring(1)}?text=${encodedText}`;
          window.open(waUrl, "_blank");

          showToast("Pesan Anda telah dialihkan ke WhatsApp.");
        }, 1000);
      }, 1200);
    });
  }
}

// Main Initializer
document.addEventListener("DOMContentLoaded", () => {
  initRouter();
  initMobileMenu();
  initCartSidebar();
  initFAQ();
  initCatalogFilters();
  renderFeaturedProducts();
  initContactForm();
  updateCartCounters();

  // Initialize Lucide Icons globally
  lucide.createIcons();

  // Handle Checkout Drawer Button click (Opens Centered Checkout Modal)
  const checkoutBtn = document.getElementById("cart-checkout-btn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", openCheckoutModal);
  }

  // Handle Centered Checkout Modal Button triggers
  const checkoutCloseBtn = document.getElementById("checkout-close-btn");
  const checkoutBackdrop = document.getElementById("checkout-backdrop");
  const checkoutCancelBtn = document.getElementById("checkout-cancel-btn");
  const checkoutSubmitBtn = document.getElementById("checkout-submit-btn");

  if (checkoutCloseBtn) checkoutCloseBtn.addEventListener("click", closeCheckoutModal);
  if (checkoutBackdrop) checkoutBackdrop.addEventListener("click", closeCheckoutModal);
  if (checkoutCancelBtn) checkoutCancelBtn.addEventListener("click", closeCheckoutModal);
  if (checkoutSubmitBtn) checkoutSubmitBtn.addEventListener("click", handleCheckout);

  // Handle Product Detail Modal Close button and backdrop clicks
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalBackdrop = document.getElementById("product-detail-backdrop");
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeProductDetail);
  if (modalBackdrop) modalBackdrop.addEventListener("click", closeProductDetail);

  // Keyboard navigation for closing modals & drawers (Escape key)
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProductDetail();
      closeCheckoutModal();
      closeCart();
      closeMobileMenu();
    }
  });
  
  // Floating WA click handler to start consulting
  const waFloating = document.getElementById("floating-wa-btn");
  if (waFloating) {
    waFloating.addEventListener("click", () => {
      const text = encodeURIComponent("Halo BumiTani, saya ingin melakukan konsultasi gratis mengenai permasalahan pertanian.");
      window.open(`https://wa.me/62${ADMIN_WHATSAPP.substring(1)}?text=${text}`, "_blank");
    });
  }
});
