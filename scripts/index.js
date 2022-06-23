


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



function showNotification(){

    const notification = new Notification("Message from HANDOUTS STORE!", {

        body: "We now have Handouts for Microbiology Second Semester",

        icon: "https://www.handouts.store/images/header.jpeg"

    });

    notification.onclick = (e) => {

        window.location.href = "https://www.handouts.store/handouts/100lvlsls/100LVLMCB/";

    };

}

console.log(Notification.permission);

if (Notification.permission === "granted"){

    showNotification();

}  else if (Notification.permission !== "denied"){

    Notification.requestPermission().then(permission => {

        if (permission === "granted"){

            showNotification();

        }

    });

}
