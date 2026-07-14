# Uji Jewelry Store — Business Overview

> Dokumen ini berisi gambaran bisnis lengkap untuk **Uji Jewelry Store**, mulai dari konsep bisnis, target pasar, strategi produk, model pendapatan, hingga rencana teknis (checkout, keamanan, SEO, dan data analytics) untuk mendukung platform e-commerce yang sudah dibangun (`index.html`, `cart.html`, `admin.html`, `style.css`, `chart.css`, `script.js`).

---

# 1. Profil Bisnis

**Nama Bisnis:** Uji Jewelry Store
**Tagline:** *"Wear what suits your mood."*

**Deskripsi:**
Uji Jewelry Store adalah toko perhiasan fashion online yang menjual aksesoris seperti kalung, gelang, cincin, dan jam tangan bergaya kasual hingga statement. Produk dikurasi dalam koleksi yang mudah dipadupadankan untuk kebutuhan sehari-hari maupun acara spesial.

**Value Proposition:**
- **Personal & Expressive** — koleksi dikelompokkan berdasarkan mood/gaya (Pink, Gold, Vintage, Y2K), bukan sekadar jenis barang, sehingga pelanggan mudah menemukan identitas gaya mereka.
- **Harga Terjangkau untuk Kualitas Fashion Jewelry** — kisaran harga Rp 999.000 – Rp 3.499.000, cocok untuk pasar aksesoris fashion (bukan perhiasan investasi/logam mulia).
- **Pengalaman Belanja Sederhana & Cepat** — antarmuka ringan, pencarian instan, kategori satu klik, dan proses checkout singkat tanpa akun wajib.
- **Kontak Langsung & Personal** — layanan pelanggan melalui email dan WhatsApp untuk membangun kedekatan dengan brand.

**Kontak:**
- Email: ujiish31@gmail.com
- Telepon/WA: +62 838 2294 7317

---

## 2. Target Market & Segmentasi Pelanggan

### Target Utama
| Segmen | Karakteristik |
|---|---|
| **Gen Z & Milenial Muda (16–28 tahun)** | Aktif di media sosial, menyukai tren fashion cepat berganti (Y2K, aesthetic pink) |
| **Mahasiswa & Pekerja Muda** | Mencari aksesoris terjangkau untuk tampil stylish tanpa budget besar |
| **Pecinta Vintage & Retro** | Menyukai perhiasan bernuansa klasik/antik sebagai statement piece |
| **Pembeli Hadiah** | Mencari kado untuk pasangan, sahabat, atau keluarga di kisaran harga menengah |

### Segmentasi berdasarkan Kategori Produk
- **Pink** → pembeli yang menyukai gaya feminin, lembut, everyday wear
- **Gold** → pembeli yang mencari kesan elegan/formal untuk acara khusus
- **Vintage** → pembeli dengan selera klasik, unik, dan bermakna personal
- **Y2K** → pembeli tren, ekspresif, dan mengikuti estetika pop culture terkini

### Demografi & Geografi
- Fokus awal: pasar domestik Indonesia (harga dalam Rupiah, kontak WhatsApp lokal)
- Channel penjualan: website sendiri, dapat diperluas ke media sosial (Instagram/TikTok Shop) sebagai funnel tambahan

---

## 3. Analisis Pasar Singkat & Kompetitor

### Gambaran Pasar
Industri aksesoris fashion (bukan perhiasan logam mulia) di Indonesia tumbuh seiring meningkatnya budaya self-expression melalui media sosial. Tren micro-trend seperti Y2K dan vintage revival membuat siklus permintaan berubah cepat, sehingga toko yang gesit memperbarui katalog memiliki keunggulan.

### Kekuatan (Strengths)
- Kategorisasi berbasis gaya/mood memudahkan pencarian dan cross-selling
- Struktur website ringan → cepat diakses, ramah untuk pengguna mobile
- Harga kompetitif di segmen fashion jewelry menengah

### Peluang (Opportunities)
- Ekspansi ke media sosial commerce (Instagram Shop, TikTok Shop)
- Bundling produk lintas kategori (misal "Pink + Y2K starter set")
- Program membership/loyalty untuk repeat buyer

### Kompetitor (Tipe Umum di Pasar)
| Jenis Kompetitor | Contoh Karakteristik |
|---|---|
| Marketplace besar (Shopee/Tokopedia seller aksesoris) | Harga sangat kompetitif, tapi kurang personal/branding |
| Toko aksesoris lokal Instagram | Branding kuat, tapi sering tanpa website resmi/checkout otomatis |
| Brand aksesoris nasional | Kualitas & kepercayaan tinggi, harga lebih mahal |

**Diferensiasi Uji Jewelry Store:** kombinasi website resmi dengan checkout mandiri (bukan hanya DM/chat manual) + kategorisasi bergaya mood yang jarang dipakai kompetitor lokal.

---

## 4. Strategi Manajemen Produk & Katalog

