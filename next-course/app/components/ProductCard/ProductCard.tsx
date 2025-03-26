import AddToCart from "../AddToCart";
import style from "./ProductCard.module.css";

const ProductCard = () => {
  console.log(style);
  return (
    <div className="p-0.5 text-red-400 border-2">
      <p>Title of the card</p>
      <p>Descripton to the card</p>
      <AddToCart />
    </div>
  );
};

export default ProductCard;
