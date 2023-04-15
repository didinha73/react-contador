import { useState } from "react";

export default function Contador(prop)
{
    console.log(prop);

    //let valor = 0; não funciona no react
    //a variavel deve ser declarada assim, em dupla
    //useState cria uma variavel de estado
    
    const [valor, setValor] = useState(prop.valor);

    function add()
    {
        setValor(valor +1);
        console.log(valor);
    }

    function sub()
    {
        setValor(valor -1);
        console.log(valor);
    }

    return(
        <div>
            <button onClick={add}>Incrementa</button>
            <span> {valor}</span>
            <button onClick={sub}>Decrementa</button>
        </div>

    );
}