import Item from "../Item/Item";
import Loader from "../../utils/Loader/Loader";



function ItemList({nftList, loading}){
    return(

            <div className="flex flex-wrap mb-14">

            { loading ? < Loader /> : 
             
              nftList.map(nft => {
              return ( 
                
                <Item 
                key={nft.id}
                {...nft}  
                />
            )})
            }
           
            </div>
    
    )
}

export default ItemList;

