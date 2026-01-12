fetch("./header/header.html")
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("site-header").innerHTML = html;
  })
  .catch((err) => console.error("Header load failed:", err));
