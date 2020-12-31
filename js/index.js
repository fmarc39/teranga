// CREATION DE LA SECTION QUI VA PERMETTRE D'OBERSVER LA SCROLL DE LA PAGE ET DE FAIRE APPARAITRE LES EFFETS 

const ratio = 0.1

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