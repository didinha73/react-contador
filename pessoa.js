class Pessoa
{
    nome;
    telefone;
    endereço;

    constructor()
    {
        console.log("buaa");
    }
}

//herança
class PessoaFisica extends Pessoa
{
    cpf;
    constructor()
    {
        //sobrecarga - alterando o comportamento do herdeiro
        super();
        console.log("Nasci");
    }
}

class PessoaJuridica extends Pessoa
{
    cnpj;
    responsavel;

}

var joao = new PessoaFisica();
var ambev = new PessoaJuridica();

// Compara pra ver a qual objeto pertence a intância 
joao instanceof PessoaFisica