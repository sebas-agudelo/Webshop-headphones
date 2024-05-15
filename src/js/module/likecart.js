import { addLikedProdToTheCart, shoppingCart } from "./cart";
import { qtycart, total } from "./cart";
import { productsHtml } from "./products";


export const likeList = [];

export const addToLikeCart = (likedProduct) => {
    const liked = likeList.find((likedId) => likedId === likedProduct);
  
    if(liked){
      const head = likeList.indexOf(likedProduct);
      likeList.splice(head,1)
      
      likeHtml();
      console.log(likeList);
      return
    }
    
    likeList.push(likedProduct);
  
      likeHtml();
    // console.log(likeList);
  };
  
  export const likeHtml = () => {
    const likeContainer = document.querySelector(".like-products");
    likeContainer.innerHTML = "";
  
    likeList.forEach((likedProduct) => {
      
      const theProductsDiv = document.createElement("div");
      const productsProporties = document.createElement("div");

      const img = document.createElement("img")
      const imgContainer = document.createElement("div");
  
      const name = document.createElement("h3");
      const functions = document.createElement("p");
      const price = document.createElement("h3");

      const iconsContainer = document.createElement("div");

      const cartDiv = document.createElement("div");
      cartDiv.classList.add("cart-div");
      const cartIcon = document.createElement("i");
      cartIcon.classList.add("bi-cart");
      cartIcon.classList.add("like-cart");

      const deleteDiv = document.createElement("div");
      deleteDiv.classList.add("delete-div");
      const deleteIcon = document.createElement("i");
      deleteIcon.classList.add("bi-trash3");
      deleteIcon.classList.add("like-delete");

      img.src = likedProduct.imageUrl;
      name.innerHTML = likedProduct.name;
      functions.innerHTML = likedProduct.functions
      price.innerHTML = likedProduct.price + " kr";

      theProductsDiv.classList.add("like-products-container");
      productsProporties.classList.add("like-proporties");
      
      imgContainer.classList.add("like-img-container");
      name.classList.add("like-product-name");
      functions.classList.add("like-product-functions");
      price.classList.add("like-product-price");
      iconsContainer.classList.add("like-icons-container");

  
      imgContainer.appendChild(img);
      theProductsDiv.appendChild(imgContainer);
      likeContainer.appendChild(theProductsDiv);

      productsProporties.appendChild(name);
      theProductsDiv.appendChild(productsProporties);
      likeContainer.appendChild(theProductsDiv);

      productsProporties.appendChild(functions);
      theProductsDiv.appendChild(productsProporties);

      productsProporties.appendChild(price);
      theProductsDiv.appendChild(productsProporties);
      likeContainer.appendChild(theProductsDiv);
      likeContainer.appendChild(theProductsDiv);

      cartDiv.appendChild(cartIcon)
      iconsContainer.appendChild(cartDiv);
      theProductsDiv.appendChild(iconsContainer);
      likeContainer.appendChild(theProductsDiv);

      deleteDiv.appendChild(deleteIcon)
      iconsContainer.appendChild(deleteDiv);
      theProductsDiv.appendChild(iconsContainer);
      likeContainer.appendChild(theProductsDiv);

      deleteDiv.addEventListener("click", () => {
      
      const likeIndex = likeList.indexOf(likedProduct)
      likeList.splice(likeIndex, 1)

      likeHtml()  
      qtyLike ()

      });

      cartIcon.addEventListener("click", () => {
        addLikedProdToTheCart(likedProduct)
        qtycart(likedProduct)
        total (likedProduct)
      })

    }); 
  };

  export function allLikeListeners () {
    openLikeContainer ()
    closeLikeContainer () 
};

  function likeContainer () {
    document.querySelector(".like-contianer").classList.toggle("open-like-container");
    document.querySelector(".burgerMenu").classList.toggle("remove");
    document.querySelector("#productContainer").classList.toggle("product-container-hidden")
  
};

  //Open like container
  function openLikeContainer () {
    document.querySelector(".cart-like").addEventListener("click", () => {

    likeContainer ()
  });
};

//Close like container
  function closeLikeContainer () {
    document.querySelector(".like-heading-close-container").addEventListener("click", () => {

    likeContainer ()
  });
};


export function qtyLike () {
  const qtyProducts = document.querySelector(".qtylike");

  // let total = 0
  // likeList.forEach((pro) => {
  
  //   let qty = pro.quantity;
  //   total += qty++;
  // })
  
  const total = likeList.length;
  qtyProducts.innerHTML = total + "";

  likeHtml()  
console.log("click");
}



