// Pi Flex
const pliFlexData = {
  topText: {
    paragraphs: [
      `Your lymphatic system is your body's internal cleaning crew—a network of vessels that processes <strong>3-4 liters of cellular waste and excess fluid every single day.</strong>`,
      `When it's working properly, you don't even know it exists.`,
    ],
    list: [
      "Waste gets drained away",
      "Fluid stays balanced.",
      "Your body feels light and energized.",
    ],
  },
  pinkText: `But after age 35, declining estrogen hijacks this system's ability to function.`,
  bottomText: {
    list: [
      "Vessel pumping weakens.",
      "One-way valves fail.",
      "Protein clogs form.",
      "Vessel walls become leaky.",
    ],
    paragraph:
      "Instead of processing and removing waste, it backs up in your tissues.",
  },
  images: {
    desktop:
      "//trysculptique.com/cdn/shop/files/Frame_1484580366_1.png?v=1760701546",
    mobile:
      "//trysculptique.com/cdn/shop/files/Frame_1484580366_1.png?v=1760701546",
  },
};

const pliFlex = document.getElementById("pli_flex");

if (pliFlex) {
  pliFlex.innerHTML = `
    <div>
      <div class="pli_top-text">
        ${pliFlexData.topText.paragraphs.map((p) => `<p>${p}</p>`).join("")}
        <ul>
          ${pliFlexData.topText.list.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>
      <div class="pli_pink-text">
        <p>${pliFlexData.pinkText}</p>
      </div>
      <div class="pli_bottom-text">
        <ul>
          ${pliFlexData.bottomText.list
            .map((item) => `<li>${item}</li>`)
            .join("")}
        </ul>
        <p>${pliFlexData.bottomText.paragraph}</p>
      </div>
    </div>
    <div>
      <img
        loading="lazy"
        class="Desktop_only"
        src="${pliFlexData.images.desktop}"
      />
      <img
        loading="lazy"
        class="Mobile_only"
        src="${pliFlexData.images.mobile}"
      />
    </div>
  `;
}

//Pli reversed
const pliReversedData = {
  topText: [
    `<strong>And it accumulates. Day after day. Week after week.</strong>`,
    `That gallon of fluid your body should be draining every 24 hours? It's pooling in your stomach, your legs, your face—anywhere gravity and tissue structure allow it to settle.`,
  ],
  pinkText: {
    paragraph: `The metabolic waste your cells produce overnight? It's still sitting there at noon. At dinner. While you're trying to fall asleep.`,
    list: [
      `That's why you're bloated.`,
      `That's why your ankles swell.`,
      `That's why you see cellulite.`,
      `That's why you feel exhausted and foggy.`,
    ],
  },
  bottomText: [
    `<strong>Your cells are literally sitting in their own waste—and your body can't flush it out.</strong>`,
    `The longer this goes on, the worse it gets. More congestion. More inflammation. More pressure on an already compromised system.`,
  ],
  images: {
    desktop:
      "//trysculptique.com/cdn/shop/files/ChatGPT_Image_Oct_10_2025_at_03_26_38_PM_2.png?v=1760702096",
    mobile:
      "//trysculptique.com/cdn/shop/files/ChatGPT_Image_Oct_10_2025_at_03_26_38_PM_2.png?v=1760702096",
  },
};

const pliFlexReversed = document.getElementById("pli_flex_reversed");

if (pliFlexReversed) {
  pliFlexReversed.innerHTML = `
    <div>
      <div class="pli_top-text">
        ${pliReversedData.topText.map((p) => `<p>${p}</p>`).join("")}
      </div>
      <div class="pli_pink-text">
        <p>${pliReversedData.pinkText.paragraph}</p>
        <ul>
          ${pliReversedData.pinkText.list
            .map((item) => `<li>${item}</li>`)
            .join("")}
        </ul>
      </div>
      <div class="pli_bottom-text">
        ${pliReversedData.bottomText.map((p) => `<p>${p}</p>`).join("")}
      </div>
    </div>

    <div>
      <img
        loading="lazy"
        class="Desktop_only"
        src="${pliReversedData.images.desktop}"
      />
      <img
        loading="lazy"
        class="Mobile_only"
        src="${pliReversedData.images.mobile}"
      />
    </div>
  `;
}
