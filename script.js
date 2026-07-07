<script>
  let jumlahBarang = 0;
  let keranjang = [];

  function tambahKeKeranjang(namaProduk, event) {
    if (event) event.preventDefault();

    jumlahBarang++;
    keranjang.push(namaProduk);

    document.getElementById('cart-count').innerText = jumlahBarang;
    alert(namaProduk + " telah ditambahkan ke keranjang!");
  }

  function checkoutAlert(event) {
    event.preventDefault();

    if (jumlahBarang > 0) {
      alert(
        "Anda memiliki " +
        jumlahBarang +
        " produk di keranjang:\n- " +
        keranjang.join("\n- ")
      );
    } else {
      alert("Keranjang Anda masih kosong!");
    }
  }
</script>
