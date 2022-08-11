let slider = document.querySelector("#slider");
let sliderseccion = document.querySelectorAll(".slider-seccion");
let sliderseccionultimo = sliderseccion[sliderseccion.length -1];

let boton_derecha = document.querySelector(".slider_btn-r");
let boton_izquierda = document.querySelector(".slider_btn-l");

slider.insertAdjacentElement('afterbegin', sliderseccionultimo);

function moverD (){

    let sliderseccionprimero = document.querySelectorAll(".slider-seccion")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.style.marginLeft = "-100%";
        slider.insertAdjacentElement('beforeend', sliderseccionprimero);

    },500);

    
}

boton_derecha.addEventListener("click", function(){
    moverD();
})

function moverI (){
    let sliderseccion = document.querySelectorAll(".slider-seccion");
    let sliderseccionultimo = sliderseccion[sliderseccion.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.style.marginLeft = "-100%";
        slider.insertAdjacentElement('afterbegin', sliderseccionultimo);

    },500);
    
}

boton_izquierda.addEventListener("click", function(){
    moverI();
})

setInterval(function(){
    moverD();
}, 7000);



// carrusel

// const carrusel = document.querySelector(".carrusel-items");

// let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
// let intervalo = null;
// let step = 1;
// const start = () => {
//   intervalo = setInterval(function () {
//     carrusel.scrollLeft = carrusel.scrollLeft + step;
//     if (carrusel.scrollLeft === maxScrollLeft) {
//       step = step * -1;
//     } else if (carrusel.scrollLeft === 0) {
//       step = step * -1;
//     }
//   }, 10);
// };

// const stop = () => {
//   clearInterval(intervalo);
// };

// carrusel.addEventListener("mouseover", () => {
//   stop();
// });

// carrusel.addEventListener("mouseout", () => {
//   start();
// });

// start();