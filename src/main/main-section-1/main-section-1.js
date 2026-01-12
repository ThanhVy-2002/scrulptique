// Main product
const mainProductFeatures = [
  {
    img: "//trysculptique.com/cdn/shop/files/population_12285628_1_e864791e-7a6d-4f08-9aea-3aeffba37cc7.png?v=1758713413",
    text: "Join over 93 Thousand who say - it WORKS!",
  },
  {
    img: "//trysculptique.com/cdn/shop/files/blood_13858030_1.png?v=1752064910",
    text: "Restores your body’s natural 24-hour lymphatic cycle",
  },
  {
    img: "//trysculptique.com/cdn/shop/files/thigh_1431039_1_a75a1917-7cc8-40dc-923b-d09cece1d6e9.png?v=1758713413",
    text: "Helps reduce fluid retention and the appearance of puffiness and bloating",
  },
  {
    img: "//trysculptique.com/cdn/shop/files/smile_3318262_1_1da99ae9-5c63-4339-af75-d35f89cd1cbc.png?v=1758713414",
    text: "Helps fall asleep faster, stay asleep longer and wake up energized",
  },
  {
    img: "//trysculptique.com/cdn/shop/files/blood_13858030_2_78da9178-9f3f-491e-a5f8-b4d69dd5b9cd.png?v=1758713414",
    text: "Eliminates joint stiffness, pain, morning creakiness and feel more grounded",
  },
  {
    img: "//trysculptique.com/cdn/shop/files/ecology_18588873_1_dad420da-2490-4e30-828a-28b366974307.png?v=1758713413",
    text: "Boosts energy, mental clarity and emotional balance",
  },
];

const container = document.getElementById("main_product-features");

mainProductFeatures.forEach((feature) => {
  const line = document.createElement("div");
  line.className = "main_product-feature-line";

  line.innerHTML = `
    <div>
      <img loading="lazy" src="${feature.img}" />
    </div>
    <div>
      <p>${feature.text}</p>
    </div>
  `;

  container.appendChild(line);
});

// Product tab
const productTabs = [
  {
    title: "Ingredients proven by science",
    content: `
      <p><strong>Sculptique Ingredients:</strong></p>
      <ul>
        <li><strong>Echinacea purpurea Extract</strong> – Known for its anti-inflammatory properties, it may support skin health.</li>
        <li><strong>Dandelion Extract</strong> – Traditionally used as a diuretic, it may help reduce water retention.</li>
        <li><strong>Burdock Powder</strong> – Contains antioxidants that may promote skin clarity.</li>
        <li><strong>Cleavers Extract</strong> – Believed to support lymphatic drainage and detoxification.</li>
        <li><strong>Rutin</strong> – A flavonoid that may strengthen blood vessels and improve circulation.</li>
        <li><strong>Bromelain Powder</strong> – An enzyme from pineapple that may reduce inflammation and support tissue repair.</li>
        <li><strong>Lemon Powder</strong> – Rich in vitamin C, it may aid in collagen production and skin rejuvenation.</li>
        <li><strong>Kelp Extract</strong> – A source of iodine and minerals that may support skin metabolism.</li>
      </ul>
      <p>These natural ingredients work together to reduce puffiness, bloating, fluid retention.</p>
    `,
  },
  {
    title: "How does it actually work?",
    content: `
      <p>Sculptique works by improving blood flow and supporting lymphatic drainage to reduce fluid buildup that causes puffiness, inflammation, and water retention. It also reduces inflammation and boosts collagen production to help skin become firmer and smoother.</p>
    `,
  },
  {
    title: "Shipping and returns",
    content: `
      <p>All of Sculptique orders get FREE shipping straight from our USA warehouse. Orders are usually shipped out within 1-2 working days, and you should receive the order within 3-7 working days for domestic USA orders, and within 10 working days for International orders.</p>
      <p>We also offer a 60-day money back guarantee - if you are unsatisfied with our product, you can take advantage of our guarantee and ship back the product to us to get your return within 60 days of receiving your order.</p>
    `,
  },
];

const EXPAND_ICON =
  "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Button_To_Expand_1_8a6027c0-281a-4c6b-8881-60673c7255ec.png?v=1758716844";

const productTabContainer = document.getElementById("product_tab_block_out");

if (productTabContainer) {
  productTabContainer.innerHTML = productTabs
    .map(
      (tab) => `
      <div class="product_tab-block">
        <div class="product_tab-thumb">
          <p>${tab.title}</p>
          <span>
            <img src="${EXPAND_ICON}" />
          </span>
        </div>
        <div class="product_tab-content">
          ${tab.content}
        </div>
      </div>
    `
    )
    .join("");

  // Add click event to toggle content smoothly
  const tabThumbs = productTabContainer.querySelectorAll(".product_tab-thumb");
  tabThumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      const content = thumb.nextElementSibling;
      const block = thumb.closest(".product_tab-block");

      // Toggle smooth expand/collapse
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        block.classList.remove("active");
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        block.classList.add("active");
      }
    });
  });
}

// Add click event listeners to all product selector blocks
document.querySelectorAll(".product-selector_block").forEach((block) => {
  block.addEventListener("click", function () {
    const container = this.closest(".product-selector_outer");

    container.querySelectorAll(".product-selector_block").forEach((b) => {
      b.classList.remove("active");
    });

    this.classList.add("active");
  });
});
