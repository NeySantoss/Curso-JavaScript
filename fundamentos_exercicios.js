// Exercicios de fundamentos

//Exercicio 1: "Olá mundo"
// Crie um script que imprima "Olá mundo" no console

console.log("Olá mundo");

// Exercicio 2 - Conversão de tipo
// Dado o valor de uma string "1234", converta-o 
//  em um numero e exiba o tipo da variavél no console.

let minhaString = "1234";
console.log(typeof minhaString)
let conversao = Number(minhaString);
console.log(typeof conversao);


// Exercício 3 -  Manipulação de  Strings
// Dado uma string em "JavaScript é incrivel", escreva
// o codigo e conte quantos caracteres a string tem e quantas 
// palavras existem

const dadoString =  "JavaScript é incrivel";

console.log(dadoString.length) // caracteres/
console.log(dadoString.split(" ").length) // numero de palavras


// Exercício 4 - Loops e Arrays

// Crie um array com 4 nomes 
//use um loop for para imprimir cada nome no console.

const nomes = ["João", "Maria", "Pedro", "Vivian"];

for (let i = 0; i < nomes.length; i++){
    console.log( "O nome é: "+ nomes[i]);
}

// Exercício 5\: funções  e String e Math
// Crie uma função que aceita uma string 
//representando um horario no formato de 24 horas
//(por exemplo, "14:30"). A função deve retornar uma
// string que converta o horario para formato de 12 horas 
//(por exemplo "2:30 PM") Use o objeto MAth para auxiliar nessa conversão
//certifique-se de que sua função lida corretamente com horarios na
//meia-noite e no meio-dia

function converterHorario(horario24) {
    
    //const hora = horario24.split(":")[0];
    //const minuto = horario24.split(":")[1];

    const [hora, minuto] = horario24.split(":")

    // 15 /12 = 3 , 23 % 12 = 11
    //falsy 12  % 12 = 0 => 12
    const hora12 = hora % 12 || 12;

    let periodo = "AM"

    if(hora > 12){
        periodo ="PM"
    }

    console.log(`${hora12}:${minuto} ${periodo}`)
}

converterHorario("0:16")