### Struktur Kategori
1. **Pink** — Silver Pink, Rosa, Crystal Beaded Bracelet Set, Pink Bracelet, Rose Gold Cubic
2. **Gold** — Classic Gold, Luxury Gold, Elegant Gold & Pearl, Bracelet Gold, Set Pearl
3. **Vintage** — Vintage Retro, Vintage Rings, Charm Bracelet, Bracelet Watch, Watch Set
4. **Y2K** — Y2K Shiny, Pink Butterfly, Punk Gothic, Y2K Colorful, Y2K Ring

### Prinsip Deskripsi Produk
- Setiap produk memakai **deskripsi singkat namun evokatif** (1 kalimat) yang menonjolkan *feel* dan *occasion*, contoh: *"Kalung silver dengan sentuhan pink lembut, cocok untuk tampilan sehari-hari yang manis."*
- Deskripsi difokuskan pada **manfaat emosional** (percaya diri, personal, elegan) bukan hanya spesifikasi teknis material.

### Strategi Visual
- Foto produk konsisten dengan latar bersih agar warna aksesoris menonjol
- Rasio gambar seragam pada seluruh kartu produk agar katalog terlihat rapi di grid
- Rencana pengembangan: tambahkan foto *on-model* (dipakai orang) untuk meningkatkan kepercayaan pembeli terhadap ukuran & tampilan asli produk

### Manajemen Stok
- Setiap produk memiliki status stok real-time (**Tersedia / Habis**) yang otomatis menonaktifkan tombol beli saat stok kosong
- Panel admin (`admin.html`) memungkinkan pembaruan stok langsung tanpa perlu mengubah kode program

### Roadmap Katalog
- Rotasi musiman: tambah koleksi baru tiap 2–3 bulan mengikuti tren (misal koleksi "Summer Pink", "Back to School Y2K")
- Evaluasi produk *slow-moving* dari data penjualan untuk potensi diskon atau penghapusan katalog

---

## 5. Model Bisnis & Revenue Stream

### Model Bisnis
Direct-to-Consumer (D2C) e-commerce — penjualan aksesoris langsung ke konsumen akhir melalui website sendiri, tanpa perantara distributor.

### Sumber Pendapatan (Revenue Stream)
| Sumber | Deskripsi |
|---|---|
| **Penjualan Produk Utama** | Margin dari harga jual setiap unit aksesoris |
| **Bundling/Paket Set** | Penjualan set (misal "Set Pearl") dengan nilai jual lebih tinggi per transaksi |
| **Cross-selling Antar Kategori** | Rekomendasi produk lain saat checkout untuk menaikkan nilai keranjang (AOV) |
| **Potensi Masa Depan: Konsinyasi/Reseller** | Membuka program reseller dengan skema harga khusus |

### Struktur Biaya Utama (untuk pertimbangan margin)
- Harga pokok produk (bahan baku/supplier)
- Biaya pengemasan & pengiriman
- Biaya operasional platform (hosting, payment gateway fee)
- Biaya promosi/marketing

---

## 6. Strategi Harga, Promosi, dan Diskon

### Strategi Harga
- **Good-Better-Best tiering** berdasarkan kategori:
  - *Entry price* (≈ Rp 999.000–1.099.000): Y2K Shiny, Vintage Retro — untuk menarik pembeli baru
  - *Mid price* (≈ Rp 1.499.000–2.499.000): mayoritas produk, menjadi tulang punggung penjualan
  - *Premium price* (≈ Rp 2.899.000–3.499.000): Rose Gold Cubic, Classic Gold, Set Pearl — untuk pembeli yang mencari kesan mewah

### Strategi Promosi
- Notifikasi "berhasil ditambahkan ke keranjang" untuk memperkuat *positive reinforcement* saat belanja
- Highlight kategori di halaman utama untuk mendorong eksplorasi lintas produk
- Rencana lanjutan: kolaborasi dengan micro-influencer lokal untuk konten "gaya sesuai kategori" (Pink/Gold/Vintage/Y2K)

