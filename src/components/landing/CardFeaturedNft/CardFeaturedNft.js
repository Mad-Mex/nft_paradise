import { useEffect, useState } from "react";
import { getFeaturedNft } from "../../../api/data";
import ItemList from "../../list/ItemList/ItemList";


function CardFeaturedNft(){

    const [featuredNft, setFeaturedNft] = useState()
    const [loading, setLoading] = useState(true)


        useEffect( () => {
            getFeaturedNft()
                .then(featuredNft => {
                    setFeaturedNft(featuredNft)
                    setLoading(false)
                })
        }, [])


    return(

        <>
            <ItemList 
                nftList={featuredNft}
                loading={loading}
            />        
        </>
    )
}

export default CardFeaturedNft;