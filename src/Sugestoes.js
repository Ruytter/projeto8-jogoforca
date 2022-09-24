function Sugestao(props) {
    return (
      <div class="sugestao">
        <div class="usuario">
          <img src={props.img} alt= ""/>
          <div class="texto">
            <div class="nome">{props.user}</div>
            <div class="razao">Segue você</div>
          </div>
        </div>
  
        <div class="seguir">Seguir</div>
      </div>
    );
  }  
  
  export default function Sugestoes() {
    const sugestaoUsers = [
      {
        img: "assets/img/bad.vibes.memes.svg",
        user: "bad.vibes.memes"
      },
      {
        img: "assets/img/chibirdart.svg",
        user: "chibirdart"
      },
      {
        img: "assets/img/razoesparaacreditar.svg",
        user: "razoesparaacreditar"
      },
      {
        img: "assets/img/adorable_animals.svg",
        user: "adorable_animals"
      },
      {
        img: "assets/img/smallcutecats.svg",
        user: "smallcutecats<bad.vibes.memes"
      }
    ];
    
    return (
      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
  
        {sugestaoUsers.map((s) => (
          <Sugestao img={s.img} user={s.user} />
        ))}
  
          <div class="seguir">Seguir</div>
        </div>
    );
  }