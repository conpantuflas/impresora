import React from 'react';
import { useState } from "react";
import "./impresora.css";

const Impresora = () => {
    const [imprime, setImprime] = useState('');
    const [lista, setLista] = useState([])
    const [contador, setContador] = useState(0);

    const onSubmit = (e) => {
        e.preventDefault()
        setLista([...lista, imprime])
        setContador(contador + 1)
    }
    return (
        <div id="impresora">
            <form onSubmit={(e) => onSubmit(e)}>
                <input id="bandejaEntrada" type="text" placeholder='write...'
                    onChange={(e) => {
                        setImprime(e.target.value)
                    }}
                />
            </form>
            <div id="lista">
                {lista.map((tarea,i) => {
                    return (
                        <div className="itemLista">
                            <p className='textoElementoLista'>{tarea}</p>
                            <button id="eliminar"
                                onClick={(e) => {
                                    e.target.parentNode.style.display = 'none'
                                    setContador(contador - 1)
                                }}>x</button>
                        </div>
                    )
                })}
            </div>
            <div id='contador'>
                <h1 className='textoElementoLista'>Tareas pendientes : {contador}</h1>
            </div>
        </div>
    );
}

export default Impresora;