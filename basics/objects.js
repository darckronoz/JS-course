var carro = {
    placa: "ACD-123",
    modelo: 2,
    puertas: true,
    year: 2022
};

console.log(carro.placa);

//dentro de los objetos podemos tener metodos 

var carro = {
    placa: "ACD-123",
    modelo: 2,
    puertas: true,
    year: 2022,
    getPlaca: function() {
        console.log(`Placa: [${this.placa}] :D`);
    }
};


//constructor de un object B)


//reto jsjs, una lista de 30 carros de manera "automatica" xd


function car(placa, modelo, puertas, year) {
    this.placa = placa;
    this.modelo = modelo;
    this.puertas = puertas;
    this.year = year;
}
var carrs = [];

for (var i = 0; i < 31; i++) {
    carrs.push(new car(generatePlaca(i), i, true, 2000+i));
}

function generatePlaca(x) {
    if (x < 5) {
        switch (x) {
            case 0:
                return `ABC-${100+x}`;
            case 1:
                return `XXX-${100*x}`;
            case 2:
                return `POP-${100*x}`;
            case 3:
                return `UWU-${100*x}`;
          case 4:
            	return `OWO-${101*x}`;
        }
    }else if (x >= 5 && x < 10) {
        var y = x-4
        switch (y) {
            case 1:
                return `SEX-${100*x}`;
            case 2:
                return `DOP-${100*x}`;
            case 3:
                return `CAC-${100*x}`;
            case 4:
                return `LOL-${100*x}`;
            case 5:
                return `GUG-${100*x}`;
        }
    }else {
        return generatePlaca(Math.floor(Math.random()*9));
    }
}

for(var n of carrs) {
  console.log(n.placa);
}

console.log(generatePlaca(Math.floor(Math.random()*9)));
console.log(Math.floor(Math.random()*8+1));








