const app = {
  init: function () {
    // Recuperation des elements du DOM
    app.responsiveBtn = document.getElementById("menu-nav");
    app.closeBtn = document.getElementById("menu-nav-close");
    app.scrollBtn = document.getElementById("scroll-btn");
    app.topUpBtn = document.getElementById("up-arrow");

    // Initialisation des fonctions
    app.viewPortMobile();
    app.handlePopUpEffect();

    // Ajout des listeners
    app.responsiveBtn.addEventListener("click", app.handleResponsiveBtn);
    app.closeBtn.addEventListener("click", app.handleResponsiveBtn);
    app.scrollBtn.addEventListener("click", app.handleScrollBtn, {
      passive: true,
    });
    window.addEventListener("scroll", app.handleTopUpBtn, { passive: true });
    app.topUpBtn.addEventListener("click", app.handleTopUpBtnClick, {
      passive: true,
    });
  },

  handleResponsiveBtn: function () {
    let scroll_btn = document.getElementById("scroll-btn");
    let responsivBtn = document.getElementById("menu-nav");
    let closeBtn = document.getElementById("menu-nav-close");
    let nav = document.getElementById("navbar");
    let headerContent = document.getElementById("header-content");
    if (nav.className === "nav__elts") {
      scroll_btn.className += " responsive";
      nav.className += " responsive";
      responsivBtn.className += " close";
      closeBtn.className = "open";
      headerContent.classList.add("blurr");
    } else {
      nav.className = "nav__elts";
      scroll_btn.className = "header-scroll-icon";
      responsivBtn.className = "open";
      closeBtn.className = "close";
      headerContent.classList.remove("blurr");
    }
  },

  handleScrollBtn: function () {
    window.scroll(0, innerHeight);
  },

  handleTopUpBtn: function () {
    document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500
      ? (app.topUpBtn.className = "showBtn")
      : (app.topUpBtn.className = "up-arrow");
  },

  handleTopUpBtnClick: function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  },

  viewPortMobile: function () {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  },

  handlePopUpEffect: function () {
    const ratio = 0.1;
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: ratio,
    };

    let callback = function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > ratio) {
          entry.target.classList.add("reveal-visible");
        }
      });
    };

    let observer = new IntersectionObserver(callback, options);
    let target = document
      .querySelectorAll("[class*=reveal-")
      .forEach(function (elt) {
        observer.observe(elt);
      });

    try {
      observer.observe(target);
    } catch (error) {}
  },
};

addEventListener("load", app.init());
