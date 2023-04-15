// função
// subprograma ou subrotina
// E -> P -> S (I/O)

//função pura

//Documentar a função /** */

/**
 * Soma dois numeros e retorna o resultado
 * @param {number} n1 
 * @param {number} n2 
 * @returns {number}
 */
function somar(n1, n2)
{
    let resultado = n1 + n2;
    return resultado;
}
// executando
let valor = somar(2,5);

//funcao anonima
let maior = function(n1, n2){
    return n1 > n2
}

var n1 = 3;
var n2 = 4;
var n3 = 2;

function mult(n1, n2)
{
    return n1 * n2 * n3;
}

mult(2, 7);

function dividir(n1,  n2)
{
    if(n2 == 0){
        //dispara uma exception
        throw new Error("Impossivel dividir por zero")
    }
    return n1 / n2;
}

dividir(6,3);
dividir(4,0);

/**
 * 
 * @param {number} n1 
 * @param {number} n2 
 * @param {function} operacao 
 * @returns 
 */
function calculadora(n1, n2, operacao)
{
    try{ // tenta fazer
        return operacao(n1,n2);
    } catch(e){ //senão pega o erro 
        alert(e.message); //e dispara um alerta
    } 
    
}


calculadora(2,3,somar);

