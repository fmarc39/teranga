const app = {

  init: function () {
    // Recuperation des elements du DOM
    app.responsiveBtn = document.getElementById('menu-nav');
    app.scrollBtn = document.getElementById("scroll-btn");
    app.topUpBtn = document.getElementById('up-arrow');

    // Initialisation des fonctions
    app.mainTitleAnnimation();
    app.viewPortMobile();
    app.handlePopUpEffect();

    // Ajout des listeners
    app.responsiveBtn.addEventListener('click', app.handleResponsiveBtn);
    app.scrollBtn.addEventListener('click', app.handleScrollBtn, {passive:true});
    window.addEventListener('scroll', app.handleTopUpBtn, {passive:true});
    app.topUpBtn.addEventListener('click', app.handleTopUpBtnClick, {passive:true});
  },

  handleResponsiveBtn: function () {
    console.log('ok')

    let scroll_btn = document.getElementById("scroll-btn")
    let nav = document.getElementById("navbar");
    if (nav.className === "nav__elts") {
      scroll_btn.className += " responsive"
      nav.className += " responsive";
    } else {
      nav.className = "nav__elts";
      scroll_btn.className = "header-scroll-icon"
    } 
  },

  handleScrollBtn: function () {
    window.scroll(0, innerHeight);
  },

  mainTitleAnnimation: function () {
    let textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml9 .letter',
    scale: [0, 1],
    duration: 2000,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  })

  },

  handleTopUpBtn: function () {

    (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) ? 
    app.topUpBtn.style.display = 'block'
    : app.topUpBtn.style.display = "non"  
  },

  handleTopUpBtnClick: function (){

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
  },

  viewPortMobile: function () {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  },

  handlePopUpEffect: function () {

    const ratio = 0.10
    const options = {

        root: null,
        rootMargin: '0px',
        threshold: ratio
      };
    
    let callback = function(entries, observer) { 
      entries.forEach(entry => {
          if (entry.intersectionRatio > ratio) {
              entry.target.classList.add('reveal-visible')           
          }
      })
    };

    let observer = new IntersectionObserver(callback, options);
    let target = document.querySelectorAll("[class*=reveal-").forEach(function (elt) {
      observer.observe(elt)
    })

    try {
    observer.observe(target)
    } catch(error) {}
  },

}


addEventListener('load', app.init())
