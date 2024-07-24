// Avançando com JavaScript

//Manipulação de Array

const frutas = [ "Maçã", "Laranja"];

frutas.unshift("Acerola"); // adiciona no inicio

console.log(frutas);

frutas.shift(); // deleta o 1 elemento

console.log(frutas);


//Map , filter, reduce -> arrow function

const numero = [1, 2, 3, 4, 5, 6];

//FIND retorna o primeiro elemento do  critério
const numeroPar = numero.find((num) => num % 2 == 0);
console.log(numeroPar);

// FILTER  = FILTRA os elementos do critério
const numeroPares = numero.filter((num) => num % 2 == 0);
console.log(numeroPares);



// Manipulação de Strings

const frase = "Olá, mundo!"

const palavras = frase.trim().split(" ");


console.log(frase);
console.log(palavras);

const frase2 = "JavaScript é incrivél!";

console.log(frase2.startsWith("Java"));
console.log(frase2.endsWith("!"));

// Exeções e tratamentos de erros

let idade = 20;

/*
if ( idade < 18) {
    throw new Error("Você deve ter pelo menos 18");
}
*/

try {
    const idade = 17;
    if(idade < 18){
        throw new Error("Você deve ter pelo menos 18");
    }
} catch(error) {
    console.log(error.message);
}

console.log("continuando o programa");

//Callback => funcao é uma 
//funcao q funcionar dentro de outra funcao
function cumprimentar (nome, Callback) {
    console.log("Óla", nome);
    Callback();
}

function mostrar () {
    console.log("Como você esta?");
}

cumprimentar("Ney", mostrar);

cumprimentar("Maria", function(){
    console.log("como você esta")
});

//sittimeout => depois dfe um tempo executa algo, uma vez
/*
function mostrarMenssagen(){
    console.log("Essa mensagem sera exibida após 3 seg")
}
//1000 = 1seg
setTimeout(mostrarMenssagen, 3000);

setTimeout(function ( ){
    console.log("OLA")
},6000)
*/

// Promisse

const promessa = new Promise((resolve, reject) => {
    const condicao = false;

    if( condicao ) {
        resolve("A condicao é verdadeira");
    }else{
        reject("A condicao é falsa");
    }
})

promessa.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.log(error);
});

// bibliotecas feitas que sao "promisse based"

const promise1 = Promise.resolve(3).then((message) => {
    //console.log(message)
})

const promise2 = new Promise ((resolve, reject) => {
   // setInterval(resolve, 2500, "Deu certo!");
});

//Promise.all([promise1, promise2]).then((valores) => console.log(valores))



//Async Await

async function obterValor() {
    const promessa = new Promise((resolve, reject) => {
        setTimeout(() => resolve("valor obtido"), 2000)
    })

   const valor =   await promessa;
    console.log(valor);
}

obterValor();

async function obterValorComErro() {
    try {
        const promessa = new Promise((resolve, reject) => {
            setTimeout(() => reject("valor com erro"), 2000)
        })
    
        const valor =   await promessa;
        console.log(valor);
    } catch (error) {
        console.log(error)
    }
}
obterValorComErro();

// JSON ( JavaScript Object Notation)
// {nome: "teste"} => {"nome": "teste"}
//padroniza a comunicaoção
//front-end e back-end em uma linguagem só

const objeto = { nome: "João", idade: 30};

const jsonString = JSON.stringify(objeto);
console.log(jsonString);

const json = '{ "nome": "João", "idade": 30}';

const objeto2 = JSON.parse(json);
console.log(objeto2)