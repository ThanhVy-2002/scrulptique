const CHECK_ICON =
  "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/check-mark_17013456_2.png?v=1760698419";

const ARROW_ICON =
  "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/weui_arrow-outlined.png?v=1760698626";

const productLymphIngredient = [
  {
    title: "Reactivate Lymphatic Pumps",
    img: "//trysculptique.com/cdn/shop/files/Frame_1484580382.png?v=1760698909",
    name: "Cleavers Extract (100mg)",
    content: `
      <p>Restores rhythmic vessel contractions that move lymph through your system. Contains iridoids that "wake up" muscle cells in vessel walls. 2024 study showed enhanced immune cell activity for better waste clearance.</p>
      <p>[Study: Enhanced NK cell activity in immunosuppressed models]</p>
    `,
  },
  {
    title: "Flush Excess Fluid",
    img: "//trysculptique.com/cdn/shop/files/Frame_1484580382_1.png?v=1760939908",
    name: "Dandelion Extract (250mg)",
    content: `
      <p>Proven gentle diuretic that increases fluid excretion without harsh side effects. Human trial showed statistically significant increase in urination frequency (p&lt;0.05) and excretion ratio (p&lt;0.001).</p>
      <p>[Study: First human pilot study on diuretic effects]</p>
    `,
  },
  {
    title: "Break Down Protein Clogs",
    img: "//trysculptique.com/cdn/shop/files/image_2.png?v=1760939909",
    name: "Bromelain Powder (100mg)",
    content: `
      <p>Proteolytic enzyme that clears blockages preventing drainage. Breaks down fibrin proteins creating "sludge" in vessels. 2024 RCT showed significantly greater reductions in swelling than placebo.</p>
      <p>[Study: As effective as prescription NSAIDs for inflammation]</p>
    `,
  },
  {
    title: "Strengthen Vessel Walls",
    img: "//trysculptique.com/cdn/shop/files/image_3.png?v=1760939909",
    name: "Rutin (100mg)",
    content: `
      <p>Reduces vessel permeability so fluid doesn't leak back into tissues. Clinical trials showed average 4.2 cm reduction in limb circumference over 6 months in lymphedema patients.</p>
      <p>[Study: Systematic review of 1,643 participants]</p>
    `,
  },
  {
    title: "Reduce Inflammation",
    img: "//trysculptique.com/cdn/shop/files/Frame_1484580382_2.png?v=1760939909",
    name: "Burdock Root Powder (200mg)",
    content: `
      <p>Breaks the inflammation-congestion cycle. RCT showed significantly decreased inflammatory markers IL-6 and C-reactive protein (p&lt;0.001). Also supports hormonal balance.</p>
      <p>[Study: 42-day trial in osteoarthritis patients]</p>
    `,
  },
  {
    title: "Boost Immune Clearance",
    img: "//trysculptique.com/cdn/shop/files/image_4.png?v=1760939909",
    name: "Echinacea Purpurea Extract (500mg)",
    content: `
      <p>Enhances lymphocyte activity for better waste removal. Meta-analysis of 30 trials with 5,600+ participants showed 40% reduction in recurrent infections.</p>
      <p>[Study: Increased NK cell cytotoxic activity]</p>
    `,
  },
  {
    title: "Support Metabolism",
    img: "//trysculptique.com/cdn/shop/files/Frame_1484580382_3.png?v=1760939909",
    name: "Kelp Extract (30mg)",
    content: `
      <p>Provides iodine for thyroid function and healthy metabolic rate. Sluggish thyroid = sluggish lymphatic drainage. Contains fucoxanthin shown to reduce body fat in human trials.</p>
      <p>[Study: Dose-dependent increase in TSH levels]</p>
    `,
  },
  {
    title: "Antioxidant Protection",
    img: "//trysculptique.com/cdn/shop/files/Frame_1484580382_4.png?v=1760939910",
    name: "Lemon Powder (50mg)",
    content: `
      <p>Protects vessels from oxidative damage. RCT showed 145% improvement in vascular function (p&lt;0.001). Supports circulation and metabolic health.</p>
      <p>[Study: Triple-masked trial in 90 participants]</p>
    `,
  },
];

const productLymphIngrTable = document.getElementById(
  "product_lymph_ingr_table"
);

if (productLymphIngrTable) {
  productLymphIngrTable.innerHTML = productLymphIngredient
    .map(
      (item) => `
      <div class="product-lymph-ingredient">
        <p class="product_lymph-ingr-subtitle">
          <span><img src="${CHECK_ICON}" /></span>
          <span>${item.title}</span>
        </p>

        <img class="Desktop_only product_lymph-main-img" loading="lazy" src="${item.img}" />

        <div class="product_lymph-ingr-thumb">
          <div class="Mobile_only">
            <img class="product_lymph-main-img" loading="lazy" src="${item.img}" />
          </div>
          <div>
            <h5>${item.name}</h5>
          </div>
          <div class="arrow-icon">
            <img src="${ARROW_ICON}" />
          </div>
        </div>

        <div class="product_lymph-ingr-content">
          ${item.content}
        </div>
      </div>
    `
    )
    .join("");

  // Add click event to each arrow
  const arrows = productLymphIngrTable.querySelectorAll(".arrow-icon img");
  arrows.forEach((arrow) => {
    arrow.addEventListener("click", (e) => {
      const ingredient = e.target.closest(".product-lymph-ingredient");
      const content = ingredient.querySelector(".product_lymph-ingr-content");

      // Toggle smooth expand/collapse
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
}
