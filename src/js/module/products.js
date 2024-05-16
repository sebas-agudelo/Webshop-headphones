import { addToLikeCart, likeHtml, qtyLike } from "./likecart.js";
import { addLikedProdToTheCart, qtycart, total } from "./cart.js";
import { productDitails } from "./productditails.js";

export function productsHtml(headphones) {
  
  const theProductsSection = document.getElementById("productContainer");
  theProductsSection.innerHTML = "";

  headphones.forEach((allProducts) => {
  
  const theProductsDiv = document.createElement("div");
  const productsProporties = document.createElement("div");
  
      const img = document.createElement("img")
      const imgContainer = document.createElement("div");

      imgContainer.setAttribute("data-bs-toggle", "modal")
      imgContainer.setAttribute("data-bs-target", "#exampleModal")
      
      const name = document.createElement("h3");
      
      const functions = document.createElement("p");
      const price = document.createElement("h3");
      
      const productLikeCartIconDiv = document.createElement("div");
      productLikeCartIconDiv.classList.add("product-icon-like-cart")

      const productIconLike = document.createElement("i");
      const productIconCart = document.createElement("i");
      
      productIconLike.classList.add("bi-heart");
      productIconLike.classList.add("heart");

      productIconCart.classList.add("bi-cart");
      productIconCart.classList.add("cart");
      
      
      // const buyBtn = document.createElement("button");
      // buyBtn.innerHTML = "Köp";
      
      img.src = allProducts.imageUrl
      name.innerHTML = allProducts.name;
      functions.innerHTML = allProducts.functions
      price.innerHTML = allProducts.price + " kr";
      
      theProductsDiv.classList.add("the-products-container");
      productsProporties.classList.add("products-proporties")
      
      imgContainer.classList.add("product-img-container");
      name.classList.add("product-name");
      functions.classList.add("product-functions");
      price.classList.add("product-price");
      // buyBtn.classList.add("buy-btn");

      imgContainer.appendChild(img);
      theProductsDiv.appendChild(imgContainer);
      
      productsProporties.appendChild(name);
      productsProporties.appendChild(functions);
      productsProporties.appendChild(price);
      productLikeCartIconDiv.appendChild(productIconLike)
      productLikeCartIconDiv.appendChild(productIconCart)

      // theProductsDiv.appendChild(buyBtn)
      theProductsSection.appendChild(theProductsDiv);
      theProductsDiv.appendChild(productsProporties);
      theProductsDiv.appendChild(productLikeCartIconDiv);

      theProductsSection.appendChild(theProductsDiv);
      theProductsSection.appendChild(theProductsDiv);
      
      productIconLike.addEventListener("click", () => {

      addToLikeCart(allProducts)    
      qtyLike(allProducts)  
  
      });

      productIconCart.addEventListener("click", () => {
        addLikedProdToTheCart(allProducts)
        qtycart(allProducts)
        total (allProducts) 
      });

      name.addEventListener("click", () => {
        productDitails(allProducts)   
      });

      imgContainer.addEventListener("click", (e) => {
        productDitails(allProducts)
        // document.querySelector(".main-header").classList.toggle("försvinna");
        // theProductsSection.classList.toggle("blablabla");
        
        
        
     
      });
    })
};




      

