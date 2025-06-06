function CheckoutKeranjang() {
    const keranjang = JSON.parse(localStorage.getItem("keranjangBuku")) || [];

    if (keranjang.length === 0) {
        alert("Keranjang masih kosong.");
        return;
    }

    const riwayat = JSON.parse(localStorage.getItem("riwayatPeminjaman")) || [];

    const waktuSekarang = new Date();
    const waktuFormatted = waktuSekarang.toLocaleString("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    const checkoutBaru = {
        waktu: waktuFormatted,
        daftarBuku: keranjang
    };

    riwayat.push(checkoutBaru);
    localStorage.setItem("riwayatPeminjaman", JSON.stringify(riwayat));
    localStorage.removeItem("keranjangBuku");

    alert("Buku berhasil di checkout...");
    location.reload();

}
