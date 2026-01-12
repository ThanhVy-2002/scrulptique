const productIconsGridData = [
  {
    img: "//trysculptique.com/cdn/shop/files/ship-min.png?v=1758713222",
    title: "Free Shipping from USA",
    description: "On all orders",
  },
  {
    img: "//trysculptique.com/cdn/shop/files/support-min.png?v=1758713216",
    title: "Naturally Supports Your Body",
    description: "Promotes healthy immune cell functions",
  },
  {
    img: "//trysculptique.com/cdn/shop/files/natural-min.png?v=1758713216",
    title: "100% Natural Ingredients",
    description: "8 active, natural ingredients",
  },
  {
    img: "//trysculptique.com/cdn/shop/files/60-min.png?v=1758713216",
    title: "Try it Risk Free for 60 Days",
    description: "60-day money-back guarantee",
  },
];

function renderProductIconsGrid() {
  const grid = document.getElementById("product_icons_grid");

  if (!grid) return;

  productIconsGridData.forEach((item) => {
    const div = document.createElement("div");

    div.innerHTML = `
      <img src="${item.img}" alt="${item.title}" />
      <p class="h4title">${item.title}</p>
      <p>${item.description}</p>
    `;

    grid.appendChild(div);
  });
}

// Run when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderProductIconsGrid);
} else {
  renderProductIconsGrid();
}

// Play video
document.addEventListener("click", (e) => {
  const wrapper = e.target.closest(".product_ugc-video");
  if (!wrapper) return;

  const video = wrapper.querySelector("video");
  const icon = wrapper.querySelector(".product_ugc-play");

  document.querySelectorAll(".product_ugc-video video").forEach((v) => {
    if (v !== video) {
      v.pause();
      v.closest(".product_ugc-video")
        ?.querySelector(".product_ugc-play")
        ?.classList.remove("hidden");
    }
  });

  if (video.paused) {
    video.play();
    icon.classList.add("hidden");
  } else {
    video.pause();
    icon.classList.remove("hidden");
  }
});
