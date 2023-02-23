import palavras from "./components/palavras";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import { useState } from "react";


export default function App() {
  const [arrayPalavraAleatoria, setArrayPalavraAleatoria ] = useState([]);
  const [desabilitado, setDesabilitado] = useState(true);
  // const [letraEscolhida, setLetraEscolhida] = useState("");
  // const [mostraPalavra, setMostraPalavra] = useState (false);
  // const [escondePalavra, setEscondePalavra] = useState([]); 
  return (
    <>
    <Jogo
    desabilitado={desabilitado}
    setDesabilitado={setDesabilitado}
    arrayPalavraAleatoria={arrayPalavraAleatoria} 
    setArrayPalavraAleatoria={setArrayPalavraAleatoria}/>
    <Letras
    desabilitado={desabilitado}
    setDesabilitado={setDesabilitado}
    arrayPalavraAleatoria={arrayPalavraAleatoria}/>
    </>
  );
}



