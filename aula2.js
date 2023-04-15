//Orientação a objetos -> POO

//caneta BIC
//função: escrever no papel
//atributo: azul

//encapsulamento
class Caneta {

    //atributos (propriedades) do objeto (adjetivos)
    cor;

    //construtor é uma função especial executada no momento que a classe é instanciada
    constructor(opcao = "Azul"){
        this.cor = opcao;
    }

    //método escrever (verbo) é uma função (ação) do objeto Caneta
    escrever(params) {
        
    }
}

//bic1 é uma instancia da classe Caneta
//bic1 é um objeto da classe Caneta
var bic1 = new Caneta("Azul");
var bic2 = new Caneta("Vermelha");
var bic3 = new Caneta();

//referencia - bic4 é um "apelido" de bic2 - bic4 não é variável, e sim um objeto
var bic4 = bic2;
