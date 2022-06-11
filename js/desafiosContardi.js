
// //**************************EJERCICIO UNO***************************/
// // debugger
// let nombre
// let apellido
// let edad
// nombre = "claudio"
// apellido = "contardi"
// edad = 42

// //**************************EJERCICIO DOS***************************/

// let nombre1 = prompt("ingrese su nombre")
// let apellido1 = prompt("ingrese su apellido")
// let edad1 = prompt(" ingrese su edad")
// resultado = confirm(`${nombre1}/${apellido1}/${edad1}`)
// console.log(resultado)

// //**************************EJERCICIO TRES***************************/

// alert("informacion de cliente BANCO PIRULO")
// let nombre2 = "claudio"
// let apellido2 = "contardi"
// let edad2 = 42
// let numeroCliente0 = 123456
// let montoDeuda = 4500
// deudor = `${nombre2}${apellido2}${edad2}${numeroCliente0}${montoDeuda}`
// console.info(`informacion confidencial: ${deudor}`)

// //**************************EJERCICIO CUATRO**************************/
// let nombreUsuario = "banco pirulo"
// if (nombreUsuario == "banco pirulo") {
//     console.log(`Bienvenido /${nombreUsuario}`)
// }

// //**************************EJERCICIO CINCO**************************/
// // debugger
// alert("BIENVENIDO A BANCO PIRULO Libro de Deudas")
// let nombreIngresado1 = prompt("ingrese nombre completo")
// let deudaApagar = 180000

// if (!nombreIngresado1) {
//     console.warn(`No ingreso nombre completo, ingrese aceptar para continuar`)
//     alert(`No ingreso nombre completo, ingrese aceptar para continuar`)
// } else {
//     alert(`hola ${nombreIngresado1}`)
//     let numeroCliente = prompt("ingrese numero de cliente")
//     numeroCliente = parseInt(numeroCliente)
//     alert(`numero de cliente ingresado: ${numeroCliente}`)
//     confirm(`este es su numero de cliente? ${numeroCliente}`)
//     resultado = confirm(`${nombreIngresado1}:quiere pagar su deuda?`)
//     console.info(`INFORMACION DEL DEUDOR : ${nombreIngresado1} /numero de cliente: ${numeroCliente} /deuda en pesos: ${deudaApagar}`)
// }

// //**************************EJERCICIO SEIS**************************/
// // debugger
// let subasta = parseInt(prompt("ingrese su oferta base 50 "))

// if (subasta < 100) {
//     console.warn("suba su apuesta")
//     confirm("quiere intentarlo nuevamente?")
// }
// else if (100 < subasta < 200) {
//     console.warn("suba su apuesta")
//     confirm("quiere intentarlo nuevamente?")
//     subasta= parseInt(prompt("ingrese numero"))
// }
// else if (subasta < 350) {
//     console.warn("suba su apuesta")
//     confirm("quiere intentarlo nuevamente?")
//     subasta= parseInt(prompt("ingrese numero"))
// }
// else if (subasta < 400) {
//     console.warn("suba su apuesta")
//     confirm("quiere intentarlo nuevamente?")
//     subasta= parseInt(prompt("ingrese numero"))
// }
// else if (subasta < 480) {
//     console.warn("suba su apuesta")
//     confirm("quiere intentarlo nuevamente?")
//     subasta= parseInt(prompt("ingrese numero"))
// }
// else if (subasta >= 480) {
//     console.log("gracias por subastar")
//     confirm("buen trato")
// }

// //**************************EJERCICIO SIETE**************************/
// // debugger
// let nombreIngresado2 = prompt("ingrese su nombre")

// if ((nombreIngresado2 != "") && ((nombreIngresado2 == "YO") || (nombreIngresado2 == "yo"))) {
//     alert(`hola:${nombreIngresado2}`)

// } else {
//     console.error("Error: ingreso nombre invalido")
//     alert("Error: ingresar nombre valido")

// }

//**************************EJERCICIO OCHO**************************/
// // debugger
// alert("bienvenidos a turnos a distancia.com")
// let horarioTurno = false

// while (!horarioTurno) {
//     let seleccion = parseInt(prompt("ingrese horario de turno: de 8 a 20 hs"))
//     if (seleccion  <= 20 && seleccion>8) {
//         horarioTurno = true
//         console.log("turno tomado en el horario:", seleccion)
//     }
// }

// **************************EJERCICIO NUEVE**************************/

// let frutas = prompt("que frutas desea comprar?")

// switch (frutas) {
//     case "pera":
//         console.log(`En stock 40kg ${frutas}`)
//         let compra1 = prompt("por favor ingrese los KG a comprar")
//         confirm(`usted selecciono en KG: ${compra1}`)
//         resultados = confirm(`gracias por comprar: ${frutas}`)
//         console.log("gracias por su compra")

