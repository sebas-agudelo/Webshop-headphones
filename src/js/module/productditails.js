import { addLikedProdToTheCart } from "./cart";
import { qtycart, total } from "./cart";

export function productDitails (datails) {
    //  const theProductsSection = document.getElementById("productContainer");
    // theProductsSection.innerHTML = ""

    const ditailsContainer = document.createElement("div");
    ditailsContainer.classList.add("ditails-product-container");

    const ditailDiv = document.createElement("div");
    ditailDiv.classList.add("ditails-container")
  
    //Everything close icon & name
    const closeIconDiv = document.createElement("div");
    const closeIcon = document.createElement("i");

    closeIconDiv.classList.add("close-icon-div");

    closeIcon.classList.add("bi-x-lg");
    closeIcon.classList.add("ditails-close-icon");

    //Everything name
    const name = document.createElement("h3");
    name.classList.add("ditails-name");
    name.innerHTML = datails.name;
    closeIconDiv.appendChild(name)
    
    closeIconDiv.appendChild(closeIcon);
    ditailsContainer.appendChild(closeIconDiv);
    
    //Everything image
    const imgDiv = document.createElement("div");
    imgDiv.classList.add("img-container")
    const img = document.createElement("img");
    img.src = datails.imageUrl;
    
    imgDiv.appendChild(img);
    ditailDiv.appendChild(imgDiv);

    //Everything price
    const price = document.createElement("h3");
    price.classList.add("ditails-price");
    price.innerHTML = datails.price + " kr";
    ditailDiv.appendChild(price);

    //Everything cart and quantity
    const ditailsCartQtyDiv = document.createElement("div");
    ditailsCartQtyDiv.classList.add("ditails-cart-qty");

    const ditailsQtyInput = document.createElement("input")
    ditailsQtyInput.classList.add("ditails-qty-input");
    ditailsQtyInput.type = "number"
    ditailsQtyInput.value = datails.quantity;

    const ditailsCartButton = document.createElement("button");
    ditailsCartButton.classList.add("ditails-cart-button");
    ditailsCartButton.innerHTML = "LÄGG I VARUKORG";

    ditailsCartQtyDiv.appendChild(ditailsQtyInput);
    ditailsCartQtyDiv.appendChild(ditailsCartButton);
    ditailDiv.appendChild(ditailsCartQtyDiv);

    //Everything functions
    const ditailsPropertiesDiv = document.createElement("div");
    ditailsPropertiesDiv.classList.add("ditails-properties-container");

    const fucntionsHeading = document.createElement("h2");
    fucntionsHeading.innerHTML = "CENTRALA FUNKTIONER";

    const ul = document.createElement("ul");

    const functionsArray = datails.functions.split(". ");

    functionsArray.forEach((productDitails) => {
        const li = document.createElement("li");
        li.innerHTML = productDitails;
        ul.appendChild(li);
    });

    ditailsPropertiesDiv.appendChild(fucntionsHeading);
    ditailsPropertiesDiv.appendChild(ul);
    ditailDiv.appendChild(ditailsPropertiesDiv);

    //Everything ditails
    const productDitailsDiv = document.createElement("div");
    productDitailsDiv.classList.add("product-ditails-container");

    const ditailsHeading = document.createElement("h2");
    ditailsHeading.innerHTML = "FULLSTÄNDIG BESKRIVNING";

    const productDitails = document.createElement("p");
    productDitails.innerHTML = datails.description;

    productDitailsDiv.appendChild(ditailsHeading);
    productDitailsDiv.appendChild(productDitails);
    ditailDiv.appendChild(productDitailsDiv);

    //Everything body and containers appendchild
    ditailsContainer.appendChild(ditailDiv);
    document.body.appendChild(ditailsContainer);
    document.querySelector('main').appendChild(ditailsContainer);

    
    closeIcon.addEventListener("click", () => {
        ditailsContainer.classList.toggle("hidden-ditails-container");  
        
        document.getElementById("productContainer").classList.remove("blablabla");
        document.querySelector(".main-header").classList.remove("försvinna");
        document.getElementById("productContainer").classList.toggle("bla");

   })

ditailsCartButton.addEventListener("click", () => {
    addLikedProdToTheCart(datails)
    qtycart(datails)
    total (datails) 
   })


}

