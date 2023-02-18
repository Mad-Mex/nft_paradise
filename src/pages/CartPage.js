import React, { useContext } from "react";
import CartProducts from "../components/cart/CartProducts/CartProducts";
import EmptyCart from "../components/cart/EmptyCart/EmptyCart";
import { CartContext } from "../context/CartContext";


function CartPage(){

    const {cart} = useContext(CartContext);
  
    return(
      
        <>

        {!cart.length ? <EmptyCart /> : <CartProducts />}
        
        </>

    )
}

export default CartPage;
