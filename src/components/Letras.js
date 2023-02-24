import forca1 from "../assets/img/forca1.png";
import forca2 from "../assets/img/forca2.png";
import forca3 from "../assets/img/forca3.png";
import forca4 from "../assets/img/forca4.png";
import forca5 from "../assets/img/forca5.png";
import forca6 from "../assets/img/forca6.png";

export default function Letras ({imagemForca, setImagemForca, contadorErros, setContadorErros, setDesabilitado, desabilitado, arrayPalavraAleatoria}){

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    console.log(arrayPalavraAleatoria)
    console.log(contadorErros)
    console.log(desabilitado)

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

    return (
        <div className="container-letras">
          {alfabeto.map((letra, indice) => <button data-test="letter" key={letra} className="letra" disabled={desabilitado[indice]} onClick={() => {
            {arrayPalavraAleatoria.includes(letra) ? 
            alert(`a palavra tem a letra ${letra}`) : 
            alert(`a palavra não tem a letra ${letra}`)
            setDesabilitado((anteriormenteDesabilitados) => {
              const novosDesabilitados = [...anteriormenteDesabilitados];
              novosDesabilitados[indice] = true;
              return novosDesabilitados;
            });
            atualizaContadorErros () 
          }
          }}>{letra}</button>)}  
        </div>
    );
}