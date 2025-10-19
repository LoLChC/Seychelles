// Scroll animation for fade-ins
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".section");
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Loop floating motion for cards and images
function loopFloat() {
  const floating = document.querySelectorAll(".float, .float-delay, .gallery img");
  floating.forEach((el, i) => {
    const offset = Math.sin(Date.now() / (1000 + i * 200)) * 5;
    el.style.transform = `translateY(${offset}px)`;
  });
  requestAnimationFrame(loopFloat);
}
loopFloat();
