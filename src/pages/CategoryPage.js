import ItemListContainer from "../components/list/ItemListContainer/ItemListContainer";
import Footer from "../components/navigation/Footer/Footer";


function CategoryPage(){
    return(
        <div>

            <h2 className="mt-20 mb-12 ml-14 font-sans2 font-medium text-2xl text-basic">Búsqueda por 
            categorías</h2>

            <ItemListContainer />

            <Footer />

        </div>

    )
}

export default CategoryPage;