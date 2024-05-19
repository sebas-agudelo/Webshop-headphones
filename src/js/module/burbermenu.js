export const burgerMenuFunction = () => {
    const icons = document.querySelector(".icons");
    const burgerIcon = document.querySelector(".burger-icon");
    const closeIcon = document.querySelector(".close-icon");
    const nav = document.querySelector(".navBar");
    const footer = document.querySelector(".footer");
    const products = document.getElementById("productContainer");

    icons.addEventListener("click", () => {
        burgerIcon.classList.toggle("close-burger-icon");
        closeIcon.classList.toggle("open-close-icon");
        nav.classList.toggle("open-nav");
        footer.classList.toggle("close-footer");
        products.classList.toggle("close-product-container");

    });

    nav.addEventListener("mouseleave", () => {
        nav.classList.remove("open-nav");
        closeIcon.classList.remove("open-close-icon");
        burgerIcon.classList.remove("close-burger-icon");
    })
};
