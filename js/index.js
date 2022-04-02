const pre_carregamento = document.querySelector(".pre-carregamento");
const header = document.querySelector('.js-header');
const linksSection = document.querySelectorAll('.js-nav li a');
const btnSobre = document.querySelector('#btn-sobre');
const btnSaibaMais = document.querySelector('.btn-saiba-mais');
const btnMenuMobile = document.getElementById('js-btn-menu-mobile');
const overlayMenu = document.querySelector('.js-overlay');
const iconX = document.getElementById('icon-x');

console.log(btnMenuMobile)
function preCarregamento(){
    pre_carregamento.style.opacity = "0";
    setTimeout(() =>{
        pre_carregamento.style.display = "none";
    }, 500);
}

function fixedMenu(){
    if (window.pageYOffset >= 80){
        header.classList.add('fixed-menu');
    } else {
        header.classList.remove('fixed-menu');
    }
}

function scrollToSection(event){
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const positionInicialSection = section.offsetTop;
    if ((href != './trabalhe.html') && (href != './index.html')){
        event.preventDefault();
        console.log('estuou na função')
        window.scrollTo({
            top: positionInicialSection - 100, // 128 corresponde ao tamanho do header que sera descontado (8rem * 16)
            behavior: 'smooth',
        })
    }
}

window.addEventListener('scroll', fixedMenu);

linksSection.forEach(link => {
    link.addEventListener('click', scrollToSection);
})

btnSobre.addEventListener('click', scrollToSection);
btnSaibaMais?.addEventListener('click', scrollToSection);
iconX.addEventListener('click',(() => {
    document.documentElement.classList.toggle('open-menu-mobile');
}));
overlayMenu.addEventListener('click',(() => {
    document.documentElement.classList.toggle('open-menu-mobile');
}));
btnMenuMobile.addEventListener('click', (() => {
    document.documentElement.classList.toggle('open-menu-mobile');
}));