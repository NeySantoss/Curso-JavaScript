// Fundamentos
// var "nome" = " valor"

var minhaVariavel = "Curso JS";
console.log(minhaVariavel);

//variáveis e tipos de dados

var meuNumero = 10;

console.log(meuNumero);
console.log(meuNumero + 5);

console.log("10" + 5); // 105

console.log(typeof meuNumero);

var booleano = true; // false

console.log(typeof booleano);

var meuObjeto = {};
var meuArray = [];
var meuNull = null;
var meuUndefined = undefined;

console.log(typeof meuObjeto);
console.log(typeof meuArray);
console.log(typeof meuNull);
console.log(typeof meuUndefined);

//let e const
let x = 10;
const y = 5;

console.log(typeof x);
console.log(x, y);

//Operadores aritiméticos

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

//Operadores de comparação

console.log( x == y); // se é igual  5 = 10 ?
console.log( x != y); // se é diferente do outro

console.log("5" == 5);
console.log("5" === 5);
console.log("5" !== 5);


// Operadors Lógicos
// AND  = &
// OR  = ||

console.log(10 > 5 && 20 > 5); // so valida se as 2 for verdadeira
console.log(10 < 5 && 20 < 5)
console.log(10 > 5 && 20 < 5)

console.log(10 > 5 || 20 > 5)
console.log(10 < 5 || 20 < 5)
console.log(10 > 5 || 20 < 5)

// Conversão de tipo 

const numero2 = "123";

const numerConvertido = Number(numero2);
console.log(numerConvertido);
console.log(typeof numerConvertido);

// Estrutura de condição  - IF - ELSE - ELSE IF

const idade = 15;

if(idade < 15) {
    console.log("criança");
}else if(idade < 18) {
    console.log("adolecente");
}else {
    console.log("adulto");
}

if(false) {
    console.log("isso executa")
} else {
    console.log("Isso agora é executado!")
}

// switch

const fruta = "Mamão";

switch(fruta) {
    case "banana":
        console.log("Banana é a fruta")
        break;
    case "Maçã":
        console.log("Maçã é a fruta")
        break;
    case "Kiwi":
        console.log("Kiwi é a fruta")
        break;
    default:
        console.log("Fruta não encontrada")
}

//Estruturas de repetção
// 1, 2, 3,4 ,5 ,6 => dependendo de uma condição

// contador ; condição de limite ; incremento
for(let i = 0; i < 5; i++){
    console.log( "O valor do i é: "+ i);
}

// while

let c = 1
while( c < 5) {   
    console.log( "O valor do c é: "+ c);
    c++;
}

// do while

let j = 0;

do {
    console.log( "O valor do j é: "+ j);
    j++;
}while(j < 5);

//function 

// function NOME (ARGUMENTO 1 , ARGUMENTO 2){ corpo }

function cumprimentar (nome){       
    console.log("ola" , nome);
}

cumprimentar("Ney");

// escopo de variavéis

let cor = "azul";

function mostrarCor() {
    let cor = "verde";
    console.log(cor);
}

console.log(cor);
mostrarCor();


// hoisting  = içamento
testHoisting()
function testHoisting() {
    console.log("Deu Certo!");
}

// Arror function

const testHoisting2 = () => {
    console.log("Deu certo 2");
}
testHoisting2();


// truthy e falsy


const minhaVariavel1 = "" //falsy

if(minhaVariavel1) {
    console.log("Verdadeiro"); //se a variavel esta atribuida é verdadeiro
}else {
    console.log("falso"); //se a variavel nao esta atribuida é falso

}

//array / lista 

const array = [1, 2, 3, 4, 5]
console.log(array);    
console.log(array[2]); // 0, 1, 2, 3, 4
console.log(array[0]); // 0, 1, 2, 3, 4

array.push(6); // colocar + 1 elemento
console.log(array);

//prototype => OBJETO -> objeto2
//Array => nossos arrays
array.pop(1); // retirar o ultimo elemento
console.log(array);


// string

const minhaString = "ola, novamente";

// concatenação

const minhaString1 = minhaString + " como você esta";

console.log(minhaString1);

// interpolação

const minhaString2 = `${minhaString} Como você esta`
console.log(minhaString2);
console.log(minhaString2.length);// qtd de caracters
console.log(minhaString2[5]);

console.log(minhaString2.toUpperCase()); 

// Data e hora 

const agora = Date();
console.log(agora);


const natal = new Date(2024, 11, 25);
console.log(natal);

// Math

console.log(Math.PI);
console.log(Math.round(3, 6));
console.log(Math.sqrt(16));
console.log(Math.pow(2, 3));



