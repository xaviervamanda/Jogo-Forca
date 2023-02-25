import forca1 from "../assets/img/forca1.png";
import forca2 from "../assets/img/forca2.png";
import forca3 from "../assets/img/forca3.png";
import forca4 from "../assets/img/forca4.png";
import forca5 from "../assets/img/forca5.png";
import forca6 from "../assets/img/forca6.png";

export default function Letras ({setClasseLetraPalavra, letrasCorretasSelecionadas, 
  setLetrasCorretasSelecionadas, setClasseLetras, classeLetras, setImagemForca, 
  contadorErros, setContadorErros, setDesabilitados, desabilitados, arrayPalavraAleatoria}){

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    console.log(arrayPalavraAleatoria)

    function atualizaContadorErros (){
      const contadorErrosAtualizado = contadorErros + 1;
      setContadorErros(contadorErrosAtualizado);
      imagemDaForca (contadorErrosAtualizado);
      
    }

    function imagemDaForca (contador){
      if (contador === 1){
        setImagemForca(forca1)
      } else if (contador === 2){
        setImagemForca(forca2)
      } else if (contador === 3){
        setImagemForca(forca3)
      } else if (contador === 4){
        setImagemForca(forca4)
      }  else if (contador === 5){
        setImagemForca(forca5)
      } else if (contador === 6){
        setImagemForca(forca6)
      }
    }
    
    function checaLetras(arrayLetras) {
      console.log(arrayLetras);
      console.log(contadorErros);
      let temTracos = false;
      for (let letra of arrayPalavraAleatoria) {
        if (!arrayLetras.includes(letra)) {
          temTracos = true;
          break;
        }
      }
      if (!temTracos) {
        setClasseLetraPalavra("cada-letra ganhou");
        setDesabilitados(Array(26).fill(true));
        setClasseLetras(Array(26).fill("letra letra-desabilitada"));
      } else if ((contadorErros + 1) >= 6) {
        setLetrasCorretasSelecionadas(
          arrayLetras.concat(arrayPalavraAleatoria)
        );
        setClasseLetraPalavra("cada-letra perdeu");
        setDesabilitados(Array(26).fill(true));
        setClasseLetras(Array(26).fill("letra letra-desabilitada"));
      }
    }
    
    function botaoDeLetra(indice, letra, acertouLetra) {
      setDesabilitados((anteriormenteDesabilitados) => {
        const novosDesabilitados = [...anteriormenteDesabilitados];
        novosDesabilitados[indice] = true;
        return novosDesabilitados;
      });
      setClasseLetras((classesAnteriores) => {
        const novasClases = [...classesAnteriores];
        novasClases[indice] = "letra letra-desabilitada";
        return novasClases;
      });
    
      let letrasCorretas = [...letrasCorretasSelecionadas];
      if (acertouLetra === true) {
        letrasCorretas.push(letra);
      } else {
        atualizaContadorErros();
      }
      setLetrasCorretasSelecionadas(letrasCorretas);
      checaLetras(letrasCorretas);
    }
    
    function cliqueDoBotaoLetra (indice, letra) {
      if (arrayPalavraAleatoria.includes(letra)) {
        botaoDeLetra(indice, letra, true);
      } else {
        botaoDeLetra(indice, letra, false);
      }
    }
    
    return (
        <div className="container-letras">
          {alfabeto.map((letra, indice) => <button data-test="letter" key={letra} 
          className={classeLetras[indice]} 
          disabled={desabilitados[indice]} 
          onClick={() => cliqueDoBotaoLetra(indice, letra)}>
          {letra}
          </button>)} 
        </div>
    );
}