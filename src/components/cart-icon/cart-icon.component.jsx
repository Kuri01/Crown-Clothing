import { CartContext } from '../../contexts/cart.context';
import {
  ShoppingIcon,
  CartIconContainer,
  ItemCount,
} from './cart-icon.styles.jsx';
import { useContext } from 'react';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  return (
    <CartIconContainer>
      <ShoppingIcon
        className='shopping-icon'
        onClick={() => setIsCartOpen(!isCartOpen)}
      />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
