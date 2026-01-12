const pressLogos = [
  "//trysculptique.com/cdn/shop/files/layer1_500x.png?v=1752348678",
  "//trysculptique.com/cdn/shop/files/Grazia-Logo_1_500x.png?v=1752348678",
  "//trysculptique.com/cdn/shop/files/layer1_500x.png?v=1752348678",
  "//trysculptique.com/cdn/shop/files/WH_Logo_500x.png?v=1752348678",
];

const logosContainer = document.getElementById("logos_wrap");

if (logosContainer) {
  // Repeat logos 6 times
  const repeatedLogos = Array(6).fill(pressLogos).flat();

  logosContainer.innerHTML = repeatedLogos
    .map(
      (logo) => `
      <img
        src="${logo}"
        alt="logo"
        class="press_logo"
        width="auto"
        height="auto"
      />
    `
    )
    .join("");
}

const productWhyBloating = [
  {
    img: "//trysculptique.com/cdn/shop/files/Untitled_design_3.png?v=1760689800",
    text: "Your stomach is flat in the morning, but by evening you look six months pregnant.",
  },
  {
    img: "//trysculptique.com/cdn/shop/files/Untitled_design_3_1.png?v=1760689799",
    text: 'Your ankles disappear into "kankles" by the end of the day.',
  },
  {
    img: "//trysculptique.com/cdn/shop/files/Untitled_design_4.png?v=1760689801",
    text: "That dimpled, cottage cheese texture on your thighs won't go away no matter what you try.",
  },
  {
    img: "//trysculptique.com/cdn/shop/files/Untitled_design_4_1.png?v=1760689799",
    text: "You feel foggy and exhausted even after a full night's sleep.",
  },
  {
    img: "//trysculptique.com/cdn/shop/files/Untitled_design_3_2.png?v=1760689799",
    text: "You wake up stiff and achy, like your body aged overnight.",
  },
];

const grid = document.getElementById("product_why-bloating_grid");

if (grid) {
  grid.innerHTML = productWhyBloating
    .map(
      (item) => `
      <div class="product_why-bloating-cell">
        <div>
          <img  src="${item.img}" />
        </div>
        <div class="product_why-bloat-cell-inn">
          <div>
            <p>${item.text}</p>
          </div>
        </div>
      </div>
    `
    )
    .join("");
}
