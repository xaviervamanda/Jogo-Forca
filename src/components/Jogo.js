import { useState } from "react";
import forca1 from "../assets/img/forca1.png";
import forca2 from "../assets/img/forca2.png";
import forca3 from "../assets/img/forca3.png";
import forca4 from "../assets/img/forca4.png";
import forca5 from "../assets/img/forca5.png";
import forca6 from "../assets/img/forca6.png";
import palavras from "../palavras";


export default function Jogo ({imagemForca, setImagemForca, contadorErros, setContadorErros, setDesabilitado, desabilitado, arrayPalavraAleatoria, setArrayPalavraAleatoria}){
   
    function escolhePalavraAleatoria (){
        const indiceAleatorio = Math.floor(Math.random()*palavras.length);
        let novoArray = palavras[indiceAleatorio].split("")
        setArrayPalavraAleatoria(novoArray);
        setDesabilitado(Array(26).fill(false));
    }


    return (
        <>
            <div className="imagem-forca">
                <img data-test="game-image" src={imagemForca} alt="forca" />
            </div>
            <button data-test="choose-word" className="botao" onClick={escolhePalavraAleatoria}>
                Escolher Palavra
            </button>
            <div data-test="word" className="div-letras">
                {arrayPalavraAleatoria.map((letra, indice) => (
                    <div key={indice} className="cada-letra">_</div>
                ))}
            </div>
            
        </>
    );
}