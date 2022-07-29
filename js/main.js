
// let producto = [{id: 1, marca:"tommy hilfiger", precio:36000, material:"cuero"},
//                 {id: 2, marca:"tommy hilfiger", precio:32000, material:"tela"},
//                 {id: 3, marca:"tommy hilfiger", precio:50000, material:"acero inoxidable"},
//                 {id: 4, marca:"tommy hilfiger", precio:55000, material:"acero inoxidable"},
//                 {id: 5, marca:"tommy hilfiger", precio:30000, material:"cuacho"},
//                 {id: 6, marca:"tommy hilfiger", precio:38000, material:"acero inoxidable"},
//                 {id: 7, marca:"tommy hilfiger", precio:38000, material:"acero inoxidable"},
//                 {id: 8, marca:"tommy hilfiger", precio:47000, material:"caucho"},
//                 {id: 9, marca:"fossil", precio:50000, material:"acero inoxidable"},
//                 {id: 10, marca:"fossil", precio:58000, material:"acero inoxidable"},
//                 {id: 11, marca:"citzen", precio:63000, material:"acero inoxidable"},
//                 {id: 12, marca:"citzen", precio:60000, material:"caucho"},
//                 ];



let carrito = [];


let btn_carrito = document.querySelectorAll("#btn-compra");

for( let boton of btn_carrito){

    boton.addEventListener("click" , agregar_carrito);

}



function agregar_carrito(){


let nombre_producto = document.querySelector("#descripcion").textContent;
let precio_producto = document.querySelector("#precio").textContent;
    
let producto = {

    nombre: nombre_producto,
    precio: precio_producto,
    cantidad: 1

};

carrito.push(producto);
console.log("carrito de compras", carrito);
let enJSON = JSON.stringify(producto);    
localStorage.setItem("Compra", enJSON);


}



