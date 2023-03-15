// const productos = [
//     {nombre: "1 -Tortas Clasicas", precio: 5300},
//     {nombre : "2 -Tortas de Diseño", precio: 9000},
//     {nombre : "3 -Galletitas", precio: 2000},
// ];

// let carrito = [];


// document.getElementById("prueba").onclick = function() {
//     // preventDefault();
// let seleccion = prompt("Hola, como esta? Desea comprar un producto?");
// while( seleccion != "si" && seleccion != "no"){
//     alert("porfavor ingrese si o no")
//     seleccion = prompt("Hola, como esta? desea comprar un producto?")
// }
// if (seleccion == "si"){
//     alert("A continuacion estos son nuestros productos")
//     let mostrarProductos = productos.map((producto) => "   -" + producto.nombre + "  " + producto.precio + "$")
//     alert(mostrarProductos);
// } else if (seleccion == "no"){
//     alert("Bueno matate entonces");
// }
// while( seleccion != "no"){
//     let producto = prompt(" agrega un producto a tu carrito con el numero identificador")
//     let precio = 0
//     if ( producto == 1 || producto == 2 || producto == 3 ){
//         switch(producto){
//             case "1":
//                 precio = 5300
//                 break;
//             case "2":
//                 precio = 9000
//                 break;
//             case "3":
//                 precio = 2000
//                 break;
//         }
//         let unidades = parseFloat(prompt("Cuantas unidades quiere llevar?"))
//         carrito.push({
//             producto,precio,unidades
//         })
//         console.log(carrito)
//     } else {
//         alert("no este momento no tenemos ese producto o tipeo mal el que queria!")
//     }
//     seleccion = prompt(" Desea seguir comprando?")
//     while(seleccion == "no"){
//         alert("Gracias por venir, Gracias por estar.")
//         carrito.forEach((carritoFinal) =>{
//             alert(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
//              Total a paga por producto ${carritoFinal.unidades * carritoFinal.precio}`)

//         })
//     break; 
//     }             
//     alert(`Total a pagar= ${carrito.precio * carrito.unidad} $ `)
// }
// };

const productos = [
    {nombre: "1 -Tortas Clasicas", precio: 5300},
    {nombre : "2 -Tortas de Diseño", precio: 9000},
    {nombre : "3 -Galletitas", precio: 2000},
];

let carrito = [];

document.getElementById("prueba").onclick = function() {
  let seleccion = prompt("Hola, como está? ¿Desea comprar un producto?");
  while( seleccion != "si" && seleccion != "no") {
    alert("Por favor ingrese si o no")
    seleccion = prompt("Hola, como está? ¿Desea comprar un producto?")
  }
  if (seleccion == "si") {
    alert("A continuación estos son nuestros productos");
    let mostrarProductos = productos.map((producto) => "   -" + producto.nombre + "  " + producto.precio + "$");
    alert(mostrarProductos);
  } else if (seleccion == "no") {
    alert("Bueno xd");
  }

  while (seleccion != "no") {
    let producto = prompt("Agregue un producto a su carrito con el número identificador");
    let precio = 0
    if (producto == 1 || producto == 2 || producto == 3) {
      switch(producto){
        case "1":
          precio = 5300
          break;
        case "2":
          precio = 9000
          break;
        case "3":
          precio = 2000
          break;
      }
      let unidades = parseFloat(prompt("¿Cuántas unidades quiere llevar?"));
      carrito.push({
        producto,
        precio,
        unidades
      });
      console.log(carrito);
    } else {
      alert("No tenemos ese producto o tipeó mal el que quería")
    }

    seleccion = prompt("¿Desea seguir comprando?");

    if (seleccion === "no") {
      let totalAPagar = 0;
      carrito.forEach((carritoFinal) =>{
        totalAPagar += carritoFinal.unidades * carritoFinal.precio;
        alert(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, Total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}$`);
      });
      alert(`Total a pagar= ${totalAPagar}$`);
      alert("Gracias por su compra");
      carrito = [];
    }
  }
};


