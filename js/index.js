// Scroll Btn 

const scrollBtn = document.getElementById("scroll-btn");

scrollBtn.addEventListener("click", () => {

  window.scroll(0, 1000)
  console.log('scroll')
})

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml9 .letters');
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
})

topUpBtn.addEventListener("click", () => {

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

})


// CREATION DE LA SECTION QUI VA PERMETTRE D'OBERSVER LA SCROLL DE LA PAGE ET DE FAIRE APPARAITRE LES EFFETS 

const ratio = 0.25

const options = {

    root: null,
    rootMargin: '0px',
    threshold: ratio
  }
  var callback = function(entries, observer) { 
    entries.forEach(entry => {

        if (entry.intersectionRatio > ratio) {

            entry.target.classList.add('reveal-visible')           
        }
    })
  }
  var observer = new IntersectionObserver(callback, options);

  var target = document.querySelectorAll("[class*=reveal-").forEach(function (r) {
    observer.observe(r)
  })

  observer.observe(target);