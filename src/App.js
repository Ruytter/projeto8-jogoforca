import palavras from "./palavras";
import { useState } from "react";
import styled from "styled-components";
//let arrayRender1 = [];
//let arrayRender2 = [];
//let cont = 0;

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
  const [palavraJogo, setPalavraJogo] = useState("");
  const [palavraChute, setPalavraChute] = useState("");
  const [arrayRender1, setArrayRender1] = useState([]);
  const [arrayRender2, setArrayRender2] = useState([]);
  const [cont, setCont] = useState(0);

  function Palavra(p) {
    setClicados([]);
    setFimDeJogo("");
    setForca(`./assets/forca0.png`);
    const palavraSortiada =
      palavras[Math.floor(Math.random() * palavras.length)];
    setPalavraJogo(palavraSortiada);
    const array1 = [];
    const array2 = [];
    for (let i = 0; i < palavraSortiada.length - 1; i++) {
      array1.push(palavraSortiada[i], " ");
      array2.push("_", " ");
    }
    array1.push(palavraSortiada[palavraSortiada.length - 1]);
    array2.push("_");
    setArrayRender(array2);
    setArrayRender1([...array1]);
    setArrayRender2([...array2]);
    console.log(array1);
  }

  function Letra(l) {
    if (clicados.includes(l)) {
      return;
    }

    setClicados([...clicados, l]);
    let valor = cont;
    let array2 = [...arrayRender2];

    if (!arrayRender1.includes(l.toLowerCase())) {
      valor = cont + 1;
      setForca(`./assets/forca${valor}.png`);
    }

    for (let i = 0; i < arrayRender1.length; i++) {
      if (arrayRender1[i] === l.toLowerCase()) {
        array2[i] = arrayRender1[i];
      }
    }
    setArrayRender2([...array2]);
    setArrayRender(array2);
    setCont(valor);

    if (!array2.includes("_")) {
      setClicados([...listaLetras, "chutou"]);
      setFimDeJogo("verde");
    }
    console.log(valor);
    if (valor === 6) {
      setClicados([...listaLetras, "chutou"]);
      setArrayRender(arrayRender1);
      setFimDeJogo("vermelha");
      setCont(0);
    }
  }

  function Chutar() {
    if (clicados.includes("chutou")) {
      return;
    }

    setClicados([...listaLetras, "chutou"]);
    setArrayRender(arrayRender1);
    if (palavraChute === palavraJogo) {
      setFimDeJogo("verde");
    } else {
      setFimDeJogo("vermelha");
    }
    setPalavraChute("");
    setForca(`./assets/forca6.png`);
  }

  return (
    <Conteudo>
      <Animacao>
        <Forca>
          <img src={forca} alt="" />
        </Forca>
        <div className="palavra">
          <button onClick={Palavra}>Escolher Palavra</button>
          <h1 className={fimDeJogo}>{arrayRender}</h1>
        </div>
      </Animacao>

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
const Animacao = styled.div`
  display: flex;
  width: 100%;
  margin: 40px 0;
  justify-content: space-between;
`;

const Forca = styled.div`
  width: 50%;
  img {
    width: 100%;
  }
`;
