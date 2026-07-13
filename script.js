let cart = JSON.parse(localStorage.getItem("cart")) || [];

function formatRupiah(angka) {
  return "Rp " + Number(angka).toLocaleString("id-ID");
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
    const totalQty = cart.reduce((total, item) => total + item.qty, 0);
    cartCount.innerText = totalQty;
  }
}

window.tambahKeKeranjang = function (namaProduk, harga, gambar, kategori, event) {
  if (event) event.preventDefault();

  const itemAda = cart.find(item => item.nama === namaProduk);
  if (itemAda) {
    itemAda.qty++;
  } else {
    cart.push({
      nama: namaProduk,
      harga: harga,
      gambar: gambar || "",
      kategori: kategori || "",
      qty: 1
    });
  }

  saveCart();
  tampilkanNotifikasi(namaProduk + " telah ditambahkan ke keranjang!");
};

function tampilkanNotifikasi(pesan) {
  let notif = document.createElement("div");
  notif.innerText = pesan;
  notif.style.cssText = `
    position: fixed; bottom: 20px; right: 20px;
    background: #7a3b53; color: #fff; padding: 12px 20px;
    border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    z-index: 2000; font-size: 14px; opacity: 0; transition: opacity .3s;
  `;
  document.body.appendChild(notif);
  setTimeout(() => (notif.style.opacity = "1"), 10);
  setTimeout(() => {
    notif.style.opacity = "0";
    setTimeout(() => notif.remove(), 300);
  }, 2000);
}

window.checkoutAlert = function (event) {
  event.preventDefault();
  window.location.href = "cart.html";
};

window.filterKategori = function (kategori) {
  const products = document.querySelectorAll(".product-card");
  products.forEach(function (product) {
    const cocok = kategori === "all" || kategori === "Semua" || product.dataset.category === kategori;
    product.style.display = cocok ? "" : "none";
  });

  const produkSection = document.getElementById("produk");
  if (produkSection) produkSection.scrollIntoView({ behavior: "smooth" });
};

function ubahJumlah(index, perubahan) {
  cart[index].qty += perubahan;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
  renderCartPage();
}

function hapusItem(index) {
  cart.splice(index, 1);
  saveCart();
  renderCartPage();
}

function hitungTotalHarga() {
  return cart.reduce((total, item) => total + item.harga * item.qty, 0);
}

function renderCartPage() {
  const container = document.getElementById("cart-page-items");
  if (!container) return; // bukan halaman cart.html, skip

  const totalEl = document.getElementById("cart-page-total");
  const btnCheckout = document.getElementById("btn-checkout-page");

  if (cart.length === 0) {
    container.innerHTML = '<p style="text-align:center; color:#999; padding:40px 0;">Keranjang masih kosong.</p>';
    if (btnCheckout) btnCheckout.disabled = true;
  } else {
    container.innerHTML = cart
      .map(
        (item, index) => `
      <div class="cart-page-item">
        <img src="${item.gambar}" alt="${item.nama}" onerror="this.style.display='none'">
        <div class="cart-page-info">
          <h3>${item.nama}</h3>
          <p class="cart-page-price">${formatRupiah(item.harga)}</p>
          <div class="qty-controls">
            <button onclick="ubahJumlah(${index}, -1)">-</button>
            <span>${item.qty}</span>
            <button onclick="ubahJumlah(${index}, 1)">+</button>
          </div>
        </div>
        <div class="cart-page-subtotal">
          <strong>${formatRupiah(item.harga * item.qty)}</strong>
          <button class="remove-item" onclick="hapusItem(${index})">Hapus</button>
        </div>
      </div>
    `
      )
      .join("");
    if (btnCheckout) btnCheckout.disabled = false;
  }

  if (totalEl) totalEl.innerText = formatRupiah(hitungTotalHarga());
}

function bukaFormCheckout() {
  if (cart.length === 0) return;
  document.getElementById("checkout-modal").classList.add("active");

  let ringkasan = cart
    .map(
      item =>
        `<div><span>${item.nama} x${item.qty}</span><span>${formatRupiah(item.harga * item.qty)}</span></div>`
    )
    .join("");
  ringkasan += `<div style="border-top:1px solid #ddd; margin-top:8px; padding-top:8px; font-weight:bold;">
      <span>Total</span><span>${formatRupiah(hitungTotalHarga())}</span>
    </div>`;
  document.getElementById("checkout-summary").innerHTML = ringkasan;
}

function tutupFormCheckout() {
  document.getElementById("checkout-modal").classList.remove("active");
}

function prosesCheckout(event) {
  event.preventDefault();

  const nama = document.getElementById("nama").value;
  const alamat = document.getElementById("alamat").value;
  const telepon = document.getElementById("telepon").value;
  const pembayaran = document.getElementById("pembayaran").value;
  const total = hitungTotalHarga();
  const noPesanan = "UJ-" + Math.floor(100000 + Math.random() * 900000);

  document.getElementById("checkout-modal-box").innerHTML = `
    <div class="success-box">
      <div class="checkmark">&#10004;</div>
      <h2>Pesanan Berhasil!</h2>
      <p>Terima kasih, <strong>${nama}</strong>.</p>
      <div class="modal-summary" style="text-align:left;">
        <div><span>No. Pesanan</span><span>${noPesanan}</span></div>
        <div><span>Alamat</span><span>${alamat}</span></div>
        <div><span>Telepon</span><span>${telepon}</span></div>
        <div><span>Pembayaran</span><span>${pembayaran}</span></div>
        <div style="border-top:1px solid #ddd; margin-top:8px; padding-top:8px; font-weight:bold;">
          <span>Total Bayar</span><span>${formatRupiah(total)}</span>
        </div>
      </div>
      <div class="modal-actions">
        <button class="btn-confirm" style="width:100%" onclick="selesaiBelanja()">Selesai</button>
      </div>
    </div>
  `;

  cart = [];
  saveCart();
}

