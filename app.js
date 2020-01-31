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

const aboutSec = document.querySelector(".anim");
const text = document.querySelectorAll(".textAnim");
const animateStyle = "2s forwards ease-out";

function observerScreen(elems, animationStyle) {
    observer = new IntersectionObserver(entries => {
        entries.forEach((entry, index) => {
            if (entry.intersectionRatio > 0) {
                className = entry.target.className;
                entry.target.style.animation = `${className} ${animationStyle} `;
            } else {
                entry.target.style.animation = "none";
            }
        });
    });

    elems.forEach(elem => {
        observer.observe(elem);
    });
}
// observerScreen(aboutSec, animateStyle);
observerScreen(text, animateStyle);
