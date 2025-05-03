// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector(".content");
  
  // Add fade-in effect
  content.style.opacity = 0;
  content.style.transition = "opacity 1.5s ease-in-out";
  
  setTimeout(() => {
    content.style.opacity = 1;
  }, 300); // slight delay for better effect

  console.log("Sharvesh Portfolio Loaded with Animation");
});

