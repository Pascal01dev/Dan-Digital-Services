
const btn = document.querySelector(".menu-btn");
const menu = document.querySelector("#navigations");
const cls = document.querySelector(".cls");

const navAnchor1 = document.querySelector(".navAnchor1");
const navAnchor2 = document.querySelector(".navAnchor2");
const navAnchor3 = document.querySelector(".navAnchor3");
const navAnchor4 = document.querySelector(".navAnchor4");

const abc = document.gete

btn.addEventListener("click", (e) =>{
    menu.style.display = "grid";
});

cls.addEventListener("click", (e) =>{
    menu.style.display = "none";
});


navAnchor1.addEventListener("click", (e) =>{
    menu.style.display = "none";
});

navAnchor2.addEventListener("click", (e) =>{
    menu.style.display = "none";
});

navAnchor3.addEventListener("click", (e) =>{
    menu.style.display = "none";
});

navAnchor4.addEventListener("click", (e) =>{
    menu.style.display = "none";
});
