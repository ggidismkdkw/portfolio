'use strict';

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

const navbarMenu = document.querySelector('.navbar_menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    navbarMenu.classList.remove('open');
    scrollIntoView(link);
});

const  navbarToggleBtn = document.querySelector('.navbar_toggle_btn');
navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
});

const homeContactBtn = document.querySelector('.home_contact');
homeContactBtn.addEventListener('click', (event) => {
    scrollIntoView('#contact');
});

const home = document.querySelector('.home_container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

const topBtn = document.querySelector('.top_btn');
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight / 2) {
        topBtn.classList.add('visible');
    } else {
        topBtn.classList.remove('visible');
    }
});

topBtn.addEventListener('click', () => {
    scrollIntoView('#home');
});

const workBtnContainer = document.querySelector('.work_categories');
const projectContainer = document.querySelector('.work_projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    console.log(filter);
    if (filter == null) {
        return;
    }

    const active = document.querySelector('.category_btn.selected');
    active.classList.remove('selected');
    const target = 
        e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    target.classList.add('selected');

    projectContainer.classList.add('anim_out');
    setTimeout(() => {
        projects.forEach((project) => {
            console.log(project.dataset.type);
        if (filter === '*' || filter === project.dataset.type) {
            project.classList.remove('invisible');
        } else {
            project.classList.add('invisible');
        }
    });
    projectContainer.classList.remove('anim_out');
    }, 300);
});

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: 'smooth' });
}