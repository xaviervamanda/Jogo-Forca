
export default function Letras ({desabilitado, arrayPalavraAleatoria}){

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    console.log(arrayPalavraAleatoria)

    return (
        <div className="container-letras">
          {alfabeto.map(letra => <button key={letra} className="letra" disabled={desabilitado} onClick={() => {
            {arrayPalavraAleatoria.includes({letra}) ? alert(`a palavra tem a letra ${letra}`): alert(`a palavra não tem a letra ${letra}`)}
          }}>{letra}</button>)}  
        </div>
    );
}