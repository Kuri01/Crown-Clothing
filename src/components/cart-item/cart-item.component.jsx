import {
  CartItemContainer,
  ItemDetail,
  Name,
  Price,
} from './cart-item.styles.jsx';
const CartItem = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetail>
        <Name>{name}</Name>
        <Price>
          {quantity} x ${price}
        </Price>
      </ItemDetail>
    </CartItemContainer>
  );
};
export default CartItem;
