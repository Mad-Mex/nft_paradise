import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CustomCartContext } from "./context/CartContext";

import ItemDetailContainer from "./components/detail/ItemDetailContainer/ItemDetailContainer";

import Navbar from "./components/navigation/Navbar/Navbar";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage/HomePage";
import ItemPage from "./pages/ItemPage";
import CategoryPage from "./pages/CategoryPage";
import ScrollToTop from './components/navigation/ScrollToTop/ScrollToTop';


function App() {
  return (
    
      <CustomCartContext>
      <BrowserRouter>  

          <ScrollToTop />
          <Navbar />
          <Routes>
           
            <Route path="/" element={<HomePage />} /> 
            <Route path="/item/" element={<ItemPage />} /> 
            <Route path="/item/:id" element={<ItemDetailContainer />} /> 
            <Route path="/category/:idCategory" element={<CategoryPage />} /> 
            <Route path="/cart" element={<CartPage />} />
            
          </Routes>
                 
      </BrowserRouter>  
      </CustomCartContext>
      
  );
}

export default App;



