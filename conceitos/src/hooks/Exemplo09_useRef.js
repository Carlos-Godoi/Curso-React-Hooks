// Importar módulos
import React, {useRef} from 'react';


// Função
function Exemplo09_useRef(){

    // useRef
    const elemento = useRef();

    // Função
    const acao = () => {
        elemento.current.focus();
        elemento.current.style.backgroundColor = 'red';
        elemento.current.value = 'Digite seu nome';
    }


    // Retornar
    return(
        <div>
            <input type='text' ref={elemento} />
            <input type='button' value='Clique aqui' onClick={acao} />
        </div>
    );
}

export default Exemplo09_useRef;