import { qtycart, total } from "./cart";


export function productDitails(datails) {

    const theModal = document.getElementById("modal-body")
    theModal.innerHTML = "";

    const theModalTitle = document.getElementById("exampleModalLabel");
    theModalTitle.innerHTML = datails.name;

    const modalImgContainer = document.createElement("div");
    const modalProductImg = document.createElement("img");
    modalProductImg.src = datails.imageUrl;

    modalImgContainer.classList.add("modal-img-container");
    modalImgContainer.appendChild(modalProductImg)

    const ModalPriceAndCartContainer = document.createElement("div");
    ModalPriceAndCartContainer.classList.add("price-and-cart-icon")
    const ModalProductPrice = document.createElement("h3");
    ModalProductPrice.innerHTML = datails.price + "kr";

    ModalPriceAndCartContainer.appendChild(ModalProductPrice);

    const ModalProductButton = document.createElement("button");
    const ModalCartIcon = document.createElement("i");
    ModalCartIcon.classList.add("bi-cart");
    
    ModalProductButton.appendChild(ModalCartIcon)
    ModalPriceAndCartContainer.appendChild(ModalProductButton)

    theModal.appendChild(modalImgContainer);
    theModal.appendChild(ModalPriceAndCartContainer);

    // ditailsCartButton.addEventListener("click", () => {
    //     addLikedProdToTheCart(datails)
    //     qtycart(datails)
    //     total (datails) 
    //    })


}

