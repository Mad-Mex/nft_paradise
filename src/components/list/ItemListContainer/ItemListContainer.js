import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../../api/data";
import ItemList from "../ItemList/ItemList";


function ItemListContainer(){

  const [nftData, setNftData] = useState([])
  const [loading, setLoading] = useState(true)
  const {idCategory} = useParams()
  
     useEffect(() => {

          getData(idCategory)
            .then(nftData => {
              setNftData(nftData)
              setLoading(false)
            }) 
            
     }, [idCategory])

    return(
      
        <div>

          <ItemList
          nftList={nftData}
          loading={loading} />

        </div>
    )
}

export default ItemListContainer;

