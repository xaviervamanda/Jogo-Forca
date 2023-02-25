import palavras from "../palavras";
import forca0 from "../assets/img/forca0.png";

export default function Jogo ({classeLetraPalavra, letrasCorretasSelecionadas, 
    setClasseLetras, imagemForca,  setDesabilitados, arrayPalavraAleatoria, setArrayPalavraAleatoria,
    setContadorErros, setImagemForca, setLetrasCorretasSelecionadas, setClasseLetraPalavra}){


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
                setContadorErros(0);
                setImagemForca(forca0);
                setLetrasCorretasSelecionadas([]);
                setClasseLetraPalavra("cada-letra");
                }}>
                Escolher Palavra
            </button>
            <div data-test="word" className="div-letras">
                {arrayPalavraAleatoria.map((letra, indice) => (
                    <div key={indice} className={classeLetraPalavra}>
                        {letrasCorretasSelecionadas.includes(letra) ? letra : "_"}
                    </div>
                ))}
            </div>
            
        </>
    );
}