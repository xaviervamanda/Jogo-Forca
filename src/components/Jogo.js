import { useState } from "react";
import forca0 from "../assets/img/forca0.png";
import forca1 from "../assets/img/forca1.png";
import forca2 from "../assets/img/forca2.png";
import forca3 from "../assets/img/forca3.png";
import forca4 from "../assets/img/forca4.png";
import forca5 from "../assets/img/forca5.png";
import forca6 from "../assets/img/forca6.png";
import palavras from "./palavras";


export default function Jogo ({setDesabilitado, arrayPalavraAleatoria, setArrayPalavraAleatoria}){
   
    console.log(arrayPalavraAleatoria);
    
    function escolhePalavraAleatoria (){
        const indiceAleatorio = Math.floor(Math.random()*palavras.length);
        let novoArray = palavras[indiceAleatorio].split("")
        setArrayPalavraAleatoria(novoArray);
        setDesabilitado(false);
    }


    return (
        <>
            <div className="imagem-forca">
                <img src={forca0} alt="forca" />
            </div>
            <button className="botao" onClick={escolhePalavraAleatoria}>
                Escolher Palavra
            </button>
            <div className="div-letras">
                {arrayPalavraAleatoria.map((letra, indice) => (
                    <div key={indice} className="cada-letra">_</div>
                ))}
            </div>
            
        </>
    );
}