### Strategi Diskon
- Diskon musiman/*flash sale* pada produk dengan stok menumpuk
- Diskon *bundling* saat membeli 2+ produk dari kategori yang sama
- Kupon khusus pelanggan baru (first purchase) untuk meningkatkan konversi awal

---

## 7. Proses Checkout & Simulasi Payment Gateway

### Alur Checkout Saat Ini
1. Pelanggan menambahkan produk ke keranjang (`tambahKeKeranjang`) — stok otomatis divalidasi
2. Pelanggan membuka halaman keranjang (`cart.html`), dapat mengubah jumlah atau menghapus item
3. Pelanggan mengisi form checkout (nama, alamat, telepon, metode pembayaran)
4. Sistem membuat nomor pesanan otomatis (format `UJ-XXXXXX`)
5. Stok produk dikurangi sesuai jumlah pembelian setelah checkout berhasil
6. Ditampilkan halaman konfirmasi pesanan berhasil

### Simulasi Payment Gateway (Dummy)
Untuk kebutuhan demo/akademik, checkout dapat disimulasikan menggunakan salah satu gateway berikut (dipilih sebagai *placeholder*, belum terhubung ke API sungguhan):

| Gateway | Alasan Pemilihan (Simulasi) |
|---|---|
| **Midtrans** | Populer di Indonesia, mendukung banyak metode (VA, e-wallet, QRIS) — cocok untuk pasar domestik toko ini |
| **Xendit** | Alternatif lokal dengan integrasi cepat, cocok untuk skala UMKM |
| **PayPal** | Opsi untuk kemungkinan ekspansi pembeli internasional di masa depan |

**Rekomendasi untuk toko ini:** **Midtrans**, karena target pasar utama adalah konsumen Indonesia dan metode pembayaran lokal (QRIS, transfer bank, e-wallet) lebih relevan dibanding PayPal yang berorientasi pembayaran internasional.

**Simulasi alur pembayaran (dummy, tanpa transaksi nyata):**
1. Setelah form checkout disubmit → sistem menampilkan status "Menunggu Pembayaran" dengan nomor pesanan & total tagihan
2. Simulasi metode pembayaran dipilih (VA Bank / E-wallet / QRIS — mengacu ke Midtrans)
3. Tombol "Simulasikan Pembayaran Berhasil" (dummy) mengubah status pesanan menjadi "Lunas"
4. Halaman konfirmasi menampilkan ringkasan pesanan final

> Catatan: implementasi API pembayaran sungguhan memerlukan backend server (Node.js/PHP) untuk menyimpan transaksi dan memverifikasi callback/notifikasi dari payment gateway secara aman — tidak disarankan menyimpan kredensial API langsung di kode sisi klien (JavaScript browser).

---

## 8. Rencana SEO, Keamanan, dan Pemeliharaan

### SEO (Search Engine Optimization)
- Gunakan `<title>` dan `meta description` unik per halaman (beranda, kategori, produk)
- Tambahkan atribut `alt` yang deskriptif pada semua gambar produk (sudah diterapkan sebagian)
- Struktur URL/produk yang ramah SEO jika dikembangkan ke halaman detail produk per item
- Optimasi kecepatan halaman (kompresi gambar, minifikasi CSS/JS)
- Daftarkan sitemap.xml ke Google Search Console setelah domain resmi aktif
- Konten blog ringan (tips gaya, cara padu padan aksesoris) untuk menambah kata kunci organik

### Keamanan
- **Saat ini:** login admin bersifat sederhana (client-side) dan hanya cocok untuk keperluan demo/tugas
- **Rencana peningkatan keamanan:**
  - Implementasi backend dengan autentikasi berbasis server (hashing password, session token)
  - Validasi input di sisi server untuk mencegah manipulasi harga/stok dari luar
  - HTTPS wajib untuk seluruh transaksi dan halaman checkout
  - Pembatasan akses halaman admin (misal IP whitelist atau autentikasi dua langkah) saat go-live
  - Backup data stok/transaksi secara berkala

### Pemeliharaan (Maintenance)
- Pembaruan katalog & stok rutin melalui panel admin
- Pengecekan tautan gambar produk agar tidak *broken*
- Monitoring performa website (uptime, waktu muat) secara berkala
- Pembaruan konten musiman mengikuti tren pasar (Y2K, vintage, dsb.)

---

## 9. Rencana Penggunaan Data Analytics untuk Pengambilan Keputusan

### Data yang Dapat Dikumpulkan
- Produk paling sering ditambahkan ke keranjang vs. paling sering dibeli
- Kategori dengan konversi tertinggi/terendah
- Rata-rata nilai keranjang (Average Order Value)
- Produk dengan tingkat *stock-out* (kehabisan stok) tercepat
- Kata kunci yang paling sering dicari di kolom pencarian

### Pemanfaatan untuk Keputusan Bisnis
| Data | Keputusan yang Diambil |
|---|---|
| Produk sering dicari tapi stok habis | Prioritas restock/produksi ulang |
| Kategori dengan konversi rendah | Evaluasi harga, deskripsi, atau foto produk |
| AOV rendah | Rancang bundling/diskon untuk menaikkan nilai keranjang |
| Produk *slow-moving* | Pertimbangkan diskon *clearance* atau hentikan produksi |
| Pola pencarian pelanggan | Sesuaikan strategi konten & SEO dengan kata kunci populer |

### Rencana Implementasi Teknis
- Tahap awal: gunakan Google Analytics / Meta Pixel untuk data traffic & perilaku pengunjung
- Tahap lanjutan: bangun dashboard internal sederhana yang menarik data dari sistem stok & transaksi (setelah backend tersedia) untuk laporan penjualan mingguan/bulanan
- Data historis stok (yang sudah dicatat lewat panel admin) dapat dianalisis untuk memprediksi kebutuhan restock musiman

---

## Lampiran: Struktur File Proyek
```
├── index.html      → Halaman utama toko (katalog, kategori, pencarian)
├── cart.html        → Halaman keranjang & proses checkout
├── admin.html        → Panel admin (login & manajemen stok)
├── script.js       → Logika keranjang, stok, dan checkout
└── README.md       → Dokumen Business Overview (dokumen ini)
```

---

**Disusun oleh:** Puji — Administrasi Bisnis 3
**Untuk:** Uji Jewelry Store
