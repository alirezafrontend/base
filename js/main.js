window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  const mood = document.getElementById("mood");
  const btn1 = document.getElementById("btn1");
  if (window.scrollY > 10) {
    header.style.backgroundColor = "#fff";
    header.style.boxShadow = "0 2px 3px 1px rgb(0,0,0,0.05)";
    mood.style.fill = "#79808a";
    btn1.style.color = "#79808a";
  } else {
    header.style.backgroundColor = "transparent";
    header.style.boxShadow = "0 0 0 0 rgb(0,0,0,0)";
    mood.style.fill = "#fff";
    btn1.style.color = "#fff";
  }
});
