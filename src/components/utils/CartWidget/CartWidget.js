import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

function CartWidget(){

    const {cart} = useContext(CartContext);

    return(

        <Link to="/cart">
          <div className="relative flex">
            
            <i className="fa fa-shopping-cart text-3xl text-white"></i>

            {cart && cart.length > 0 && <span className="absolute w-6 h-6 left-[1.125rem] bottom-5 
            font-sans1 text-sm text-center text-white bg-warning rounded-full delay-200">
            {cart.length}</span>} 
            
          </div>
        </Link>        
    )
}

export default CartWidget;


