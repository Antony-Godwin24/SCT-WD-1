// Change navbar background when scrolling
window.addEventListener("scroll", function() {
    let navbar = document.getElementById("nav");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
