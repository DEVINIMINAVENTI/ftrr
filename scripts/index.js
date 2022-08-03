function bling(){
  setTimeout("location.href='https://www.handouts.store/bnm/'",1000);
}




const navTogglera = document.querySelector(".nav-toggler");

navTogglera.addEventListener('click', navToggle);

function navToggle(){

    const nav = document.querySelector(".navbar");
    nav.classList.toggle("navbarbaa");
   
}


const navTogglerb = document.querySelector(".buttonx");

navTogglerb.addEventListener('click', navToggles);

function navToggles(){

    const nav = document.querySelector(".ninth");
    nav.classList.toggle("closelist");
   
}



const navTogglerc = document.querySelector(".buttony");

navTogglerc.addEventListener('click', navToggley);

function navToggley(){

    const nav = document.querySelector(".ninth");
    nav.classList.toggle("closelist");
   
}


const navTogglerd = document.querySelector(".buttoncloser");

navTogglerd.addEventListener('click', navToggled);

function navToggled(){

    const nav = document.querySelector(".ads");
    nav.classList.toggle("showads");
   
}



var responsiveSlider = function() {

    var slider = document.getElementById("slider");
    var sliderWidth = slider.offsetWidth;
    var slideList = document.getElementById("slideWrap");
    var count = 1;
    var items = slideList.querySelectorAll("li").length;
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    
    window.addEventListener('resize', function() {
      sliderWidth = slider.offsetWidth;
    });
    
    var prevSlide = function() {
      if(count > 1) {
        count = count - 2;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
      else if(count = 1) {
        count = items - 1;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
    };
    
    var nextSlide = function() {
      if(count < items) {
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
      else if(count = items) {
        slideList.style.left = "0px";
        count = 1;
      }
    };
    
    next.addEventListener("click", function() {
      nextSlide();
    });
    
    prev.addEventListener("click", function() {
      prevSlide();
    });
    
    setInterval(function() {
      nextSlide()
    }, 8000);
    
    };
    
    window.onload = function() {
    responsiveSlider();  
    }
