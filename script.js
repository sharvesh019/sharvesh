// Typewriter effect for title
const text = "Biomedical Engineer";
const quote = '"Code is creativity made <span>visible</span>."';
let i = 0;
const speed = 100;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typed-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
window.onload = () => {
  typeWriter();
  document.getElementById("quote-text").innerHTML = quote;
};

