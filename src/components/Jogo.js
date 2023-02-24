import { useState } from "react";
import forca1 from "../assets/img/forca1.png";
import forca2 from "../assets/img/forca2.png";
import forca3 from "../assets/img/forca3.png";
import forca4 from "../assets/img/forca4.png";
import forca5 from "../assets/img/forca5.png";
import forca6 from "../assets/img/forca6.png";
import palavras from "../palavras";


export default function Jogo ({letrasCorretasSelecionadas, setLetrasCorretasSelecionadas, setClasseLetras, imagemForca, setImagemForca, contadorErros, setContadorErros, setDesabilitados, desabilitados, arrayPalavraAleatoria, setArrayPalavraAleatoria}){


    return (
        <>
            <div className="imagem-forca">
                <img data-test="game-image" src={imagemForca} alt="forca" />
            </div>
            <button data-test="choose-word" className="botao" onClick={() => {
                const indiceAleatorio = Math.floor(Math.random()*palavras.length);
                let novoArray = palavras[indiceAleatorio].split("")
                setArrayPalavraAleatoria(novoArray);
                setDesabilitados(Array(26).fill(false));
                setClasseLetras(Array(26).fill("letra letra-habilitada"));
                }}>
                Escolher Palavra
            </button>
            <div data-test="word" className="div-letras">
                {arrayPalavraAleatoria.map((letra, indice) => (
                    <div key={indice} className="cada-letra">
                        {letrasCorretasSelecionadas.includes(letra) ? letra : "_"}
                    </div>
                ))}
            </div>
            
        </>
    );
}