// Exercício de manipulação de ARRAY

//Crie uma lista de compras que é inicialmente vazia
//adicionar 5 itens à lista usando push()
//Agora, remova o primeiro item da lista usando shifr()
//imprima a lista final no console

const listaDeCompra = [];

listaDeCompra.push("Maçã","Banana","Pera", "Uva", "Goiaba");

listaDeCompra.shift();
console.log(listaDeCompra);

// Exercício de manipulação de ARRAY - find()


//Você tem um array de números: [3, 7, 14, 21, 29, 36]
// Use a função find() para encontrar o primeiro numero que 
//e maior que 10

const numeros = [3, 7, 14, 21, 29, 36];

const maior = numeros.find((num) => num > 10 && num % 7 === 0);
console.log(maior)


// Exercício de manipulação de ARRAY - FILTER()

//Dado o array de números: [ 5, 10, 15, 20, 25, 30, 35]
//use a função filter para criar um novo array que contenha apenas
// os que são maiores que 20


const number = [ 5, 10, 15, 20, 25, 30, 35, 40];

const filtro = number.filter((num) => num > 20 )
console.log(filtro);


// Exercício de manipulação de String - split(), trim()

//Dado a string: " BOM dia, , mundo! ".
//remova os espaços em branco no inicío e no final da string
//em seguida, dovoda a string em palavras

const cumprimentar = " BOM dia, mundo! ";
console.log(cumprimentar);

const palavras = cumprimentar.trim().split(" ");

console.log(palavras);

// Exercício de manipulação de String - startsWith(), endsWith


//dada a string: "O rato roeu a roupa do rei de ROMA"
//verifique se a strinf começa com a palavra "O" e termina 
// com a palavra "Roma"

const frase = "O rato roeu a roupa do rei de Roma";

const comeca = frase.startsWith("O")
const Termina = frase.endsWith("Roma")
console.log(comeca);
console.log(Termina);

