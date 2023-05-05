// const btnNavEl = document.querySelector(".btn-mobile-nav");
// const headerEl = document.querySelector(".header");

// btnNavEl.addEventListener("click", function () {
//   headerEl.classList.toggle("nav-open");
// });

///////////////////////////////////////////////////////////
const menu = document.querySelector(".btn-mobile-nav");

menu.addEventListener("click", function () {
  menu.parentElement.classList.toggle("open");
  document.body.classList.toggle("nav-open");
});
