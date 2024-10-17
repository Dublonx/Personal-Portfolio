// sidenav
const menu = document.getElementById('bars');
const xmark = document.getElementById('xmark');
const sideNav = document.getElementById('sidenav');
const links = document.querySelectorAll('.navLink');

menu.addEventListener("click", () => {
    sideNav.classList.add("active");
});

xmark.addEventListener("click", () => {
    sideNav.classList.remove("active");
});

links.forEach(link => {
    link.addEventListener("click", () => {
        sideNav.classList.remove("active");
    });
});

// navbar background color
window.addEventListener("scroll", () => {
    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#024CAA";
    } else {
        navbar.style.backgroundColor = "#6A9AB0";
    }
});

// typejs
let type = new Typed('#text', {
    strings: ["Web Developer", "Video Editor", "Web Designer"],
    typeSpeed: 150,
    backSpeed: 50,
    loop: true
});

// button top
window.addEventListener("scroll", () => {
    const button = document.querySelector('#top');

    if (window.scrollY > 50) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// loading screen
setTimeout(() => {
    const loader = document.querySelector('.loader').style.display = "none";
    const content = document.querySelector('.content').style.display = "block";
}, 3000)