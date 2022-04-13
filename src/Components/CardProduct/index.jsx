const CardProduct = ({ product }) => {
  console.log(product);

  const { title, price, img } = product;
  return (
    <div>
      <h1>{title}</h1>
      <h3>{price}</h3>
      <img src={img} alt="" />
    </div>
  );
};

export default CardProduct;
