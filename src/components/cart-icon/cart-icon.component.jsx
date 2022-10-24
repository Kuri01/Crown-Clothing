import './cart-icon.styles.scss';
import { CartContext } from '../../contexts/cart.context';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  return (
    <div className='cart-icon-container'>
      <ShoppingIcon
        className='shopping-icon'
        onClick={() => setIsCartOpen(!isCartOpen)}
      />
      <span className='item-count'>0</span>
    </div>
  );
};

export default CartIcon;
