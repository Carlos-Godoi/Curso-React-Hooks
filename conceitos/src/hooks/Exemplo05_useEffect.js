// Módulo React e o hook useState, useEffect
import React, {useState, useEffect} from 'react';

// Função
function Exemplo05_useEffect(){

   // useState
   const [texto, setTexto] = useState('Olá Mundo!');

   // useEffect
   useEffect(() => {

       setInterval(()=> {
            setTexto('useEffect executado com sucesso!');
       }, 5000);

   });

    // Retorno
    return(
        <div>
            <h1>{texto}</h1>
        </div>
    );

}

// Exportar
export default Exemplo05_useEffect;
