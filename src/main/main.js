fetch("./main/main.html")
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("site-main").innerHTML = html;
  })
  .catch((err) => console.error("Main content load failed:", err));
