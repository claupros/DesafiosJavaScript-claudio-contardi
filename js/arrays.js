
// class Producto {
//     constructor(id, nombre, importe) {
//         this.id = id
//         this.nombre = nombre
//         this.importe = importe
//     }
//     precioFinal() {
//         return parseFloat((this.importe * IVA).toFixed(2))
//     }
// }

function listaproducto() {
    console.table(frutas)
}

 function agregarProductos() {
     let nuevoProducto = prompt("ingresa un nuevo producto")
     frutas.push(nuevoProducto)
     console.clear()
     console.table(frutas)
}



 function quitarProducto() {
     let resultado = frutas.pop()
     alert("se elimino el producto")
 }

 function buscarProducto() {
    let aBuscar = prompt("Ingrese el nombre del producto a buscar:").toUpperCase()
        // debugger
//         //let resultado = productos.find((producto)=> producto.id === parseInt(aBuscar)) //**este es para buscar por numero de prodducto */
        let resultado = frutas.includes(aBuscar) //*este es para buscar por nombre */
            // console.clear()
     if (resultado) {
         console.log(aBuscar,"se encuentra en stock.")
     } else {
         console.warn(aBuscar, "Faltante en stock.")
     }
}

function comprar() {
    let productoComprado = prompt("ingresa producto a comprar").toUpperCase()
    carrito.push(productoComprado)
    console.clear()
    console.table(carrito)
}
// function creoID() {
//     return parseInt(Math.random()* 10000) // funcion pora generar ID aleatorio
// }

