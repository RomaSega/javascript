var multiplicar = function(a, b) {
    return a*b;
}

var a = multiplicar(3, 4);
console.log(`a: ${a}`);
a = multiplicar(5, 4);
console.log(`a: ${a}`);

// sem segundo parametro
a = multiplicar(5);
console.log(`a: ${a}`);

// caso n�o possua o segundo parametro coloque o default � 1
multiplicar = function(a, b) {
    if(b == undefined) {
      b = 1;
    }
    return a*b;
}


a = multiplicar(5);
console.log(`a: ${a}`);

multiplicar = function(a, b = 1) {
    return a*b;
}

a = multiplicar(5, 4);
console.log(`a: ${a}`);

a = multiplicar(5);
console.log(`a: ${a}`);




