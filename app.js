const burgerNav = () => {
    // select elements
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".sub-nav");
    const navLi = document.querySelectorAll(".sub-nav li");
    // add event listener to the burger
    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        // loop through the lis and toggle the style
        navLi.forEach((link, index) => {
            link.classList.toggle("sub-links-fade");
            link.style.animationDelay = `${index / 7}s`;
        });
        burger.classList.toggle("toggle");
    });
};

burgerNav();
