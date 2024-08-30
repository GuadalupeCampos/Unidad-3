//Inicializamos nuestro arreglo con nombres de marcas de vehicculos
let cars = ["bmw", "volvo", "saab", "ford", "fiat", "audi"];

//Metodos de array

//push
let btnPush = document.getElementById("btn-push");

btnPush.onclick = funcionPush;

function funcionPush() {
    cars.push("lexus");

    mostrarImagenes();
}

//pop
let btnPop = document.getElementById("btn-pop");

btnPop.onclick = funcionPop;

function funcionPop() {
    if(cars.length > 0) {
        cars.pop();
        mostrarImagenes();
    } else {
        alert("No se puede eliminar mas elementos ya que el arreglo esta vacío")
    }
}

//shift
let btnShift = document.getElementById("btn-shift");

btnShift.onclick = funcionShift;

function funcionShift() {
    if(cars.length > 0) {
        cars.shift();
        mostrarImagenes();
    } else {
        alert("No se puede eliminar mas elementos ya que el arreglo esta vacío")
    }
}

//Unshift
let btnUnshift = document.getElementById("btn-unshift");

btnUnshift.onclick = funcionUnshift;

function funcionUnshift() {
    cars.unshift("Ferrari");

    mostrarImagenes();
}

//slice
let btnSlice = document.getElementById("btn-slice");

btnSlice.onclick = funcionSlice;

function funcionSlice(){
let begin = document.getElementById("begin").value;
let end = document.getElementById("end").value;

if(begin != "" && end != ""){
    cars = cars.slice(begin, end);
    mostrarImagenes();
} else {
alert ("Los campos no pueden estar vacios")
}
}

function mostrarImagenes () {
    let text = "";
    for (let car of cars) {
    text += `<img src= "./assets/img/${car}.png" alt= "${car}" width= "100" / >`;
    }
    document.getElementById("demo").innerHTML = text;
}

mostrarImagenes()

