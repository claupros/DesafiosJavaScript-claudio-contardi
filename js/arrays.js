
// function ejecutarArray() {
//     // console.table (frutas)
//     for (let i = 0; i < frutas.length; i++)
//         console.log (frutas[i])
// }



class Producto {
    constructor(id, nombre, importe){
        this.id = id
        this.nombre = nombre
        this.importe = importe 
    } 
    precioTotal() {
        return parseFloat((this.importe * IVA).toFixed(2))
    }
}

function listaproducto() {
    console.table(frutas)
}



 function agregarProductos() {
     let nuevoProducto = prompt("ingresa un nuevo producto")
     frutas.push(nuevoProducto)
     console.clear()
     console.table(frutas)
}

function buscarProducto() {
    let aBuscar = prompt("Ingrese el nombre del producto a buscar:").toUpperCase()
        debugger
        //let resultado = productos.find((producto)=> producto.id === parseInt(aBuscar)) //**este es para buscar por numero de prodducto */
        let resultado = productos.find((producto)=> producto.nombre.includes(aBuscar)) //**este es para buscar por nombre */
            console.clear()
            console.table(resultado)
}

 function quitarProducto() {
     let resultado = frutas.pop()
     alert("se elimino el producto")
 }




