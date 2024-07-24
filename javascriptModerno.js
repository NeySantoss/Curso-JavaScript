// let e const 

let n = 10;

n = 20;

console.log(n);

const x = 15;

function testeVar () {
    var x = 1;
    if ( true ) {
        var x = 2;
        console.log(x);
    }

    console.log(x);
}

testeVar();

function testeLet () {
    let x = 1;
    if ( true ) {
        let x = 2;
        console.log(x);
    }
    
    console.log(x);
}

testeLet();

//Arrow function

const soma = ((a , b) => {
    return a + b
})
console.log(soma(2, 5));


const quadrado = (numero) => numero * numero;
console.log(quadrado(4))

const cumprimento = (nome) => {
    const mensagem = `"Olá", ${nome}!`;  
    return mensagem;  
}
console.log(cumprimento("Ney Santos"));

// Template literals

const nome = "Maria";
const idade = 22;

console.log(`Meu nome é ${nome} e tenho ${idade} anos.`)

// Destructuring -> desestruturação

const pessoa = { nome: "João", idade: 40, profissao: "Programador"};

const { nome: nome2, idade: idade2, profissao} = pessoa

console.log(nome2, profissao);

const numeros = [ 1, 3, 4, 2]

const[primeiro, segundo, terceiro] = numeros;

console.log(primeiro, segundo, terceiro);


//spread operator => espalhamento

const array1 = [ 1, 2, 3];
const array2 = [ ...array1,  4, 5, 6 ]

console.log(array2);

const soma2 = (...args) => args.reduce((total, numero) => total + numero , 0 );

console.log(soma2(1, 2, 3, 4, 5, 6));

// Default parameters 

function saudacao(nome = " visitante") {
    console.log(`Olá , ${nome}`);    
}

saudacao();
saudacao("Ney santos");

// Object Literals enhancements
// { nome : "Ney Santos"}

const nomeNovo = "Felipe";
const idadeNova = 25;

const pessoaNova = { nome: nomeNovo, idade: idadeNova}

console.log(pessoaNova);


const saudacaoObject = {
    dizerOi() {
        console.log("oi");
    }
};

saudacaoObject.dizerOi();


//classes e heranças 

class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    falar() {
        console.log(`Olá pessoal, meu nome é ${this.nome}`);
    }

}

const joao = new Pessoa("João", 34);

console.log(joao);

joao.falar();

const pedro = new Pessoa("Pedro",22);

class Funcionario extends Pessoa {
    constructor(nome, idade, salario) {
        super(nome, idade);
        this.salario = salario;
    }

    falarFuncionario() {
        super.falar()
        console.log(`Eu ganho R$${this.salario}`)
    }
}

const mario = new Funcionario ("Mario", 23, 5000);

console.log(mario)
mario.falar()

mario.falarFuncionario();



