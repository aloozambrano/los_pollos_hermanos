// Los pollos hermanos, crea tu propio menú delivery
// Cliente selecciona un items para su almuerzo
alert('Bienvenido a Los Pollos Hermanos' + '\n\nA continuación podrás elegir el menú a tu gusto!');

// ENTRADA  ENTRADA  ENTRADA  ENTRADA 

//Inicia el pedido con las entradas, contamos con 3 opciones
let elegirEntrada = prompt('Elija su entrada ingresando el número al que corresponda:' + '\n\n (1) Blue Ensalada' + '\n (2) Sky Pure' + '\n (3) Meth Sopa');

function Entrada(nombreEntrada, IDentrada, precioEntrada) {
  this.nombre = nombreEntrada;
  this.ID = IDentrada;
  this.precio = precioEntrada;
  this.agregarEntrada = function (numeroEntrada) {
    if (numeroEntrada == this.ID) {
      return 'Entrada: ' + this.nombre + ' $' + this.precio;
    }
  }
}

// OBJETOS - ENTRADA
let entrada1 = new Entrada('Blue Ensalada', 1, 5);
let entrada2 = new Entrada('Sky Pure', 2, 6);
let entrada3 = new Entrada('Meth Sopa', 3, 5);

// DECLARANDO FUNCION PARA UN CORRECTO INGRESO DE LA OPCION 
function seleccionarEntrada(numeroEntrada) {
  switch (numeroEntrada) {
    case "1":
      console.log(entrada1.agregarEntrada(numeroEntrada));
      break;
    case "2":
      alert(entrada2.agregarEntrada(numeroEntrada));
      break;
    case "3":
      alert(entrada3.agregarEntrada(numeroEntrada));
      break;
    default:
      alert("La entrada seleccionada es incorrecta");
      break;
  }
}

// // Bucle que repite la solicitud de ingreso de pedido hasta que el usuario ingrese "salir"
// while (elegirEntrada != 'ESC') {
//   seleccionarEntrada(elegirEntrada);
//   elegirEntrada = prompt('Elija su entrada ingresando el número al que corresponda:' + '\n\n (1) Blue Ensalada' + '\n (2) Sky Pure' + '\n (3) Meth Sopa' + '\n\n Escriba "ESC" para cancelar la orden');
// }

// PLATO DE FONDO  PLATO DE FONDO  PLATO DE FONDO  PLATO DE FONDO 

let elegirFondo = prompt('Elija su plato de fondo ingresando el número al que corresponda' + '\n\n (1) Tuco Taco' + '\n (2) Tortuga Veggie Burger' + '\n (3) Skinny Chicken Pete' + '\n (4) Badger Nuggets' + '\n (5) Skyler Royal Burger' + '\n (6) Salamanca Cheeseburger');

function Fondo(nombreFondo, IDfondo, precioFondo) {
  this.nombre = nombreFondo;
  this.ID = IDfondo;
  this.precio = precioFondo;
  this.agregarFondo = function (numeroFondo) {
    if (numeroFondo == this.ID) {
      return 'Plato de fondo: ' + this.nombre + ' $' + this.precio;
    }
  }
}

// OBJETOS - FONDO
let fondo1 = new Fondo('Tuco Taco', 1, 7);
let fondo2 = new Fondo('Tortuga Veggie Burger', 2, 10);
let fondo3 = new Fondo('Skinny Chicken Pete', 3, 12);
let fondo4 = new Fondo('Badger Nuggets', 4, 8);
let fondo5 = new Fondo('Skyler Royal Burger', 5, 15);
let fondo6 = new Fondo('Salamanca Cheeseburger', 6, 12);

// DECLARANDO FUNCION PARA UN CORRECTO INGRESO DE LA OPCION 
function seleccionarFondo(numeroFondo) {
  switch (numeroFondo) {
    case "1":
      alert(fondo1.agregarFondo(numeroFondo));
      break;
    case "2":
      alert(fondo2.agregarFondo(numeroFondo));
      break;
    case "3":
      alert(fondo3.agregarFondo(numeroFondo));
      break;
    case "4":
      alert(fondo4.agregarFondo(numeroFondo));
      break;
    case "5":
      alert(fondo5.agregarFondo(numeroFondo));
      break;
    case "6":
      alert(fondo6.agregarFondo(numeroFondo));
      break;
    default:
      alert("El plato de fondo seleccionado es incorrecta");
      break;
  }
}

// // Bucle que repite la solicitud de ingreso de pedido hasta que el usuario ingrese "salir"
// while (elegirFondo != 'ESC') {
//   seleccionarFondo(elegirFondo);
//   elegirFondo = prompt('Elija su plato de fondo ingresando el número al que corresponda' + '\n\n (1) Tuco Taco' + '\n (2) Tortuga Veggie Burger' + '\n (3) Skinny Chicken Pete' + '\n (4) Badger Nuggets' + '\n (5) Skyler Royal Burger' + '\n (6) Salamanca Cheeseburger' + '\n\n Escriba "ESC" para cancelar la orden');
// }

// POSTRE  POSTRE  POSTRE  POSTRE

let elegirPostre = prompt('Elija el postre ingresando el número al que corresponda' + '\n\n (1) White Lemon Pie' + '\n (2) Pinkman Cheesecake' + '\n (3) Gus Chocolate Cake');

function Postre(nombrePostre, IDpostre, precioPostre) {
  this.nombre = nombrePostre;
  this.ID = IDpostre;
  this.precio = precioPostre;
  this.agregarPostre = function (numeroPostre) {
    if (numeroPostre == this.ID) {
      return 'Postre: ' + this.nombre + ' $' + this.precio;
    }
  }
}

// OBJETOS - POSTRE
let postre1 = new Postre('White Lemon Pie', 1, 3);
let postre2 = new Postre('Pinkman Cheesecake', 2, 5);
let postre3 = new Postre('Gus Chocolate Cake', 3, 6);

// DECLARANDO FUNCION PARA UN CORRECTO INGRESO DE LA OPCION 
function seleccionarPostre(numeroPostre) {
  switch (numeroPostre) {
    case "1":
      alert(postre1.agregarPostre(numeroPostre));
      break;
    case "2":
      alert(postre2.agregarPostre(numeroPostre));
      break;
    case "3":
      alert(postre3.agregarPostre(numeroPostre));
      break;
    default:
      alert("El plato de fondo seleccionado es incorrecta");
      break;
  }
}

// ARRAY QUE CAPTA LOS PRODUCTOS SELECCIONADOS CON METODO PUSH
let orden1 = [];

console.log(orden1.push(seleccionarEntrada(elegirEntrada)));
console.log(orden1.push(seleccionarFondo(elegirFondo)));
console.log(orden1.push(seleccionarPostre(elegirPostre)));
console.log(orden1);
// // Bucle que repite la solicitud de ingreso de pedido hasta que el usuario ingrese "salir"
// while (elegirPostre != 'ESC') {
//   seleccionarPostre(elegirPostre);
//   elegirPostre = prompt('Elija su plato de fondo ingresando el número al que corresponda' + '\n\n (1) White Lemon Pie' + '\n (2) Pinkman Cheesecake' + '\n (3) Gus Chocolate Cake' + '\n\n Escriba "ESC" para cancelar la orden');
// }



