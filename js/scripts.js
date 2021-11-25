// array de stados para sabe se eles existem usando o metodo includes e sem precisar usar while e for
// link da aula https://www.youtube.com/watch?v=mkQaDD9rc28
// metodo includes sempre retornara true or false
let estados = [ "Minas","Goias", "São Paulo"];

console.log(estados.includes("São Paulo"));

if(estados.includes("São Paulo")){
    console.log("sim, são paulo existe");
    //receber como número lembrando que a primeira palavra sempre começa como número 0
    console.log(estados.indexOf("Goias"));
} else {
    console.log("nâo, são paulo nâo existe");
}

console.log(estados.includes("joinville"));
if(estados.includes("joinville")){
    console.log("sim, joinville existe");
} else {
    console.log("nâo, joinville nâo existe "); 
}

//metodo includes para verificar se o estado existe no array
// link do video https://www.youtube.com/watch?v=hy3tsIrvloU
let brasil = ["Acre"];
const isAcreIncluded = brasil.includes("Acre");
const acreMessage = isAcreIncluded
    ? 'Acre está incluido.'
    : 'Acre nâo foi incluido =/'
console.log(acreMessage);

//link https://attacomsian.com/blog/javascript-array-search
// A maneira mais simples e rápida de verificar se um item está presente em uma matriz é usando o método Array.indexOf (). Este método pesquisa o array para o item fornecido e retorna seu índice. Se nenhum item for encontrado, ele retorna -1.
//indexOf() Method
const fruits = ['maçã', 'pera', 'tomate', 'uva', 'abacaxi', 'abacate'];

console.log(fruits.indexOf('pera')); // 1  (true)
console.log(fruits.indexOf('abacaxi')); // 4  (true)
console.log(fruits.indexOf('banana')); // -1 (false)

// verificando se ela existe e a ordem e igual
console.log(fruits.indexOf('pera', 1)); // 1    (true)
console.log(fruits.indexOf('pera', 4)); // -1   (false)



numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
total = 0;

function somar(item, indice, numeros){
    total += item;
    numeros[indice] = total;
}
numeros.forEach(somar);
console.log(numeros);


function temHabilidade(skills) {
    for (const item of skills) if (item == "JavaScript") return true;
    return false;
}
let skills = ["JavaScript", "ReactJS", "Flutter","React Native"];
var resultado = temHabilidade(skills);
console.log(resultado);


for (let index = 0; index < skills.length; index++) {
    const element = skills[index];
    console.log(element);
    console.log(index);
    console.log()
    if(element == "React Native"){
        console.log('')
    }
}