import Button from "../Button";
import style from "./Card.module.css";

const Card = ({ casa, item, title, estaAbierto, esVisible }) => {
  console.log(casa, item, estaAbierto);
  if (!esVisible) {
    return null;
  }

  return (
    <>
      <h1>{casa}</h1>
      <img src={item.img} alt="" />
      <div className={style.container}>
        <h1 className={style.title}>{title} </h1>
      </div>
      <div className={style.container}>
        <h1 className={style.title}>
          {estaAbierto ? "Esta Abierto" : "Esta cerrado"}
        </h1>
        {estaAbierto && <Button text="Comprar" />}
        {estaAbierto || <Button text="Reservar" />}
      </div>
    </>
  );
};

export default Card;
