import React, {useState} from "react";
import addToCartModal from "../../utils/Modals/addToCartModal";
import "./ItemCount.css";

  

function ItemCount({ addToCart, initial, nft }){

    const [count, setCount] = useState(initial);
    

    {/*Permite añadir la cantidad del producto seleccionado al carrito y manda una alerta al usuario */}

    function onAdd(){
      count > 0 && addToCartModal(nft, count)
      addToCart(count)
    }



    {/*Incrementa y  disminuye la cantidad del pruducto seleccionado */}
    
    function sum(){
        if(count < nft.stock){
            setCount(count + 1)
          
        } else if(nft.stock === 0){
            return
        }
    }

    function subtract(){
        count > 0 && setCount(count - 1)
    }


    
    return(

      <>

        { nft.stock > 0  ? 

          <div className="font-sans2">

            <div className="mb-3"> 
              <button className="quantity-button-layout ml-8 mr-4" onClick={subtract}> - </button>    
              <input className="w-[7.5rem] h-9 font-normal text-xl text-center text-basic 
              border border-grayish1 rounded-[0.625rem]" placeholder={count} />
              <button className="quantity-button-layout ml-4" onClick={sum}> + </button>
            </div>

            <div className="flex mb-4">
              <h3 className="mr-4 mb-4 ml-32 font-medium text-xs text-basic"> Disponibilidad </h3>
              <p className="font-normal text-xs"> {nft.stock} <span className="text-grayish2"> 
              / {nft.totalUnits} </span></p>
            </div>

            <div className="flex ml-8">
              <button onClick={onAdd} className="button-layout2 button-hover bg-secondary text-white ">
              Añadir al carrito</button>
            </div>

           </div>
           
           : <h2 className="ml-8 font-semibold text-3xl text-warning uppercase">Agotado</h2>  
           
           }

      </>

       
    )
}



export default ItemCount;



