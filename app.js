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

const mainNav = document.querySelector("#main-nav");
const mainSec = document.querySelector("#main-sec");
const myName = document.querySelector(".main-intro span");
const qoute = document.querySelector(".main-qoute");

const animateObs = (obsElem, addClassElem, className, marginVal = "0px") => {
    const navObs = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (addClassElem === mainNav) {
                    if (entry.isIntersecting) {
                        addClassElem.classList.remove(className);
                    } else {
                        addClassElem.classList.add(className);
                    }
                } else {
                    if (entry.isIntersecting) {
                        addClassElem.classList.add(className);
                    } else {
                        addClassElem.classList.remove(className);
                    }
                }
            });
        },
        {
            rootMargin: marginVal,
        },
    );

    navObs.observe(obsElem);
};

animateObs(mainSec, mainNav, "nav-change", "-95% 0px 0px 0px");
animateObs(mainSec, myName, "text-shadow");

animateObs(mainSec, qoute, "text-size");
