import { addLikedProdToTheCart, qtycart, total} from "./cart.js";
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
    name.setAttribute("data-bs-toggle", "modal")
    name.setAttribute("data-bs-target", "#exampleModal")

    const functions = document.createElement("p");
    const price = document.createElement("h3");

    const productLikeCartIconDiv = document.createElement("div");
    productLikeCartIconDiv.classList.add("product-icon-like-cart")

    const productIconCart = document.createElement("i");

    productIconCart.classList.add("bi-cart");
    productIconCart.classList.add("cart");

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
    productLikeCartIconDiv.appendChild(productIconCart)

    // theProductsDiv.appendChild(buyBtn)
    theProductsSection.appendChild(theProductsDiv);
    theProductsDiv.appendChild(productsProporties);
    theProductsDiv.appendChild(productLikeCartIconDiv);

    theProductsSection.appendChild(theProductsDiv);
    theProductsSection.appendChild(theProductsDiv);

    productIconCart.addEventListener("click", () => {
      addLikedProdToTheCart(allProducts)
      qtycart()
      total()      
    });

    name.addEventListener("click", () => {
      productDitails(allProducts)
    });

    imgContainer.addEventListener("click", () => {
      productDitails(allProducts)
    });
  })
};






