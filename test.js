//create a function that recieves any array and prints it's first element

function printFirst(list) {
    console.log(list[0]);
}

//create a function that recieves any array and prints all it's elements one by one

function printArray(list) {
    list.forEach(function(n) {
        console.log(n);
    });
}

//second 

function printArrayA(list) {
    for(n of list) {
        console.log(n);
    }
}

//third

function printArrayB(list) {
    for(var i = 0; i < list.lenght; i++) {
        console.log(list[i]);
    }
}

//create a function that recieves any object and prints all it's elements one by one

function printObj(obj) {
    console.log(obj.name);
    console.log(obj.code);
    console.log(obj.sex);
}

var y = {
  name: "hola",
  code: 22,
  sex: true
}

printObj(y);

//the real way xd

function printObject(obj) {
    let l = Object.values(obj);
    for(n of l) {
        console.log(n);
    }
}

//array way only one conditional 

const x = ["free", "basic", "expert", "ExpertDuo"];
const y = ["solo gratis", "casi todos", "casi si", "dos personas si todos ay rico jiji"];

function restoxd(sus) {
  for(let i = 0; i < x.length; i++) {
    if(sus === x[i]) {
      console.log(y[i]);
      return;
    }
  }
  console.warn("that su doesnt exist C:");
}

restoxd("ExpertDuo");

//object way only one conditional

const a = {
    free: "solo gratis",
    basic: "casi todos",
    expert: "casi i",
    expertDuo: "dos personas si todos ay rico jiji"
}

function restoxddos(sus) {
    if(a[sus]) {
        console.log(a[sus]);
        return;
    }
    console.warn("that sus doesnt exist :C");
}