import React from "react";
import ItemListContainer from "../components/list/ItemListContainer/ItemListContainer";
import Footer from "../components/navigation/Footer/Footer";

function ItemPage(){
    return(
        <>
            <h2 className="mt-14 ml-14 mb-9 font-sans2 font-medium text-2xl text-basic">Todos los NFT</h2>
            <ItemListContainer />
            <Footer />
        </>
        
    )
}

export default ItemPage;


