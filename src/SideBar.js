import React from "react";
import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";


export default function SideBar() {
  const imgPadrao = "assets/img/user-check_1.svg";
  const [nome, setNome] = React.useState("");
  const [img, setImg] = React.useState(imgPadrao);

  function inserirImg() {
    const imgPrompt = prompt("Insira o link de sua imagem de perfil!");
    if (imgPrompt === "" || imgPrompt === null) {
      setImg(imgPadrao);
    } else {
      setImg(imgPrompt);
    }
  }

  function inserirNome() {
    setNome(prompt("Insira o seu nome"));
  }

  return (
    <div class="sidebar">
      <Usuario
        nome={nome}
        img={img}
        clickImg={inserirImg}
        clickNome={inserirNome}
      />
      <Sugestoes />

      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}
