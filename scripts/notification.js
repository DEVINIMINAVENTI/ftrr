function showNotification(){
    const notification = new Notification("Message from HANDOUTS STORE!", {
        body: "We now have Handouts for Microbiology Second Semester",
        icon: "https://www.handouts.store/images/header.jpeg"
    });
    notification.onclick = (e) => {
        window.location.href = "https://www.handouts.store/handouts/100lvlmcb/";
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