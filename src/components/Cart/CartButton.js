import { useDispatch } from 'react-redux';
import classes from './CartButton.module.css';
import { cartActions } from '../Store';

const CartButton = (props) => {
  
  const dispatch = useDispatch();

  const cartButtonHandler = () => {
      dispatch(cartActions.toggleCart());
  }
  
  
  return (
    <button onClick={cartButtonHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
