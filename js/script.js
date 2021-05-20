// HAMBURGUER
const navSlide = () => {
  const burguer = document.querySelector('.burguer')
  const nav = document.querySelector('.nav-list')
  const header = document.querySelector('#header')

  // quando clica no burguer adiciona .nav-active em nav e .change em burguer
  header.addEventListener('click', () => {
    nav.classList.toggle('nav-active')

    // animação hamburguer
    burguer.classList.toggle('change')  
  })
}

navSlide()



// PIE CHART
$(function() {
  $('.chart').easyPieChart({
      //your options goes here
  });
});




// SLIDERS
function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function plusSlides2(m) {
    showSlides2(slideIndex2 += m);
  }

  function currentSlide2(m) {
    showSlides2(slideIndex2 = m);
  }

  function plusSlides3(o) {
    showSlides3(slideIndex3 += o);
  }

  function currentSlide3(o) {
    showSlides3(slideIndex3 = o);
  }

//   SLIDER 1
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
      slideIndex = 1
    };
    if (n < 1) {
      slideIndex = slides.length
    };
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    };
    slides[slideIndex - 1].style.display = "block";
  };

//   SLIDER 2
  function showSlides2(m) {
    var j;
    var slides2 = document.getElementsByClassName("mySlides2");
    if (m > slides2.length) {
      slideIndex2 = 1
    };
    if (m < 1) {
      slideIndex2 = slides2.length
    };
    for (j = 0; j < slides2.length; j++) {
      slides2[j].style.display = "none";
    };
    slides2[slideIndex2 - 1].style.display = "block";
  };

//   SLIDER 3
  function showSlides3(o) {
    var l;
    var slides3 = document.getElementsByClassName("mySlides3");
    if (o > slides3.length) {
      slideIndex3 = 1
    };
    if (o < 1) {
      slideIndex3 = slides3.length
    };
    for (l = 0; l < slides3.length; l++) {
      slides3[l].style.display = "none";
    };
    slides3[slideIndex3 - 1].style.display = "block";
  };

  var slideIndex = 1;
  var slideIndex2 = 1;
  var slideIndex3 = 1;

  document.addEventListener("DOMContentLoaded", function() {
    console.log("first DOMContentLoaded event");
    showSlides(slideIndex);
  });

  document.addEventListener("DOMContentLoaded", function() {
    console.log("second DOMContentLoaded event");
    showSlides2(slideIndex2);
  });

  document.addEventListener("DOMContentLoaded", function() {
    console.log("third DOMContentLoaded event");
    showSlides3(slideIndex3);
  });


  // INTERSECTION OBSERVER - FADE-IN
  const faders = document.querySelectorAll('.fade-in');
  const appearOptions = {
    threshold: 1
  };

  const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('appear')
        appearOnScroll.unobserve(entry.target)
      }
    })
  }, 
  appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader)
  })

