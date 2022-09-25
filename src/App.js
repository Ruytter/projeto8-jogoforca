import palavras from "./palavras";
import { useState } from "react";
import styled from "styled-components";
let arrayRender1 = [];
let arrayRender2 = [];
let cont = 0;

function App() {
  const listaLetras = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const [arrayRender, setArrayRender] = useState([]);
  const [forca, setForca] = useState("./assets/forca0.png");
  const [clicados, setClicados] = useState([...listaLetras, "chutou"]);
  const [fimDeJogo, setFimDeJogo] = useState("");
  const [palavraChute, setPalavraChute] = useState("");

  function Palavra() {
    setClicados([]);
    setFimDeJogo("");
    cont = 0;
    setForca(`./assets/forca${cont}.png`);
    const palavraSortiada =
      palavras[Math.floor(Math.random() * palavras.length)];
    arrayRender1 = [];
    arrayRender2 = [];
    for (let i = 0; i < palavraSortiada.length - 1; i++) {
      arrayRender1.push(palavraSortiada[i], " ");
      arrayRender2.push("_", " ");
    }
    arrayRender1.push(palavraSortiada[palavraSortiada.length - 1]);
    arrayRender2.push("_");
    setArrayRender(arrayRender2);
    console.log(arrayRender1);
  }

  function Letra(l) {
    if (clicados.includes(l)) {
      return;
    }

    setClicados([...clicados, l]);

    if (!arrayRender1.includes(l.toLowerCase())) {
      cont++;
      setForca(`./assets/forca${cont}.png`);
    }

    for (let i = 0; i < arrayRender1.length; i++) {
      if (arrayRender1[i] === l.toLowerCase()) {
        arrayRender2[i] = arrayRender1[i];
      }
      const newArray = [...arrayRender2];
      setArrayRender(newArray);
    }

    if (!arrayRender2.includes("_")) {
      setClicados([...listaLetras, 'chutou']);
      setFimDeJogo("verde");
    }

    if (cont === 6) {
      setClicados([...listaLetras, 'chutou']);
      setArrayRender(arrayRender1);
      setFimDeJogo("vermelha");
      //setForca(`./assets/forca6.png`);
      cont = 0;
    }
  }

  function Chutar() {
    if (clicados.includes("chutou")) {
      return;
    }
    let palavraSortiada = "";
    setClicados([...clicados, "chutou"]);
    arrayRender2 = [...arrayRender1];
    for (let i = 0; i < arrayRender1.length; i++) {
      if (arrayRender1[i] !== " ") {
        palavraSortiada += arrayRender1[i];
      }
    }

    setClicados([...listaLetras, "chutou"]);
    setArrayRender(arrayRender1);
    if (palavraChute === palavraSortiada) {
      setFimDeJogo("verde");
    } else {
      setFimDeJogo("vermelha");
    }
    alert(palavraChute);
    setPalavraChute('')
  }

  return (
    <Conteudo>
      <div className="animacao">
        <div className="forca">
          <img src={forca} alt="" />
        </div>
        <div className="palavra">
          <button onClick={Palavra}>Escolher Palavra</button>
          <h1 className={fimDeJogo}>{arrayRender}</h1>
        </div>
      </div>

      <div className="letras">
        <ul>
          {listaLetras.map((l) => (
            <li
              key={l}
              onClick={() => Letra(l)}
              className={clicados.includes(l) ? "clicado" : "nao-clicado"}
            >
              {l}
            </li>
          ))}
        </ul>
      </div>
      <div className="arriscar">
        <span>Já sei a palavra!</span>
        <input
          type="text"
          value={palavraChute}
          onChange={(e) => setPalavraChute(e.target.value)}
        ></input>
        <button
          onClick={Chutar}
          className={clicados.includes("chutou") ? "clicado" : "nao-clicado"}
        >
          Chutar
        </button>
      </div>
    </Conteudo>
  );
}

export default App;

const Conteudo = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;
