export const burgerMenuFunction = () => {
    const icons = document.querySelector(".icons");
    const burgerIcon = document.querySelector(".burger-icon");
    const closeIcon = document.querySelector(".close-icon");
    const nav = document.querySelector(".navBar");

    icons.addEventListener("click", () => {
        burgerIcon.classList.toggle("close-burger-icon");
        closeIcon.classList.toggle("open-close-icon");
        nav.classList.toggle("open-nav");
    });
};
