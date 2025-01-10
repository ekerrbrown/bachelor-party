"use strict";

const fade = document.getElementsByClassName("intro");
const sections = document.querySelectorAll(".responsive-container");
const neonAnimation = document.getElementById("#heading-text");

document.addEventListener("DOMContentLoaded", function () {
  // Set a timeout for 3 seconds
  setTimeout(function () {
    // Hide the video container
    document.getElementById("intro-hide").classList.add("hidden");

    // Show the main content

    document.getElementById("main-content").classList.remove("hidden");

    //get the heading bright
    document.getElementById("#heading-text").classList.add("header-heading");
  }, 3000); // 3500 milliseconds = 3 seconds
});

const description = document.querySelectorAll(".flex-row-people");
const person = document.querySelectorAll(".btn-groom");
const guitar = document.querySelectorAll("guitar-person");

person.forEach((groom) => {
  groom.addEventListener("click", function () {
    groom.nextElementSibling.classList.toggle("hide");
    groom.lastElementChild.classList.toggle("rotate");
  });
});
