window.addEventListener("load", () => {
  // Select the elements
  const preloader = document.getElementById("preloader");
  const heroContent = document.querySelector(".hero-content");

  // Set the 2-second timer (1000 milliseconds)
  setTimeout(() => {
    // 1. Add the class to fade out the preloader
    preloader.classList.add("preloader-hidden");

    // 2. Add the class to fade in the hero content
    heroContent.classList.add("hero-animated");
  }, 1000); // <-- This is 2 seconds
});

// ... rest of your code// Get the elements from the DOM
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

// Add a click event listener to the toggle button
navToggle.addEventListener("click", () => {
  // Toggle the 'active' class on the nav-menu
  navMenu.classList.toggle("active");

  // Change the hamburger icon to an 'X' and back
  const icon = navToggle.querySelector("i");
  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});

// Optional: Close the menu when a link is clicked
const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      const icon = navToggle.querySelector("i");
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });
});
