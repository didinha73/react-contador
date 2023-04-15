// Comentario de 1 linha

/*

    Comentário de múltiplas linhas

*/

var nome = "Meu nome";  //string
var idade = 12;         //number integer
var peso = 23.5;        //number float
var andando = false;    //boolean

nome = "Ana";

// Js == EcmaScript == ES
// ES > 2015 == ES6 == ES15

const pais = "Brasil"; // constante não muda o conteúdo/valor

let nome = "Julia"; // dentro de um escopo

//estrutura de dados
let alunos = ["Ana", "paulo", "Pedro", "Julia", 123] // array

alunos[3]; //Julia
alunos[1] = "Paulo";

alunos.push["Maria"]; // Adiciona um indice no vetor

alunos.shift(); //Remove o primeiro indice (Ana)
alunos.pop(); //Remove o último indice 

let bolsa1 = [12.4, 33.7, 45.8, "123"]; //Js aceita, mas dá pau nas operações
let bolsa2 = Float32Array[12.4, 33.7, 45.8, "123"]; // definindo tipagem do array, vai dar pau na execução

//logica boleana
/*
    >  maior que
    <  menor que
    == igual
    >= maior ou igual
    <= menos ou igual
    != diferente
    && E lógigo
    || Ou lógico
    === exatamente igual (valor e tipo variável)

    0 == false
    ""          vazio
    null        nulo
    undefined   indefinido

*/
let idade = 12;

if(idade >= 18 && idade < 30){
    // true
} else {
    // false
}

let cor = (idade > 18)? "Azul" : "Vermelho";

//Json JavaScript Object Notation

let cliente = {
    nome: "Adriane",
    idade: 22,
    peso: 70.4,
    produtos: ["tenis", "meias", "bone"],
    endereco: {
        estado: "PR",
        cidade: "Curitiba",
        CEP: "80060-000"
    }
};

cliente.idade; //imprime a idade
cliente.produtos; // imprime todos os produtos
cliente.produtos[0]; //imprime o produto na posição 0
cliente.endereco.cidade //imprime Curitiba