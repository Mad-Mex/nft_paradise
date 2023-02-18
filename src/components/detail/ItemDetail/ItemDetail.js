import React, { useContext, useState } from "react";
import "./ItemDetail.css";
import { CartContext } from "../../../context/CartContext";
import { GoToCart } from "../../utils/Buttons/Buttons";
import Loader from "../../utils/Loader/Loader";
import ItemCount from "../../detail/ItemCount/ItemCount"
import CollapseInfo from "../../utils/CollapseInfo/CollapseInfo";
import increaseImageSizeModal from "../../utils/Modals/increaseImageSizeModal";



function ItemDetail({nft}){

    const {addCartItem} = useContext(CartContext)    
    const [productAdded, setProductAdded] = useState(false)
    

    {/*Permite añadir los datos del producto y también la cantidad de objetos en el carrito de compra */}
    
    function addToCart(quantity){
      addCartItem({...nft, quantity})
      quantity > 0 && setProductAdded(true) 
    }

    
    return(

         <div className="font-sans2">

           <h2 className="mt-16 mb-9 ml-14 font-medium text-2xl text-basic" >Detalle del producto</h2>


           {/*Título y autor */}

           {!nft && !nft.img ?  <Loader /> : 

           <div className="flex">

             <img src={nft.img} alt="nft en tamaño mediano" className="w-[18rem] h-[24rem] ml-28 
             rounded-2xl shadow-lg object-cover cursor-zoom-in hover:brightness-[.78]" 
             onClick={() => increaseImageSizeModal(nft)} />

             <div className="flex flex-col ml-24">
                <h3 className="subtitle-item-detail mb-1.5 ">{nft.collection}</h3>
                <h2 className="mb-5 font-medium text-4xl text-basic"> 
                {`${nft.numberCollection} - ${nft.title}`}</h2>
                <h3 className="subtitle-item-detail mb-1.5">Creador</h3>

                <div className="flex items-center mb-14 ">
                  <img src={nft.authorImg} alt="autor del NFT" className="w-12 h-12 rounded-full 
                  object-cover"/>
                  <h4 className="ml-4">{nft.author}</h4>  
                </div>


              {/* Precio y compra del producto */}

              <div className="w-[28rem] h-[21rem] mb-20 border border-grayish1 rounded-[0.625rem] 
              shadow-xl">

                  <h3 className="subtitle-item-detail mt-6 mb-2 ml-8">Precio</h3>

                  <div className="flex">
                    <img src="/assets/ethereum_icon.svg" alt="icono de ethereum" className="w-8 h-8 
                    mr-4 ml-8 object-cover"/>      
                    <h2 className="mb-6 font-medium text-3xl text-basic">{nft.price} Eth</h2>
                  </div>


                  {/*Item Count (cuando el usuario añade un producto al carrito, 
                  aparece un botón para terminar la compra)*/}     
                    
                  { !productAdded ?   
                    
                      <div className="flex">
                        <div className="mr-20 mb-4">
                          <h3 className="subtitle-item-detail mb-4 ml-8">Cantidad</h3>

                          <ItemCount
                          initial={0}
                          nft={nft}
                          addToCart={addToCart}
                          /> 

                        </div>
                      </div>

                     : <GoToCart />                  
                  }   
              </div>


              {/*Descripción del producto */}

              <>
                <CollapseInfo
                nft={nft}                   
                />
              </>                

            </div>    
          </div>
        }  

      </div>
    )
}


export default ItemDetail;

