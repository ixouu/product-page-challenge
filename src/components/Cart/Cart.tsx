import {useCartContext}  from '../../context/CartContext';
import { CartContextInterface } from "../../@types/cart";

const Cart = () => {

  const {productsInCart} = useCartContext() as CartContextInterface

  return (
    <>
    {productsInCart > 0 ? (<span className='animate-cartDown absolute -bottom-5 right-1 text-xs font-semibold p-[5px] text-center align-middle h-7 w-7 text-white rounded-full bg-gradient-to-r from-stone-800 to-blue-700 drop-shadow-md '
    >{productsInCart}</span>)
    : null
  }
  </>)
}

export default Cart

