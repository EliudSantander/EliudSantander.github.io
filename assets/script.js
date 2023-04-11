const toggleMenuElement = document.getElementById('toggle_menu');
const mainMenuElement = document.getElementById('main-menu');
const inicio = document.getElementById('inicio-link');
const proyectos = document.getElementById('projects-link');
const contacto = document.getElementById('contact-link');

toggleMenuElement.addEventListener('click', ()=>{
    mainMenuElement.classList.toggle('main_menu--show');
});

inicio.addEventListener('click', ()=>{
    mainMenuElement.classList.toggle('main_menu--show');
});

proyectos.addEventListener('click', ()=>{
    mainMenuElement.classList.toggle('main_menu--show');
});

contacto.addEventListener('click', ()=>{
    mainMenuElement.classList.toggle('main_menu--show');
});