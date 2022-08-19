var list = ["uno", "dos", "tres", "ocho xd0"];

function greetNumber(number) {
    console.log(`HEY!  ${number} How are you? :D`);
}

for(var i = 0; i < list.length; i++) {
    greetNumber(list[i]);
}


//for each aqui xd
var list = ["uno", "dos", "tres", "ocho xd0"];

function greetNumber(number) {
    console.log(`HEY!  ${number} How are you? :D`);
}

for(var n of list) {
    greetNumber(n);
}


//while
var list = ["uno", "dos", "tres", "ocho xd0"];

function greetNumber(number) {
    console.log(`HEY!  ${number} How are you? :D`);
}

var i = 0;

while(i <= list.length) {
    greetNumber(list[i]);
    i++;
}

//otra manera con while
var list = ["uno", "dos", "tres", "ocho xd0"];

function greetNumber(number) {
    console.log(`HEY!  ${number} How are you? :D`);
}

while(list.length > 0) {
    greetNumber(list.shift());
}