//         break;
//     case "ciruela":
//         console.log(`En stock 70kg ${frutas}`)
//         let compra2 = prompt("por favor ingrese los KG a comprar")
//         confirm(`usted selecciono en KG: ${compra2}`)
//         resultados = confirm(`gracias por comprar: ${frutas}`)
//         console.log("gracias por su compra")
//         break;

//     case "manzana":
//         console.log(`En stock 120kg ${frutas}`)
//         let compra3 = prompt("por favor ingrese los KG a comprar")
//         confirm(`usted selecciono en KG: ${compra3}`)
//         resultados = confirm(`gracias por comprar: ${frutas}`)
//         console.log("gracias por su compra")
//         break;

//     case "kiwi":
//         console.log(`En stock 10kg ${frutas}`)
//         let compra4 = prompt("por favor ingrese los KG a comprar")
//         confirm(`usted selecciono en KG: ${compra4}`)
//         resultados = confirm(`gracias por comprar: ${frutas}`)
//         console.log("gracias por su compra")
//         break;

//     case "naranja":
//         console.log(`En stock 110kg ${frutas}`)
//         let compra5 = prompt("por favor ingrese los KG a comprar")
//         confirm(`usted selecciono en KG: ${compra5}`)
//         resultados = confirm(`gracias por comprar: ${frutas}`)
//         console.log("gracias por su compra")
//         break;

//     case "frutilla":
//         console.log(`En stock 40kg ${frutas}`)
//         let compra6 = prompt("por favor ingrese los KG a comprar")
//         confirm(`usted selecciono en KG: ${compra6}`)
//         resultados = confirm(`gracias por comprar: ${frutas}`)
//         console.log("gracias por su compra")
//         break;

//     case "uva":
//         console.log(`En stock 40kg ${frutas}`)
//         let compra7 = prompt("por favor ingrese los KG a comprar")
//         confirm(`usted selecciono en KG: ${compra7}`)
//         resultados = confirm(`gracias por comprar: ${frutas}`)
//         console.log("gracias por su compra")
//         break;

//     default:
//         console.warn("No tenemos esa fruta en stock")
//         break;
// }
// opcion 1 es  igual que la 2 pero se suma class
// function Catalogo(nombre, stock, precio) {
//     this.nombre = nombre
//     this.stock = stock
//     this.precio = precio
//     this.iva = 1.21
//     this.precioConIVA = function () {
//      let pf = this.precio * this.iva
//          return pf.toFixed(2)

//     }
// }



//opcion 2
// class Catalogo {
//     constructor(nombre, stock, precio) {
//         this.nombre = nombre
//         this.stock = stock
//         this.precio = precio
//         this.iva = 1.21
//         }
//     PrecioConIVA() {
//         let pf = this.precio * this.iva
//             return pf.toFixed(2)
//     }
//     descontarStock(cantidad) {
//         this.stock -= cantidad
//     }
// }

// const dog1 = new Catalogo("Labrador", 3, 110000)
// const dog2 = new Catalogo("caniche", 25, 120000)
// const dog3 = new Catalogo("rotweiler", 14, 180000)
// const dog4 = new Catalogo("sanbernardo",12, 160000)
// const dog5 = new Catalogo ("golden", 23, 170000)
//esto es botones para html pasar a html */
// {/* <button role="button" class="primary" onclick="listarProductos()">LISTAR PRODUCTOS</button>
            // <button role="button" class="secondary" onclick="buscarProducto()">BUSCAR PRODUCTO</button>
            // <button role="button" class="secondary" onclick="filtrarProductos()">FILTRAR PRODUCTOS</button>
            // <button role="button" class="contrast" onclick="calcularCarrito()">CALCULAR CARRITO</button> }*/

//operacion para buscar producto u objetos dentro de la lista del arrays***************************** */
            // function buscarProducto() {
            //     let aBuscar = prompt("Ingrese el nombre del producto a buscar:").toUpperCase()
            //         debugger
            //         //let resultado = productos.find((producto)=> producto.id === parseInt(aBuscar)) //**este es para buscar por numero de prodducto */
            //         let resultado = productos.find((producto)=> producto.nombre.includes(aBuscar)) //este es para buscar por nombre */
            //             console.clear()
            //             console.table(resultado)
            // }
 //operacion para buscar producto u objetos dentro de la lista del arrays***************************** */

// function agregarFruta() {
//     // debugger
//     let id = creoID()
//     let nombre = prompt("ingrese el nombre del producto")
//     let precio = parseInt(prompt("ingrese el precio:"))
//     frutas.push(new Producto(id, nombre, precio))
//     console.table(frutas)
    
// }
// function creoID() {
//     return parseInt(Math.random()* 10000) // funcion pora generar ID aleatorio
// }
//!  SECTOR NO PERTENECE A DESAFIO//  
//! DESAFIO DE ARRAYS PASAR A SIMULADOR.JS            