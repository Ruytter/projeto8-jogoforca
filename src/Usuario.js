export default function Usuario(props) {
  return (
    <div class="usuario">
      <img src={props.img} alt="" onClick={props.clickImg} />
      <div class="texto">
        <strong>
          {props.nome === "" || props.nome === null
            ? "Seu nome aqui"
            : `${props.nome.toLowerCase()}`}
        </strong>
        <span>
          {props.nome === "" || props.nome === null
            ? "Click no lapis"
            : `${props.nome}`}
          <ion-icon onClick={props.clickNome} name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  );
}
