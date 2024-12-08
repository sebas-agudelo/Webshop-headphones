import "../scss/main.scss";

import { burgerMenuFunction } from "./module/burbermenu.js";
import { allCartListeners } from "./module/cart.js";
import { fetchData } from "./fetch.js";



window.onload = () => {
  console.log('Page Loaded:', location.pathname);  // Lägg till logg
  if (location.pathname.includes("index.html")) {
    const products = document.querySelector("#productContainer");
    if (products) {
      products.style.display = "none"; 
    }
  }

  if (location.pathname.includes("products.html")) {
    console.log("Fetching data for products page");
    fetchData();
    const heroImg = document.querySelector(".hero-img");
    if (heroImg) {
      heroImg.style.display = "none";
    }
  }
  
  
  //Open and close meny
  burgerMenuFunction()
  
  //All listeners from cart js
  allCartListeners()
}







