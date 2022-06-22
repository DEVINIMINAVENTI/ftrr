


const navTogglera = document.querySelector(".nav-toggler");

navTogglera.addEventListener('click', navToggle);

function navToggle(){

    const nav = document.querySelector(".navbar");
    nav.classList.toggle("navbarbaa");
   
}


const navTogglerb = document.querySelector(".buttonx");

navTogglerb.addEventListener('click', navToggles);

function navToggles(){

    const nav = document.querySelector(".shops");
    nav.classList.toggle("showshops");
   
}