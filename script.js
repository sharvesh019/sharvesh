// Typewriter effect
const text = "Biomedical Engineer";
let i = 0;
const speed = 100;
const typedText = document.getElementById("typed-text");

function typeWriter() {
  if (i < text.length) {
    typedText.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
window.onload = typeWriter;
