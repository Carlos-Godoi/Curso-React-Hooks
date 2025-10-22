// Módulo React e o hook useState
import React, {useState} from 'react';

// Função
function Exemplo01_useState(){

    // useState
    const [texto, setTexto] = useState('Olá Mundo!');

    // Evento
    const evento = (e) => {
        setTexto(e.target.value);
    }

    // Retorno
    return(
        <div>
            <p>{texto}</p>
            <input type='text' onChange={evento} />
        </div>
    );

}

// Exportar
export default Exemplo01_useState;
