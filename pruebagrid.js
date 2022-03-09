let nombre = "Pablo";

let edad;
console.log("La edad es:", edad);

edad = 43;
console.log("La edad es:", edad);

const IVA = 22;
console.log("El impuesto es", IVA);

const nuevoIVA = IVA + 10;
console.log("El impuesto es", nuevoIVA);

let alumno = {
    edad: 35,
    nombre: "Augusto",
    };
    let alumno1 = {
    edad:42,
    nombre: "Pedro",
    };
    let listaDeAlumnos = [alumno, alumno1, {}];
    console.log("lista", listaDeAlumnos);

const numeroAleatorio = Math.round(Math.random()*10);  

function saludar(){
    console.log('Hola, como estas?🌝');
}

saludar();

function calculoArea (ancho, alto){
    return ancho*alto;
}

const area = calculoArea(10,5);
console.log(area)

function saludarPorNombre(nombre){
    console.log('Hola', nombre);
}

saludarPorNombre('Pablo');

function sumarDosNumeros (a,b){
    console.log(a+b);
}
sumarDosNumeros(10,15);


function restarDosNumeros (a,b){
    return (a-b);
}
const resta = restarDosNumeros(10,10);
console.log(resta)

/*Crear una funcion con el valor de retorno explicito */
function restarDos (a,b){
    const resultadoDeLaResta = a-b;
    return resultadoDeLaResta;
}
/*Asignar el valor de una funcion a una variable */
let resultado = restarDos(10,150);
console.log(resultado);

function sumarDos (a, b) {
    const resultadoDeLaSuma = a +b;
    console.log (resultadoDeLaSuma);
}
sumarDos (10, 10);  // 20

let tareas = [];

function nuevaTarea(titulo, id, tipoDeTarea, completa){
    const tareaParaAgregar = {
        descripcion: titulo,
        id: id,
        tipoDeTarea: tipoDeTarea,
        completa: completa
    }
    tareas.push(tareaParaAgregar);
}

const barraBusqueda = document.getElementById('barra-busqueda');
const botonComprar = document.getElementById('animado');
const listas = document.getElementById('lista');
console.log(barraBusqueda, botonComprar, listas);


function crearLi (descripcion, prioridad){
    /*Crea un nuevo elemento li y lo guarda en una variable */
    const elLi = document.createElement('li');
    /*Cambiar el texto interno del li*/
    elLi.textContent = descripcion;
    /*Agregar una clase CSS al li */
    elLi.classList.add(prioridad);
    /*Agregar el li a la lista */
    listas.appendChild(elLi)

    console.log(elLi);
}

crearLi("Armar el html", "alta");
crearLi("Armar el CSS", "baja");

botonComprar.addEventListener('click', function () {
    alert("El usuario hizo clic en el boton");
    crearLi("nueva descripcion", "alta");
});

const nomb = document.getElementById('Name');
const codigo = document.getElementById('Code');
const precio = document.getElementById('Price');
const descripcion = document.getElementById('Desc');
const boton = document.getElementById('agregar');
const stock = document.getElementById('lista-stock');
const contenedor = document.createElement('details');

function agregarItem(nomb, codigo, precio, descripcion){
    const contenedor = document.createElement('article');
    const name = document.createElement('h1');
    name.textContent = nomb;
    const code = document.createElement('h1')
    code.textContent = codigo;
    const price = document.createElement('h1')
    price.textContent = precio;
    const desc = document.createElement('h1');
    desc.textContent = descripcion
    contenedor.appendChild(name);
    contenedor.appendChild(code);
    contenedor.appendChild(price);
    contenedor.appendChild(desc);
    stock.appendChild(contenedor);
}
boton.addEventListener('click', function(){
    agregarItem(nomb.value, codigo.value, precio.value, descripcion.value);
})

