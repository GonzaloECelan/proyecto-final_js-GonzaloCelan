



let ingresar = prompt("¡Bienvenidos!. Desea realizar una compra: ingrese Si o No.").toLowerCase();

while( ingresar != "no"){

let catalogo = [
    {prenda1: "buzo", talle: "s,m,l,xl", precio1:7500 },
    {prenda2: "campera", talle: "s,m,l,xl", precio2:9000 },
    {prenda3: "remera", talle: "s,m,l,xl", precio3:3000 },
    {prenda4: "chaleco",talle: "s,m,l,xl", precio4:5500 },
]


let usuario_ingreso = prompt("Seleccione el producto; Buzo, Campera, Remera, Chaleco.").toLowerCase();

function buscar_prenda (catalogo){


    if ( usuario_ingreso == "buzo"){
        alert("¡Producto disponible!");
        return catalogo.prenda1 == "buzo";
        
    }

    else if ( usuario_ingreso == "campera"){
        alert("¡Producto disponible!");
        return catalogo.prenda2 == "campera";
    }

    else if ( usuario_ingreso == "remera"){
        alert("¡Producto disponible!");
        return catalogo.prenda3 == "remera";
    }

    else if ( usuario_ingreso == "chaleco"){
        alert("¡Producto disponible!");
        return catalogo.prenda4 == "chaleco";
    }

    else (
        alert("¡Prenda no encontrado!")
    )
}



let resultado_busqueda = catalogo.find(buscar_prenda);
console.log("Prenda seleccionada;", resultado_busqueda);


let cantidad = prompt("Ingrese cantidad que necesita del producto.");
    console.log("Cantidad ingresada:", cantidad);


    function suma_producto (){
        
    

    if( usuario_ingreso == "buzo"){

        let suma = 7500 * parseInt(cantidad);
        console.log("Valor total:", suma);
        alert("El valor total de la compra es:" + " " + "$" + suma);

    }

    else if( usuario_ingreso == "campera"){
        let suma = 9000 * parseInt(cantidad);
        console.log("Valor total:", suma);
        alert("El valor total de la compra es:" + " " + "$" +suma);
    

    }

    else if( usuario_ingreso == "remera"){
        let suma = 3000 * parseInt(cantidad);
        console.log("Valor total:", suma);
        alert("El valor total de la compra es:" + " " + "$" +suma);
    

    }

    else if( usuario_ingreso == "chaleco"){
        let suma = 5500 * parseInt(cantidad);
        console.log("Valor total:", suma);
        alert("El valor total de la compra es:" + " " + "$" +suma);
    

    }
}

suma_producto();

alert("¡Muchas gracias por su compra!");

    ingresar = prompt("Desea seguir comprando; Si o No.")
}

