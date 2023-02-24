import palavras from "./components/palavras";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import { useState } from "react";
import forca0 from "./assets/img/forca0.png";


export default function App() {
  const [arrayPalavraAleatoria, setArrayPalavraAleatoria ] = useState([]);
  const [desabilitado, setDesabilitado] = useState(Array(26).fill(true));
  console.log(desabilitado)
  const [contadorErros, setContadorErros] = useState (0);
  const [imagemForca, setImagemForca] = useState(forca0);
  // const [letraEscolhida, setLetraEscolhida] = useState("");
  // const [mostraPalavra, setMostraPalavra] = useState (false);
  // const [escondePalavra, setEscondePalavra] = useState([]); 
  return (
    <>
    <Jogo
    desabilitado={desabilitado}
    setDesabilitado={setDesabilitado}
    arrayPalavraAleatoria={arrayPalavraAleatoria} 
    setArrayPalavraAleatoria={setArrayPalavraAleatoria}
    contadorErros={contadorErros}
    setContadorErros={setContadorErros}
    imagemForca={imagemForca}
    setImagemForca={setImagemForca}
    />
    <Letras
    contadorErros={contadorErros}
    setContadorErros={setContadorErros}
    desabilitado={desabilitado}
    setDesabilitado={setDesabilitado}
    arrayPalavraAleatoria={arrayPalavraAleatoria}
    imagemForca={imagemForca}
    setImagemForca={setImagemForca}
    />
    </>
  );
}



