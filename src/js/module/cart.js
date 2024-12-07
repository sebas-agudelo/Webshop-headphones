let shoppingCart = [];

export function addLikedProdToTheCart (addToCart) {
  const cartArray = shoppingCart.find((addProduct) => addProduct.id === addToCart.id)

  if(cartArray){

    cartArray.quantity += 1
  } 
    else {
    addToCart.quantity = 1
    shoppingCart.push(addToCart);
  }
  
  cartHtml()
  total()

 

} 

const cartHtml = () => {


  const shoppingContainer = document.querySelector(".shopping-products");
  shoppingContainer.innerHTML = "";

  shoppingCart.forEach((Cart) => {
    
    const theProductsDiv = document.createElement("div");
    const productsProporties = document.createElement("div");

    const img = document.createElement("img")
    const imgContainer = document.createElement("div");

    const name = document.createElement("h3");
    const functions = document.createElement("p");
    const price = document.createElement("h3");

    const qtyDeleteContainer = document.createElement("div");

    const deleteDiv = document.createElement("div");
    deleteDiv.classList.add("delete-div");
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("bi-trash3");
    deleteIcon.classList.add("cart-delete");

    const totalqtysDiv = document.createElement("div");
    totalqtysDiv.classList.add("cart-input")
    const qtyInput = document.createElement("input");
    qtyInput.type = "number"


    img.src = Cart.imageUrl;
    name.innerHTML = Cart.name;
    functions.innerHTML = Cart.functions
    price.innerHTML = Cart.price + " kr";
    qtyInput.value = Cart.quantity;

    theProductsDiv.classList.add("cart-products-container");
    productsProporties.classList.add("cart-proporties");
    
    imgContainer.classList.add("cart-img-container");
    name.classList.add("cart-product-name");
    functions.classList.add("cart-product-functions");
    price.classList.add("cart-product-price");
    qtyDeleteContainer.classList.add("cart-qty-cart-icon-container");
    qtyInput.classList.add("input-qty");

    imgContainer.appendChild(img);
    theProductsDiv.appendChild(imgContainer);
    shoppingContainer.appendChild(theProductsDiv);

    productsProporties.appendChild(name);
    theProductsDiv.appendChild(productsProporties);
    shoppingContainer.appendChild(theProductsDiv);

    productsProporties.appendChild(functions);
    theProductsDiv.appendChild(productsProporties);

    productsProporties.appendChild(price);
    theProductsDiv.appendChild(productsProporties);
    shoppingContainer.appendChild(theProductsDiv);
    shoppingContainer.appendChild(theProductsDiv);
 
    deleteDiv.appendChild(deleteIcon)
    qtyDeleteContainer.appendChild(deleteDiv);
    theProductsDiv.appendChild(qtyDeleteContainer);
    shoppingContainer.appendChild(theProductsDiv);
    
    totalqtysDiv.appendChild(qtyInput);
    qtyDeleteContainer.appendChild(totalqtysDiv);
    theProductsDiv.appendChild(qtyDeleteContainer);
    shoppingContainer.appendChild(theProductsDiv);

    deleteDiv.addEventListener("click", () => {
    const cartIndex = shoppingCart.indexOf(Cart)
    shoppingCart.splice(cartIndex, 1)
    
    cartHtml()
    qtycart ()
    total ()
    });
    
    qtyInput.addEventListener("change", () => {
      const newQty = parseInt(qtyInput.value);
      Cart.quantity = newQty;

      if(newQty <= 0){
        const productIndex = shoppingCart.indexOf(Cart)
        shoppingCart.splice(productIndex, 1);
   
      }


      cartHtml();
      qtycart();  
      total(); 
    });
    
  }); 
};


export function allCartListeners () {
  oppenShoppingCart ()

};

function oppenShoppingCart () {
    const cart = document.querySelector(".cart-icon");
    const cartContainer = document.querySelector(".cart-container");
    const productContainer = document.getElementById("productContainer");
    const closeIcon = document.querySelector(".close-ikon") ;
    const cartQty = document.querySelector(".qty-cart");
    const heroImg = document.querySelector(".hero-img");
    const footer = document.querySelector(".footer");

    cart.addEventListener("click", () => {
      cartContainer.classList.toggle("open-cart-container")
      productContainer.classList.toggle("close-product-container");
      closeIcon.classList.toggle("open-close-ion");
      cart.classList.toggle("close-cart-icon");
      cartQty.classList.toggle("close-cart-qty");
      heroImg.classList.toggle("close-hero-img");
      footer.classList.toggle("close-footer");
      console.log("hej");
    })
    
    closeIcon.addEventListener("click", () => {
      cart.classList.remove("close-cart-icon");
      closeIcon.classList.remove("open-close-ion")
      cartContainer.classList.remove("open-cart-container")
      productContainer.classList.remove("close-product-container");
      cartQty.classList.remove("close-cart-qty");
      heroImg.classList.remove("close-hero-img");
      footer.classList.remove("close-footer");
    })

      cartContainer.addEventListener("mouseleave", () => {
      cart.classList.remove("close-cart-icon");
      closeIcon.classList.remove("open-close-ion")
      cartContainer.classList.remove("open-cart-container")
      productContainer.classList.remove("close-product-container");
      cartQty.classList.remove("close-cart-qty");
    });
}


export function qtycart () {
  const qtyCart = document.querySelector(".qtycart");

  let total = 0
  shoppingCart.forEach((ptd) => {
    let qty = ptd.quantity;
    total += qty
  })

  qtyCart.innerHTML = total + "";
  cartHtml()
 
};

export function total () {
  const totalPrice = document.querySelector(".total-price");
  let total = 0

  shoppingCart.forEach((cost) => {
    let much = cost.price;
    let qty = cost.quantity;
    total += much * qty;
  });
  
  totalPrice.innerHTML = + " " + total + " kr";
  
  cartHtml() 

  localStorage.setItem("headphones", JSON.stringify(shoppingCart));
};



const theProducts = localStorage.getItem("headphones");
if (theProducts) {
  shoppingCart = JSON.parse(theProducts);
  qtycart(); 
  total(); 
}