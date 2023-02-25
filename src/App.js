import palavras from "./palavras";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import { useState } from "react";
import forca0 from "./assets/img/forca0.png";


export default function App() {
  const [arrayPalavraAleatoria, setArrayPalavraAleatoria ] = useState([]);
  const [desabilitados, setDesabilitados] = useState(Array(26).fill(true));
  console.log(desabilitados)
  const [contadorErros, setContadorErros] = useState (0);
  const [imagemForca, setImagemForca] = useState(forca0);
  const [classeLetras, setClasseLetras] = useState(Array(26).fill("letra letra-desabilitada"));
  const [letrasCorretasSelecionadas, setLetrasCorretasSelecionadas] = useState ([]);
  const [classeLetraPalavra, setClasseLetraPalavra] = useState("cada-letra");
  // const [letraEscolhida, setLetraEscolhida] = useState("");
  // const [mostraPalavra, setMostraPalavra] = useState (false);
  // const [escondePalavra, setEscondePalavra] = useState([]); 
  return (
    <>
    <Jogo
    desabilitados={desabilitados}
    setDesabilitados={setDesabilitados}
    arrayPalavraAleatoria={arrayPalavraAleatoria} 
    setArrayPalavraAleatoria={setArrayPalavraAleatoria}
    contadorErros={contadorErros}
    setContadorErros={setContadorErros}
    imagemForca={imagemForca}
    setImagemForca={setImagemForca}
    setClasseLetras={setClasseLetras}
    letrasCorretasSelecionadas={letrasCorretasSelecionadas}
    setLetrasCorretasSelecionadas={setLetrasCorretasSelecionadas}
    classeLetraPalavra={classeLetraPalavra}
    setClasseLetraPalavra={setClasseLetraPalavra}
    />
    <Letras
    contadorErros={contadorErros}
    setContadorErros={setContadorErros}
    desabilitados={desabilitados}
    setDesabilitados={setDesabilitados}
    arrayPalavraAleatoria={arrayPalavraAleatoria}
    imagemForca={imagemForca}
    setImagemForca={setImagemForca}
    classeLetras={classeLetras}
    setClasseLetras={setClasseLetras}
    letrasCorretasSelecionadas={letrasCorretasSelecionadas}
    setLetrasCorretasSelecionadas={setLetrasCorretasSelecionadas}
    classeLetraPalavra={classeLetraPalavra}
    setClasseLetraPalavra={setClasseLetraPalavra}
    />
    </>
  );
}



