import "./Item.css";
import {Link} from "react-router-dom";

 
function Item({id, img, collection, numberCollection, title, price, stock}){

    return(
                  
        <div className="w-64 h-[26rem] mb-[6.8rem] ml-14 font-sans2">

          <Link to={"/item/" + id } >  

           <div className="nft-card"> 


        {/*Card - imagen, título y colección */}

              <div>

                <img src={img}  alt="nft destacado" className="w-72 h-[17rem] bg-cover object-cover 
                rounded-t-lg" />
                <h4 className="nft-card-title ml-4 mb-[0.25rem]"> {collection}</h4>
                <p className="nft-card-details ml-4 mb-[0.875rem]"> {numberCollection} - {title}</p>
                <hr className="ml-4 border-grayish1"/> 

              </div>

        

        {/*Card - precio y disponibilidad */}    

              <div className="flex">

                <div>
                  <h4 className="nft-card-title ml-4 mb-[0.375rem] ">Precio</h4>
                  <div className="flex">
                    <img src="/assets/ethereum_logo.png" alt="ethereum logo" className="w-5 h-5 
                    ml-4 mr-[0.375rem] bg-cover"/>
                    <p className="nft-card-details">{price} Eth</p>
                  </div>
                </div>

                <div>
                  <h4 className="nft-card-title ml-8 mb-[0.375rem]">Disponibildad</h4> 
                  <p className="nft-card-details ml-8 ">{stock}</p> 
                </div>

              </div>

           </div>
          </Link> 
        </div>
    )
}

export default Item;