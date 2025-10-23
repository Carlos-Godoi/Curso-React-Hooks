// Importar módulos
import React, { useState, useMemo } from 'react';

// Função
function Exemplo11_useMemo() {

    // useState
    const [contador, setContador] = useState(0);
    const [nomes, setNomes] = useState(['Carlos', 'Tadeu', 'Godoi', 'Filho']);

    // useMemo
    const listaSemRender = useMemo(() => {
        return <ListarNomes lista={nomes} />
    }, [nomes]);

    //Retorno
    return (
        <div>
            <h1>{contador}</h1>
            <button onClick={e => setContador(contador + 1)}>Incrementar</button>

            {listaSemRender}
        </div>
    );
}

// Componente para listar nomes
function ListarNomes({lista}){

    // Console
    console.log('Componente ListarNomes criado!');

    // Retorno
    return(
        <ul>
            {lista.map(nome => (<li key={nome}>{nome}</li>))}
        </ul>
    );

}


// Exportar
export default Exemplo11_useMemo;