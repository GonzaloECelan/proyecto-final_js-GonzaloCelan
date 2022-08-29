// pop-up inicio

Swal.fire({
    imageUrl: 'banner/Mango-Logo.png',
    imageWidth: 300,
    imageHeight: 120,
    imageAlt: 'Logo empresa',
    title: 'Desea resivir nuetras notificaciones?',
    input: 'email',
    inputPlaceholder: 'Ingrese su direccion',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Exelente!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonText:
      '<i class="fa fa-thumbs-down"></i>',
    cancelButtonAriaLabel: 'Thumbs down'

    
  })




  // API USUARIO
  
  fetch("https://api.openweathermap.org/data/2.5/weather?q=Mendoza&appid=1fe0bf70bf8af8a797c53f96f72c434f")
  .then(response => response.json())
  .then(data => {

    console.log("ciudad:", data.name)
    console.log("coodernadas:", "lon", data.coord.lon, "lat", data.coord.lat)
    console.log(data)}

    )
    let Ubicacion = "Mendoza";
    let Coordenadas_lon = "-68.8272";
    let Coordenadas_lat = "-32.8908";
    

   
  const dato_usuario = document.getElementById("usuario_dt");

  dato_usuario.innerHTML = `
  <span>Ciudad:</span>
  <p>${Ubicacion}</p>
  <span>- Coordenadas:</span>
  <p>${Coordenadas_lon}</p>
  <p>${Coordenadas_lat}</p>`
  
  


  // slider automatico
  const carrusel = document.querySelector(".marcas-items");

let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let step = 1;
const start = () => {
  intervalo = setInterval(function () {
    carrusel.scrollLeft = carrusel.scrollLeft + step;
    if (carrusel.scrollLeft === maxScrollLeft) {
      step = step * -1;
    } else if (carrusel.scrollLeft === 0) {
      step = step * -1;
    }
  }, 15);
};

const stop = () => {
  clearInterval(intervalo);
};

carrusel.addEventListener("mouseover", () => {
  stop();
});

carrusel.addEventListener("mouseout", () => {
  start();
});

start();