// variables boton añadir carrito

let contenedor1 = document.querySelector(".contenedor-general");
let contenedor2 = document.querySelector(".contenedor-general2");
let contenedor3 = document.querySelector(".contenedor-general3");
let contenedor4 = document.querySelector(".contenedor-general4");
let contenedor5 = document.querySelector(".contenedor-general5");
let contenedor6 = document.querySelector(".contenedor-general6");
let contenedorCarrito = document.querySelector(".card-items");
let preciototal = document.querySelector(".price-total");
let contador = document.querySelector(".contador");


// eventos

contenedor1.addEventListener("click", addproducto); 
contenedor2.addEventListener("click", addproducto);
contenedor3.addEventListener("click", addproducto);
contenedor4.addEventListener("click", addproducto);
contenedor5.addEventListener("click", addproducto);
contenedor6.addEventListener("click", addproducto);
contenedorCarrito.addEventListener("click", borrarproducto);
    
let CarritoCompra =[];
let total = 0;
let contadorinicio = 0;


// Funciones

function addproducto(e){
    
   

    if(e.target.classList.contains("btn")){
        console.log(e.target);
        let selecproducto = e.target.parentElement;

        contenido(selecproducto);
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Producto añadido'
          })
        
          let arregloJSON = JSON.stringify(CarritoCompra);
          localStorage.setItem("Compra-usuario", arregloJSON);
          Comprausuario = localStorage.getItem("Compra-usuario");
          console.log("Compra usuario storage:", JSON.parse(Comprausuario));


    }


}

function borrarproducto(e){

    if(e.target.classList.contains("delete-product")){
        let borrarId = e.target.getAttribute('data-id');

        CarritoCompra.forEach(producto => {
            if (producto.id == borrarId) {
                let priceReduce = parseInt(producto.precio) * parseInt(producto.cantidad);
                total =  parseInt(total) - parseInt(priceReduce);
                total = total.toFixed(3);
            }
        });
        
        CarritoCompra = CarritoCompra.filter(producto => producto.id !== borrarId);
        contadorinicio--;

    }
    if (CarritoCompra.length === 0) {
        preciototal.innerHTML = 0;
        contador.innerHTML = 0;
    }

    console.log("Carrito de compra", CarritoCompra);

    cargarHTML();

}

function contenido (producto){
    let infoProducto = {
        // imagen: producto.querySelector(".img-prod[src]"),
        titulo: producto.querySelector(".datos .descripcion").textContent,
        precio: producto.querySelector(".datos .precio").textContent,
        id: producto.querySelector("button").getAttribute("data-id"),
        cantidad: 1,

    }


    total = parseInt(total) + parseInt(infoProducto.precio);
    total = total.toFixed(3);

    let cantidadmas = CarritoCompra.some(producto => producto.id == infoProducto.id);
    if (cantidadmas) {
        let pro = CarritoCompra.map(producto => {
            if (producto.id == infoProducto.id) {
                producto.cantidad++;
                return producto;
            } else {
                return producto
            }
        });
        CarritoCompra = [...pro];
    } else {
        CarritoCompra = [...CarritoCompra,infoProducto];
        contadorinicio ++;
    }

    console.log("Carrito de compra", CarritoCompra);

    cargarHTML();

}

function cargarHTML(){

    limpiarHTML();

    CarritoCompra.forEach(producto => {
        let {titulo, precio, id, cantidad} = producto;
        let fila = document.createElement("div");
        fila.classList.add("item");
        fila.innerHTML = `
            <img src="" alt="">
            <div class="item-content">
                <h5>${titulo}</h5>
                <h5 class="cart-price">${precio}</h5>
                <h6>Cantidad: ${cantidad}</h6>
            </div>
            <span class="delete-product" data-id="${id}">X</span>
        `;

        contenedorCarrito.appendChild(fila);
        preciototal.innerHTML = total;
        contador.innerHTML = contadorinicio;
    })
}

function limpiarHTML(){
    contenedorCarrito.innerHTML = '';
}

