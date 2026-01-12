// FAQ Toggle Function
function initFAQ() {
  const faqBoxes = document.querySelectorAll(".product_faq-box");

  faqBoxes.forEach((box) => {
    const thumb = box.querySelector(".product_faq-thumb");
    const content = box.querySelector(".product_faq-content");
    const arrow = box.querySelector("svg");

    // Add rotation transition to arrow
    arrow.style.transition = "transform 0.3s ease";

    // Add cursor pointer to indicate clickable
    thumb.style.cursor = "pointer";

    // Click event
    thumb.addEventListener("click", () => {
      const isOpen = box.classList.contains("active");

      if (isOpen) {
        // Close
        content.style.maxHeight = "0";
        arrow.style.transform = "rotate(0deg)";
        box.classList.remove("active");
      } else {
        // Open
        content.style.maxHeight = content.scrollHeight + "px";
        arrow.style.transform = "rotate(180deg)";
        box.classList.add("active");
      }
    });
  });
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initFAQ);
} else {
  initFAQ();
}
