"use strict";

const headerEl = document.querySelector(".header");

window.addEventListener("scroll", function () {
  let yAxis = window.scrollY;
  if (yAxis >= 70) {
    headerEl.classList.add("sticky-nav");
  } else {
    headerEl.classList.remove("sticky-nav");
  }
});
