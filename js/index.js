const init = () => {
console.log('ok')

}
// Scroll Btn 

const scrollBtn = document.getElementById("scroll-btn");

scrollBtn.addEventListener("click", () => {

  window.scroll(0, window.innerHeight)
  console.log('scroll')
}, {passive: true})

// Wrap every letter in a span
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

// Top-up Btn 

const topUpBtn = document.getElementById('up-arrow');

window.addEventListener("scroll", () => {

  if(document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {

    topUpBtn.style.display = 'block'
  } else {

    topUpBtn.style.display = "non"
  }
}, {passive: true})

topUpBtn.addEventListener("click", () => {

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

}, {passive: true})

// CREATION DE LA SECTION QUI VA PERMETTRE D'OBERSVER LA SCROLL DE LA PAGE ET DE FAIRE APPARAITRE LES EFFETS 

const ratio = 0.10

const options = {

    root: null,
    rootMargin: '0px',
    threshold: ratio
  }
  let callback = function(entries, observer) { 
    entries.forEach(entry => {

        if (entry.intersectionRatio > ratio) {

            entry.target.classList.add('reveal-visible')           
        }
    })
  }
  let observer = new IntersectionObserver(callback, options);

  let target = document.querySelectorAll("[class*=reveal-").forEach(function (r) {
    observer.observe(r)
  })

  try {

  observer.observe(target)

  } catch(error) {

  // RESPONSIVE MENU

  }

  function responsive() {

    let scroll_btn = document.getElementById("scroll-btn")
    let nav = document.getElementById("navbar");
    if (nav.className === "nav__elts") {
      scroll_btn.className += " responsive"
      nav.className += " responsive";
    } else {
      nav.className = "nav__elts";
      scroll_btn.className = "header-scroll-icon"
    } 
  }

// Vh 

let vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('load', init);