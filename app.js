const menu = document.querySelector(".toggle");
const linksConteiner = document.querySelector(".links-conteiner");
const button = document.querySelector(".menu-button");
const date = document.getElementById("date");
const links = document.getElementById("nav-list");
const nav = document.querySelector(".navigation-bar");
const backToTop = document.querySelector(".back-top");
const navLinks = document.querySelectorAll(".scroll-link");
const services = document.getElementById("services");

menu.addEventListener("click", function(){
    const conteinerHeight = linksConteiner.getBoundingClientRect().height;
    const listHeight = links.getBoundingClientRect().height;

    if(conteinerHeight === 0){
        linksConteiner.style.height = `${listHeight}px`;
    } else {
        linksConteiner.style.height = `0px`;
    }

    button.classList.toggle("menu-buttonx");
})

date.innerHTML = new Date().getFullYear();

window.addEventListener("scroll", function(){
    const scrollHeight = window.scrollY;
    const navHeigth = nav.getBoundingClientRect().height;
    const position = services.offsetHeight - navHeigth;
    if (scrollHeight > navHeigth){
        nav.classList.add("fixed-nav");
    } else {
        nav.classList.remove("fixed-nav");
    }
    if (scrollHeight > position){
        backToTop.classList.add("fixed-back-to-top");
    } else {
        backToTop.classList.remove("fixed-back-to-top");
    }
})

navLinks.forEach(function(link){
    link.addEventListener("click", function(e){
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        const navHeigth = nav.getBoundingClientRect().height; 
        const position = element.offsetTop - navHeigth;

        window.scrollTo({
            left: 0,
            top: position,
        })

        if(window.innerWidth <= 1000){
        linksConteiner.style.height = `0px`;
        button.classList.remove("menu-buttonx");
        }
        if(window.innerWidth > 1000){
            linksConteiner.style.height = `auto`;
        }
    })
})
