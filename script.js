function sendMessageToWhatsapp() {
    const urlToWhatsapp = `https://wa.me/62?text=NAMA: ${user.value} KOMENTAR: ${komen.value}`;
    window.open(urlToWhatsapp, "_blank");
}