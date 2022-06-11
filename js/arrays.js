

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




