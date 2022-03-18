const showBtn = document.querySelector('.navBtn');
const topNav = document.querySelector('.top-nav');

showBtn.addEventListener('click', function(){
    if(topNav.classList.contains('showNav')){
        topNav.classList.remove('showNav');
        showBtn.innerHTML = '<i class = "fas fa-bars"></i>';
    } else {
        topNav.classList.add('showNav');
        showBtn.innerHTML = '<i class = "fas fa-times"></i>';
    }
});

function abrirNuevoTab(url) {
    // Abrir nuevo tab
    var win = window.open(url, '_blank');
    // Cambiar el foco al nuevo tab (punto opcional)
    win.focus();
  }
  $('#luchi.inst').click(function(){
    abrirNuevoTab('https://www.instagram.com/luisiana.dark')
  })

  function abrirNuevoTab(url) {
    // Abrir nuevo tab
    var win = window.open(url, '_blank');
    // Cambiar el foco al nuevo tab (punto opcional)
    win.focus();
  }
  $('#luchi').click(function(){
    abrirNuevoTab('https://lhuisruiz.github.io/lu/')
  })

/* Lightbox */
var lightbox = new SimpleLightbox('.gallery a', { /* options */ });

  
//lu inst
let LuInsta = document.getElementById("LuInsta");
LuInsta.addEventListener("click",()=>{
    location.href="https://www.instagram.com/luisiana.dark";
})
//lu mas fotos
let lhu = document.getElementById("LuMasFotos");

LuMasFotos.addEventListener("click",()=>{
    location.href="https://lhuisruiz.github.io/lu/";
})
//fran mas foto
let franmas = document.getElementById("franmas");
franmas.addEventListener("click",()=>{
    location.href="https://lhuisruiz.github.io/fran/";
})
//fran insta
let instfran = document.getElementById("instfran");
instfran.addEventListener("click",()=>{
    location.href="https://www.instagram.com/franco.rios13";
})


