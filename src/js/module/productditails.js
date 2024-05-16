import { qtycart, total, addLikedProdToTheCart } from "./cart";

export function productDitails(datails) {

    const theModal = document.getElementById("modal-body")
    theModal.innerHTML = "";

    const theModalTitle = document.getElementById("exampleModalLabel");
    theModalTitle.innerHTML = datails.name;

    //ALL ABOUT PRODUCT IMAGE
    const modalImgContainer = document.createElement("div");
    modalImgContainer.classList.add("modal-img-container");
      
    const modalProductImg = document.createElement("img");
    modalProductImg.src = datails.imageUrl;

    modalImgContainer.appendChild(modalProductImg)

    //ALL ABOUT PRODUCT PRICE AND CART BUTTON
    const ModalPriceAndCartContainer = document.createElement("div");
    ModalPriceAndCartContainer.classList.add("price-and-cart-icon")

    const ModalProductPrice = document.createElement("h3");
    ModalProductPrice.innerHTML = datails.price + "kr";

    
    const ModalProductButton = document.createElement("button");
    const ModalCartIcon = document.createElement("i");
    ModalCartIcon.classList.add("bi-cart");
    
    ModalPriceAndCartContainer.appendChild(ModalProductPrice);
    ModalProductButton.appendChild(ModalCartIcon)
    ModalPriceAndCartContainer.appendChild(ModalProductButton)

    //ALL ABOUT PRODUCT CENTRAL FUNCTIONS
    const modalCentralFunctionsContaner = document.createElement("div");
    modalCentralFunctionsContaner.classList.add("central-functions-container")

    const modalFunctionsHeading = document.createElement("h5");
    modalFunctionsHeading.innerHTML = "CENTRALA FUNKTIONER";
    
    const ul = document.createElement("ul");
    
    const functionsArray = datails.functions.split(". ");
    
    functionsArray.forEach((productDitails) => {
        const li = document.createElement("li");
        li.innerHTML = productDitails;
        ul.appendChild(li);
    });
    
    modalCentralFunctionsContaner.appendChild(modalFunctionsHeading);
    modalCentralFunctionsContaner.appendChild(ul);

    //ALL ABOUT PRODUCT DESCRIPTION
    const ModalDescriptionContainer = document.createElement("div");
    ModalDescriptionContainer.classList.add("description-container")

    const modalDescriptonHeading =  document.createElement("h5");
    modalDescriptonHeading.innerHTML = "FULLSTÄNDIG BESKRIVNING";

    const modalProductDescription = document.createElement("p");
    modalProductDescription.innerHTML = datails.description;

    ModalDescriptionContainer.appendChild(modalDescriptonHeading);
    ModalDescriptionContainer.appendChild(modalProductDescription);

    //ALL ABOUT APPENDCHILD
    theModal.appendChild(modalImgContainer);
    theModal.appendChild(ModalPriceAndCartContainer);
    theModal.appendChild(modalCentralFunctionsContaner);
    theModal.appendChild(ModalDescriptionContainer);

    //ALL ABOUT CLICK EVENTS
    ModalProductButton.addEventListener("click", () => {
        addLikedProdToTheCart(datails)
        qtycart(datails)
        total (datails) 
       })
    
}



