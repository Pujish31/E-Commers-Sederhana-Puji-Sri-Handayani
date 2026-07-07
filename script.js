document.addEventListener("DOMContentLoaded", function () {
  const cartCount = document.getElementById("cart-count");
  const products = document.querySelectorAll(".product-card");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    cartCount.innerText = cart.length;
  }

  window.tambahKeKeranjang = function (namaProduk, harga, gambar, kategori, event) {
    if (event) event.preventDefault();

    const produk = {
      nama: namaProduk,
      harga: harga,
      gambar: gambar,
      kategori: kategori
    };

    cart.push(produk);
    saveCart();
    alert(namaProduk + " telah ditambahkan ke keranjang!");
  };

  window.checkoutAlert = function (event) {
    event.preventDefault();
    window.location.href = "cart.html";
  };

  window.filterKategori = function (kategori) {
    products.forEach(function (product) {
      const cocok = kategori === "all" || product.dataset.category === kategori;
      product.style.display = cocok ? "block" : "none";
    });
  };

  saveCart();
});
