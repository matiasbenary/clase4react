import Button from "../Button";
import Card from "../Card";

const Example = () => {
  const item = {
    title: "Coombes",
    type: "Lounge",
    price: 2600,
    rating: 4,
    img: "https://i.imgur.com/ZAxMGG5.png",
    isAvailable: true,
    onSale: false
  };
  return (
    <div className="App">
      <Button text={item.title} />
      <Card
        title={item.title}
        pepe={13}
        casa="ejemplo"
        estaAbierto={false}
        item={item}
        esVisible={true}
      />
      <h2 className="title">Como</h2>
    </div>
  );
};

export default Example;
