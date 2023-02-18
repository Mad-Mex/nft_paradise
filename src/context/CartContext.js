import React, {useState, createContext} from "react";



const CartContext = createContext()


function CustomCartContext({children}){

    const [cart, setCart] = useState([])
    
    

    
    {/*Sirve para saber si un producto se encuentra dentro del carrito */}

    function isInCart(id){

        const nftInCart = cart.find(nftCart => nftCart.id === id)

        if(nftInCart){ 
        return true
        }else{
        return false;
        }  
    };



    {/*Si el producto se encuentra dentro del carrito, solamente se añade la nueva cantidad al carrito o, si no,
    se añade el nuevo producto al carrito */}

    function addCartItem(newNft){ 
        if(isInCart(newNft.id)){
            const updatedCart = cart.map(nftCart =>{
                if(nftCart.id === newNft.id){
                    return{
                        ...nftCart,
                        quantity : nftCart.quantity + newNft.quantity
                    };
                } else{
                    return nftCart;
                }
            });
            setCart (updatedCart);
            console.log(updatedCart)
        }else{
          setCart([...cart, newNft])
          console.log(newNft)
        }     
    };



    {/*Elimina un producto del carrito */}

    function removeCartItem(id){   
        setCart(cart.filter(cartItem => cartItem.id !== id))
    };



    {/*Elimina todos los productos del carrito */}

    function emptyCart(){
        setCart([])
    };


   
        
    return(
  
        <CartContext.Provider value={{cart, isInCart, addCartItem, removeCartItem, emptyCart }}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CustomCartContext};