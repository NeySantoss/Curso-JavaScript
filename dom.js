// DOM  - Document Object Model

// Selecionar Elementos

const elementoPorID = document.getElementById("meuId");

console.log(elementoPorID);

const elementoPorID2 = document.querySelector("#meuId");

console.log(elementoPorID2);

const elementoPorClasse = document.getElementById("minhaClasse");

console.log(elementoPorClasse);

const elementoPorClasse2 = document.querySelector("#minhaClasse");

console.log(elementoPorClasse2);

// Manipular elemento de texto

const elemento = document.querySelector("#meuId");

console.log(elemento.textContent);


setTimeout(() => {
    elemento.textContent = "Novo texto"
    console.log(elemento.textContent);
}, 2000);

// Trabalhando com Atributos
const link = document.querySelector("a");

console.log(link);

link.setAttribute("href", "https://www.youtube.com.br");

console.log(link.getAttribute("href"));
console.log(link.hasAttribute("target"));

link.removeAttribute("target");

// Manipulação de classes do CSS

const elemento2 = document.querySelector("#meuId");

elemento2.classList.add("novaClasse");

elemento2.classList.remove("minhaClasse");

elemento2.classList.toggle("outraClasse");
elemento2.classList.toggle("outraClasse");


//Manipular CSS

const elemento3 = document.querySelector("#meuId");

elemento3.style.color = "blue";
elemento3.style.backgroundColor = "red"; 

//Navegação entre nó

const elemento4 = document.querySelector("#meuInput");

const pai = elemento4.parentNode;

console.log(pai);

//Obter o primeiro filho

const primeiroFilho = pai.firstChild;
console.log(primeiroFilho);

const ultimoFIlho = pai.lastChild;
console.log(ultimoFIlho);

//Manipulação de estrutura do DOM
//criar novo elemento

const novoElemento = document.createElement("div");

console.log(novoElemento);

novoElemento.textContent = " Minha div de JS"
//adicionando a div no html nosso
document.body.appendChild(novoElemento); //como ultimo

document.body.insertBefore(novoElemento, pai); // mudando ele de local

document.body.removeChild(elementoPorID); // removendo elemento

// Eventos 

// CLICK

const botao = document.querySelector("button");

botao.addEventListener("click", function() {
    console.log("botao clicado")
})

// mouse 

const elemento5 = document.querySelector("#meuFormulario");

elemento5.addEventListener("mouseover", function() {
    console.log("mouse passou");
})

// teclado

const campoInput = document.querySelector("#meuInput");

campoInput.addEventListener("keydown" ,function() {
    console.log("tecla presionada");
})

// formulario 

const form = document.querySelector("#meuFormulario");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // não deixa o comportamento padrao acontecer
    console.log("Formulario enviado com sucesso");
});


// Propagação de eventos

document.querySelector("#elementoPai").addEventListener("click", function() {
    console.log("click capturado no pai");
});

document.querySelector("#elementoFilho").addEventListener("click", function(event) {
   // event.stopPropagation(); // evita q o evento atual interfira em algum outro
    console.log("Clicoou no filho");
});

document.querySelector("#meuLink").addEventListener("click", function(event) {
    event.preventDefault(); //clica no link mais evita q va para ele
    console.log("clicou no link");
})

//Delegação de eventos
document.querySelector("#elementoPai").addEventListener("click", function (event) {
    if(event.target.matches(".classeDosFilhos")){
        console.log("Evento delegado para o filho")
    }
});


