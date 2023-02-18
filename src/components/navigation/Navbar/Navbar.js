import "./Navbar.css";
import CartWidget from "../../utils/CartWidget/CartWidget";
import {LoginButton, ConnectWalletButton} from "../../utils/Buttons/Buttons";
import { Link } from "react-router-dom";


function Navbar(){
    return(

        <div className="flex items-center h-24 px-14 bg-background">
        
        {/*Logo*/}  
          <div className="flex">

            <Link to="/">
            <h2 className="mr-32 pt-4 font-sans1 font-normal text-2xl text-white uppercase">Nft Paradise</h2>
            <img src="/assets/nft_paradise_logo.png" alt="nft paradise logo" className="-mt-6 ml-[7.7rem] w-8 h-8" />
            </Link>

          </div> 
            


        {/*Navbar enlaces*/}
          <div>
            <ul className="flex ml-6">
             <li className="navbar-link">
                <Link to="/category/arte">arte</Link>
             </li>
             <li className="navbar-link">
                <Link to="/category/coleccionables">coleccionables</Link>
             </li>
             <li className="navbar-link">
                <Link to="/category/otros_mundos ">otros mundos</Link>
             </li>
             
            </ul>
          </div>



        {/*Carrito de compras*/}
          <div className="mr-14 ml-10">
            <CartWidget />
          </div>  



        {/*Botones de registro y de enlace a la wallet */}  
          <LoginButton />
          <ConnectWalletButton />   
          
        </div>
    )
}

export default Navbar;

