import React, {useContext, useEffect, useState} from "react";
import { db } from "../../../api/firebase";
import { doc, increment, serverTimestamp, updateDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { createOrderFirestore } from "../../../api/data";
import { CartContext } from "../../../context/CartContext";
import successfulPurchase from "../../utils/Modals/successfulPurchase";
import "./CartProducts.css";


function CartProducts(){

    const {cart, removeCartItem, emptyCart} = useContext(CartContext);   
    let indexCart = 1;

     {/*Suma de los productos */}
    const [total,setTotal] = useState()

    useEffect(() =>{
      const totalAmount = cart.reduce((total, nft) => total + (nft.price * nft.quantity), 0)
      setTotal(totalAmount)

    }, [cart] )



    {/*Crear orden */}

    function createOrder(){
      
      const orderInfo = cart.map( item => ({
        id : item.id,
        title : item.title,
        price : item.price,
        quantity : item.quantity 
      })
       )

      let order = {
        buyer : {
          name  : "Santi Jiménez",
          phone : "1122456785",
          mail  : "firaz@gmail.com"
        },
        items : orderInfo,
        date: serverTimestamp(), 
        total : total + "Eth"
      }

      createOrderFirestore(order) 
        .then(result =>{
          successfulPurchase(result)
  
          cart.forEach(async (item) =>{
            const nftRef = doc(db, "nftData", item.id)
            await updateDoc(nftRef, {
              stock : increment(-item.quantity)
            })
          })
          emptyCart()
        }) 

        .catch(error => alert("Tu orden no pudo ser procesada. Vuelve a intentarlo" + error))
    }


            
    return(

        <div className="font-sans2">

           <div className="flex justify-between w-[48.5rem] mt-16 mb-20 ml-[3.8rem]">
              <h2 className="font-medium text-2xl text-basic">Tu carrito de compra</h2>
              <h2 className="font-medium text-xl text-basic"> <span className="text-success">
              {cart.length} {cart.length === 1 ? "Item" : "Items" }</span></h2>
           </div>


          {/*Contenedor lado izquierdo - desglose del producto */}            

          <div className="flex justify-around mx-0">

              <div className="ml-0 pl-0">


                {/*Contenedor lado izquierdo - títulos */}

                <div className="flex mb-9 pb-[0.625rem] w-[48rem] border-b-2 border-grayish1 ">

                    <div className="w-[28%]">
                      <h2 className="cart-container-title">Detalle del producto</h2>
                    </div>

                    <div className="flex justify-center w-[22%]">
                      <h2 className="cart-container-title">Cantidad</h2>
                    </div>

                    <div className="flex justify-center w-[20%]">
                      <h2 className="cart-container-title">Precio</h2>
                    </div>

                    <div className="flex justify-center w-[22%]">
                      <h2 className="cart-container-title">Subtotal</h2>
                    </div>
                
                </div>


                {/*Contenedor lado izquierdo - items en el carrito*/}
               
                {cart.length > 0 && cart.map(nftCart => ( 

                  <div className="flex mt-6 mb-8">

                    <div key={nftCart.id} className="flex items-center w-[48rem] h-[5.5rem] mb-2 bg-grayish">

                      <div className="flex items-center w-[30%] h-full">
                        <img src={nftCart.img} alt="miniatura del NFT" className="w-11 h-11 mr-5 ml-4
                        object-cover rounded-full" />
                        <h3 className="cart-item">{nftCart.title}</h3>
                      </div>

                      <div className="cart-container-item w-[20%] h-full">
                        <h3 className="cart-item">{nftCart.quantity} </h3>
                      </div> 
                    
                      <div className="cart-container-item w-[22%] h-full">
                        <h3 className="cart-item tracking-wider">
                        {nftCart.price} Eth</h3>
                      </div>

                      <div className="cart-container-item w-[22%] h-full">
                        <h3 className="cart-item tracking-wider">
                        {nftCart.price * nftCart.quantity} Eth</h3>
                      </div>
                                      
                      <div className="cart-container-item w-16 h-full bg-gray-700 cursor-pointer 
                        transition duration-300 hover:bg-rose-600" onClick={() => removeCartItem(nftCart.id)}>
                        <i className="fa fa-trash text-[1.32rem] text-white"></i>
                      </div>

                    </div>
                  </div>
                  ))
                }


                {/*Contenedor lado izquierdo - opciones: seguir comprando y vaciar carrito */}

                <div className="flex justify-between w-[48rem] font-sans2 ">

                  <div className="flex items-center justify-center">
                    <i className="fa fa-long-arrow-left mr-4 text-lg text-tertiaryLight2"></i>
                    <Link to="/">
                      <h2 className="font-semibold text-base text-tertiaryLight2">Seguir comprando</h2>
                    </Link>              
                  </div>

                  <h2 className="font-semibold text-base text-rose-500 border-b-[0.1875rem]
                   border-rose-500 cursor-pointer" onClick={emptyCart}>Vaciar carrito</h2>

                </div>

              </div>



            {/*Contenedor lado derecho - resumen de la compra */}  


            <div className="mb-16">

                <div className="w-[20rem] h-fit pt-6 pb-7 border border-grayish1 rounded-xl shadow-xl">
                
                  <h3 className="mb-9 ml-6 font-sans1 font-normal text-lg text-grayish4">
                  RESUMEN DE LA COMPRA</h3>

                  {cart.map(summaryCart =>       

                    <div key={summaryCart.id} className="flex mb-5">
                      <h3 className="cart-summary-text mr-20 ml-6"> Item {indexCart++} </h3>
                      <h3 className="cart-summary-text">
                      {summaryCart.price * summaryCart.quantity} Eth </h3>
                    </div>
                  )}

                  <hr className="mx-6 mb-6 border-grayish3" />

                  <h3 className="mb-2 ml-6 font-sans1 font-normal text-grayish4">TOTAL</h3>

                  <div className="mb-10">                 
                    <h2 className="mr-3 ml-6 font-semibold text-4xl text-grayish4 ">
                    {Math.round(total * 100) / 100} Eth </h2> 
                  </div>

                  <button className="w-[17rem] h-12 mx-6 border border-secondary text-secondary 
                  rounded-lg hover:bg-secondary hover:text-white transition translate-y-0.5 duration-300"
                  onClick={createOrder}>Comprar</button>
                                           
              </div>             
            </div>
          </div>
        </div>        
    )
}

export default CartProducts;

