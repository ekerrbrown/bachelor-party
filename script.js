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
