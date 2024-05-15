export const shoppingCart = []

export function addLikedProdToTheCart (addToCart) {
  const cartArray = shoppingCart.find((addProduct) => addProduct === addToCart)

  if(cartArray){

    cartArray.quantity += 1
  } 
    else {
    addToCart.quantity = 1
    shoppingCart.push(addToCart);
  }
  
  cartHtml()
  
  
 
  // console.log(shoppingCart);
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

    // console.log(shoppingCart);


    });
    

    qtyInput.addEventListener("change", () => {
      const newQty = parseInt(qtyInput.value);
      Cart.quantity = newQty;
   
      cartHtml();
      qtycart(); 
      total(); 
    });
  }); 
};


export function allCartListeners () {
  openShoppingContainer ()
  closeShoppingContainer () 
};

function shoppingContainer () {
    document.querySelector(".shopping-cart-container").classList.toggle("open-shopping-container");
    document.querySelector("#productContainer").classList.toggle("product-container-hidden")
    document.querySelector(".burgerMenu").classList.toggle("remove");
}

  //Open shopping container
function openShoppingContainer () {
    document.querySelector(".cart-icon").addEventListener("click", () => {

    shoppingContainer ()
  });
};

//Close shopping container
function closeShoppingContainer () {
    document.querySelector(".shopping-close-icon").addEventListener("click", () => {

    shoppingContainer ()
  });
};

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

  totalPrice.innerHTML = "Summa:" + " " + total + "kr";
  cartHtml() 
};



