const navButtons = document.querySelectorAll('.nav-btn')
const circles = document.querySelectorAll('.bi-circle-fill')
const eye = document.querySelector('.menu-toggle')
const hiddenMenu = document.querySelector('.contact-menu')
const email = document.querySelector('.mailTo')
const galleryBtn = document.querySelector('#gallery-btn')
const gallery1 = document.getElementById('g1')
const gallery2 = document.getElementById('g2')


//Navigation Menu
let beforeId = 1;
let clicked = false;
hiddenMenu.style.visibility = "hidden"

navButtons.forEach(circle => {
    let removeClass;
    let addCLass;
    circle.addEventListener('click', e => {
        addCLass = document.getElementById(circle.id)
        removeClass = document.getElementById(beforeId)
        if(beforeId !== circle.id) {
            removeClass.classList.remove('selected')
            addCLass.classList.add('selected')
            beforeId = circle.id;
        }
    })
})

//Hidden Menu
eye.addEventListener('click', e => {
    clicked = !clicked;
    if(clicked) {
        eye.innerHTML = `
        <i style="color:white;" class="bi bi-eye-slash-fill"></i>
        `
        hiddenMenu.classList.remove('fade-out');
        hiddenMenu.classList.add('fade-in');
        hiddenMenu.style.visibility = "visible";
    }
    else {
        eye.innerHTML = `
        <i class="bi bi-eye-fill"></i>
        `
        hiddenMenu.classList.remove('fade-in');
        hiddenMenu.classList.add('fade-out');
        hiddenMenu.style.visibility = "hidden";
    }
})

//Galería
let g1Visible = true;
let g2Visible = false;

galleryBtn.addEventListener('click', e => {
    moveGallery();
})
function moveGallery() {
    g1Visible = !g1Visible;
    g2Visible = !g2Visible;
    if(g2Visible) {
        g2IsShowing();
    }
    else if(g1Visible) {
        g1IsShowing();
    }
}
function g2IsShowing() {
    gallery2.style.visibility = 'visible';
    gallery2.style.display = 'flex';
    gallery1.style.visibility = 'hidden';
    gallery1.style.display = 'none';
}
function g1IsShowing() {
    gallery1.style.visibility = 'visible';
    gallery1.style.display = 'flex';
    gallery2.style.visibility = 'hidden';
    gallery2.style.display = 'none';
    }

//Navegación con scroll + animación menú circulos

let light1 = document.getElementById('1');
let light2 = document.getElementById('2');
let light3 = document.getElementById('3');
let light4 = document.getElementById('4');
let light5 = document.getElementById('5');

document.onscroll = function() {
    let scrollDistance = document.documentElement.scrollTop;
    let scrollElementHeight = document.documentElement.scrollHeight;
    let sectionHeight = document.documentElement.clientHeight;

    let maxScroll = scrollElementHeight - sectionHeight;

    let scrollPercentage = (scrollDistance / maxScroll) * 100;
    console.log(scrollPercentage)
    if(scrollPercentage <= 13) {
        light1.classList.add('selected')
        light2.classList.remove('selected');
    }
    else if(scrollPercentage > 13 && scrollPercentage <= 30) {
        light1.classList.remove('selected');
        light3.classList.remove('selected');
        light2.classList.add('selected');
    }
    else if(scrollPercentage > 30 && scrollPercentage <= 58) {
        light2.classList.remove('selected');
        light4.classList.remove('selected');
        light3.classList.add('selected');
    }
    else if(scrollPercentage > 58 && scrollPercentage <= 82) {
        light3.classList.remove('selected');
        light5.classList.remove('selected');
        light4.classList.add('selected');
    }
    else if(scrollPercentage > 82 && scrollPercentage <= 100) {
        light4.classList.remove('selected');
        light5.classList.add('selected');
    }
}

