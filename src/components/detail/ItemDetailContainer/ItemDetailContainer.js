import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getNftDetail } from "../../../api/data";
import ItemDetail from "../ItemDetail/ItemDetail";



function ItemDetailContainer(){

    const [nftDetail, setNftDetail] = useState({}) 
    const {id} = useParams()

    useEffect(() => {

        getNftDetail(id)
            .then(nftDetail => {
                setNftDetail(nftDetail)
                
            })
    }, [])
    

    return(

        <div>

            <ItemDetail
            nft={nftDetail}
            /> 

        </div>
        
    )    
}

export default ItemDetailContainer;