function selesaiBelanja() {
  window.location.href = "index.html";
}
document.addEventListener("DOMContentLoaded", function () {
  updateCartCount();
  renderCartPage(); // hanya berjalan jika elemen cart.html ada di halaman ini
});
// ================== TAMBAHAN: FITUR STOK PRODUK ==================

// CSS tambahan untuk status stok habis (disuntik lewat JS, tidak mengubah file CSS asli)
(function tambahCSSStok() {
  const styleTambahan = document.createElement("style");
  styleTambahan.innerHTML = `
    .stock-info.habis { color: #c0392b; font-weight: bold; }
    .btn-add:disabled { background: #ccc; cursor: not-allowed; }
  `;
  document.head.appendChild(styleTambahan);
})();

function getStokData() {
  return JSON.parse(localStorage.getItem("stokData")) || {};
}

function saveStokData(data) {
  localStorage.setItem("stokData", JSON.stringify(data));
}

// Ambil stok awal dari teks "Stok: X" di setiap kartu produk (hanya sekali, kalau belum ada di localStorage)
function initStokDariHalaman() {
  const stokData = getStokData();
  let adaPerubahan = false;

  document.querySelectorAll(".product-card").forEach(card => {
    const judulEl = card.querySelector("h3");
    const stokEl = card.querySelector(".stock-info");
    if (!judulEl || !stokEl) return;

    const nama = judulEl.innerText.trim();
    if (!(nama in stokData)) {
      const angka = parseInt(stokEl.innerText.replace(/[^0-9]/g, ""), 10);
      stokData[nama] = isNaN(angka) ? 0 : angka;
      adaPerubahan = true;
    }
  });

  if (adaPerubahan) saveStokData(stokData);
  return stokData;
}

// Perbarui tampilan angka stok + tombol di halaman (index.html)
function perbaruiTampilanStok() {
  const stokData = getStokData();

  document.querySelectorAll(".product-card").forEach(card => {
    const judulEl = card.querySelector("h3");
    const stokEl = card.querySelector(".stock-info");
    const btnEl = card.querySelector(".btn-add");
    if (!judulEl || !stokEl) return;

    const nama = judulEl.innerText.trim();
    if (!(nama in stokData)) return;

    const stokSaatIni = stokData[nama];
    stokEl.innerText = "Stok: " + stokSaatIni;

    if (stokSaatIni <= 0) {
      stokEl.classList.remove("ada");
      stokEl.classList.add("habis");
      if (btnEl) {
        btnEl.disabled = true;
        btnEl.innerText = "Stok Habis";
      }
    } else {
      stokEl.classList.add("ada");
      stokEl.classList.remove("habis");
      if (btnEl) {
        btnEl.disabled = false;
        btnEl.innerText = "Tambah ke Keranjang";
      }
    }
  });
}

// Simpan referensi fungsi asli sebelum ditimpa (fungsi lama tetap dipakai di dalam)
const _tambahKeKeranjangAsli = window.tambahKeKeranjang;

window.tambahKeKeranjang = function (namaProduk, harga, gambar, kategori, event) {
  if (event) event.preventDefault();

  const stokData = getStokData();
  const stokTersedia = stokData[namaProduk];

  if (stokTersedia !== undefined && stokTersedia <= 0) {
    tampilkanNotifikasi("Maaf, stok " + namaProduk + " sudah habis!");
    return;
  }

  const itemDiKeranjang = cart.find(item => item.nama === namaProduk);
  const qtyDiKeranjang = itemDiKeranjang ? itemDiKeranjang.qty : 0;

  if (stokTersedia !== undefined && qtyDiKeranjang + 1 > stokTersedia) {
    tampilkanNotifikasi("Stok " + namaProduk + " tidak mencukupi!");
    return;
  }

  _tambahKeKeranjangAsli(namaProduk, harga, gambar, kategori, event);
};

// Simpan referensi fungsi checkout asli sebelum ditimpa
const _prosesCheckoutAsli = prosesCheckout;

prosesCheckout = function (event) {
  event.preventDefault();

  const stokData = getStokData();
  let stokCukup = true;
  let itemKurang = "";

  for (const item of cart) {
    const stokTersedia = stokData[item.nama];
    if (stokTersedia !== undefined && item.qty > stokTersedia) {
      stokCukup = false;
      itemKurang = item.nama;
      break;
    }
  }

  if (!stokCukup) {
    alert("Maaf, stok \"" + itemKurang + "\" tidak mencukupi untuk checkout. Silakan sesuaikan jumlah di keranjang.");
    return;
  }

  // Kurangi stok sesuai jumlah yang dibeli
  cart.forEach(item => {
    if (stokData[item.nama] !== undefined) {
      stokData[item.nama] -= item.qty;
      if (stokData[item.nama] < 0) stokData[item.nama] = 0;
    }
  });
  saveStokData(stokData);

  _prosesCheckoutAsli(event);
};

// Jalankan saat halaman dimuat (index.html maupun cart.html)
document.addEventListener("DOMContentLoaded", function () {
  initStokDariHalaman();
  perbaruiTampilanStok();
});
