function tambahKeKeranjang(button) {
    const buku = {
        judul: button.getAttribute("data-judul"),
        penulis: button.getAttribute("data-penulis"),
        tahun: button.getAttribute("data-tahun"),
        gambar: button.getAttribute("data-gambar")
    };

    let keranjang = JSON.parse(localStorage.getItem("keranjangBuku")) || [];
    keranjang.push(buku);
    localStorage.setItem("keranjangBuku", JSON.stringify(keranjang));

    alert(`Buku "${buku.judul}" ditambahkan ke keranjang!`);
}
