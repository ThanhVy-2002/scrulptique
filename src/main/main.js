const sections = [
  "main-section-1",
  "main-section-2",
  "main-section-3",
  "main-section-4",
  "main-section-5",
  "main-section-6",
  "main-section-7",
  "main-section-8",
];
const mainContainer = document.getElementById("site-main");

// Create containers for each section
sections.forEach((sectionName) => {
  const div = document.createElement("div");
  div.id = sectionName;
  mainContainer.appendChild(div);
});

// Load each section
sections.forEach((sectionName) => {
  fetch(`/src/main/${sectionName}/${sectionName}.html`)
    .then((res) => res.text())
    .then((html) => {
      document.getElementById(sectionName).innerHTML = html;

      // Load corresponding JS
      const script = document.createElement("script");
      script.src = `/src/main/${sectionName}/${sectionName}.js`;
      document.body.appendChild(script);
    })
    .catch((err) => console.error(`${sectionName} load failed:`, err));
});
