// change body background

const doc = document.querySelector("body");
const btn1 = document.querySelector(".btn-primary");
const btn2 = document.querySelector(".btn-danger");
const h1 = document.querySelector(".col3 h1");

btn1.addEventListener("click", function () {
  doc.style.backgroundColor = "black";
  doc.style.color = "white";
  h1.style.color = "white";

  btn2.addEventListener("click", function () {
    doc.style.backgroundColor = "#3333";
    doc.style.color = "black";
  });
});
