// Header
(() => {
  const header = document.querySelector(".header");
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  };
})();

// Header-menu

(() => {
  const body = document.querySelector("body");

  const burger = document.querySelector(".burger");
  const cross = document.querySelector(".cross");

  // const plusesOpen = document.querySelectorAll(".case__plus--open");
  // const plusesClose = document.querySelectorAll(".case__plus--close");
  // const caseItems = document.querySelectorAll(".case__item");
  // const openCards = document.querySelectorAll(".open-card");

  const headerMenu = document.querySelector(".header-menu");
  const menuLinks = document.querySelectorAll(".header-menu__link");

  burger.addEventListener("click", () => {
    headerMenu.classList.add("active");
    body.classList.add("no-scroll");
  });
  cross.addEventListener("click", () => {
    headerMenu.classList.remove("active");
    body.classList.remove("no-scroll");
  });

  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener("click", () => {
      headerMenu.classList.remove("active");
      body.classList.remove("no-scroll");
    });
  }

  // for (let i = 0; i < plusesOpen.length; i++) {
  //   for (let i = 0; i < caseItems.length; i++) {
  //     for (let i = 0; i < openCards.length; i++) {
  //       plusesOpen[i].addEventListener("click", () => {
  //         caseItems[i].classList.add("active");
  //         openCards[i].classList.add("active");
  //       });
  //     }
  //   }
  // }

  // for (let i = 0; i < plusesClose.length; i++) {
  //   for (let i = 0; i < caseItems.length; i++) {
  //     for (let i = 0; i < openCards.length; i++) {
  //       plusesClose[i].addEventListener("click", () => {
  //         caseItems[i].classList.remove("active");
  //         openCards[i].classList.remove("active");
  //       });
  //     }
  //   }
  // }
})();

// Scroll to anchors

(() => {
  const smoothScroll = function (targetEl, duration) {
    const headerElHeight = document.querySelector(".header").clientHeight;
    let target = document.querySelector(targetEl);
    let targetPosition = target.getBoundingClientRect().top - headerElHeight;
    let startPosition = window.pageYOffset;
    let startTime = null;

    const ease = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = function (currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);
  };

  const scrollTo = function () {
    const links = document.querySelectorAll(".js-scroll");
    links.forEach((each) => {
      each.addEventListener("click", function () {
        const currentTarget = this.getAttribute("href");
        smoothScroll(currentTarget, 1000);
      });
    });
  };
  scrollTo();
})();