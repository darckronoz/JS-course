 var frunas = ["Fresa","Manzana","Mora"];

 //agregar de ultimas
var frunas = frunas.push("Guanabana");

//longitud: igual que en java xd
var lon = frunas.length;

//acceder por elementos
frunas[1] //Manzana

//eliminar ultimo (se guarda en ese pop podemos acceder a el)

var t = [1,2,3];

var n = t.pop();

console.log(n + 2); //imprime 5

//agregar al inicio

var frunas = frunas.unshift("Mango");

//eliminar primero tambien se obtiene y puede ser guardado en una variable
//el man de platzi explica re mal no mms

var frunas = frunas.shift();

//obtener el index de algo

var pos = frunas.indexOf("Guanabana");

//

var cosas = [
    {name: "aló", thing: 1},
    {name: "alé", thing: 2},
    {name: "alí", thing: 3},
    {name: "alá", thing: 4},
    {name: "a", thing: 5},
    {name: "b", thing: 6},
    {name: "c", thing: 8},
    {name: "d", thing: 9},
]

//FILTER generamos un nuevo array con un filtro especifico

var cosasx = cosas.filter(function(n) {
    return n.thing >= 3;
});

console.log(cosasx);

//MAP generamos un nuevo array con unicamente el dato que solicitamos

var cosasm = cosas.map(function(m) {
    return m.name;
});

//FIND retorna el primer objeto completo que cumple con la condición indicada.

var cosasf = cosas.find(function(x){
    return x.name === "aló";
});

//foreach

cosas.forEach(function(w) {
    console.log(w.name); 
});


//SOME true or false dependiendo de si cumple la condición
//dependiendo de si existe o no un objeto que cumpla la condición.
//ese man de platzi explica re mal.

var cosasBoo = cosas.some(function(b){
    return b.thing < 7;
});

