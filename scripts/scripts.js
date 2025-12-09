function hamburger() {
    let menu = document.getElementById("menu-links");
    let logo = document.getElementById("logo");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }


    logo.classList.remove("spin-once");
    
    void logo.offsetWidth;

    logo.classList.add("spin-once");
}
