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
const activityGif = document.querySelectorAll(".card");

person.forEach((groom) => {
  groom.addEventListener("click", function () {
    groom.nextElementSibling.classList.toggle("hide");
    groom.lastElementChild.classList.toggle("rotate");
  });
});

activityGif.forEach((card) => {
  let cardNumber = card.getAttribute("data-card");
  card.addEventListener("mouseover", function () {
    if (cardNumber == 1) {
      card.firstElementChild.src = "images/activities/i-am.gif";
      console.log(card.firstElementChild);
    } else if (cardNumber == 2) {
      card.firstElementChild.src = "images/activities/Jason -Mamoa.gif";
    } else if (cardNumber == 3) {
      card.firstElementChild.src =
        "images/activities/victoria-pedretti-love.gif";
    } else if (cardNumber == 4) {
      card.firstElementChild.src = "images/activities/family-guy.gif";
    } else if (cardNumber == 5) {
      card.firstElementChild.src = "images/rules/threat.gif";
    } else if (cardNumber == 6) {
      card.firstElementChild.src = "images/rules/box-of-shame.gif";
    } else if (cardNumber == 7) {
      card.firstElementChild.src = "images/rules/financial.gif";
    }
  });

  card.addEventListener("mouseout", function () {
    if (cardNumber == 1) {
      card.firstElementChild.src = "images/activities/D&Bs Nashville.jpg";
      console.log(card.firstElementChild);
    } else if (cardNumber == 2) {
      card.firstElementChild.src = "images/activities/Axe Throwing.webp";
    } else if (cardNumber == 3) {
      card.firstElementChild.src = "images/activities/powerpoint.jpg";
    } else if (cardNumber == 4) {
      card.firstElementChild.src = "images/activities/sports-betting.jpg";
    } else if (cardNumber == 5) {
      card.firstElementChild.src = "images/rules/pc.png";
    } else if (cardNumber == 6) {
      card.firstElementChild.src = "images/rules/control-liqueur.webp";
    } else if (cardNumber == 7) {
      card.firstElementChild.src = "images/rules/patrick.jpg";
    }
  });
});

// src="images/rules/threat.gif"
// src="images/rules/financial.gif"
