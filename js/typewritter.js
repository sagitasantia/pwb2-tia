// JavaScript untuk efek mengetik
const textArray = ["I'm Sagita Santia", "Welcome to my Portfolio"];
let textIndex = 0;
let charIndex = 0;
const speed = 100; // Kecepatan pengetikan

function type() {
    if (charIndex < textArray[textIndex].length) {
        const typedText = textArray[textIndex].substring(0, charIndex + 1);
        document.getElementById("typewriter").textContent = typedText;
        charIndex++;
        setTimeout(type, speed);
    } else {
        setTimeout(erase, speed + 2000); // Waktu tunggu sebelum menghapus teks
    }
}

function erase() {
    if (charIndex > 0) {
        const typedText = textArray[textIndex].substring(0, charIndex - 1);
        document.getElementById("typewriter").textContent = typedText;
        charIndex--;
        setTimeout(erase, speed - 50); // Kecepatan penghapusan
    } else {
        textIndex++;
        if (textIndex >= textArray.length) textIndex = 0;
        setTimeout(type, speed + 500); // Waktu tunggu sebelum mengetik kembali
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, 1000); // Waktu tunggu sebelum memulai mengetik
});
