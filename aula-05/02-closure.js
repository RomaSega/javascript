
// fun��o simples
var nomePet = function(nome) {
  return nome;
}

console.log(`Nome do pet: ${nomePet("Agatha")}`);
console.log(`Nome do pet: ${nomePet("Vivie")}`);
console.log(`Nome do pet: ${nomePet("Vivie")}`);


// fun��o usando closures
var pet = function(nome) {
  // A fun��o externa define uma vari�vel "nome"
    var getNome = function() {
  // A fun��o interna tem acesso � vari�vel "nome"  da fun��o externa
      return nome;
    }
  //Retorna a fun��o interna, expondo-a assim para escopos externos
    return getNome;
};

myPet = pet("Vivie");
  
console.log(`Nome do pet: ${myPet()}`); // Retorna "Vivie"
console.log(`Nome do pet: ${myPet()}`); 
console.log(`Nome do pet: ${myPet()}`); 
console.log(`Nome do pet: ${myPet()}`); 
