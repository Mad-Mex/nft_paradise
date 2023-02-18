import "./Buttons.css";
import {Link} from "react-router-dom";


function LoginButton(){
    return(

         <button className="button-layout ml-16 bg-secondary font-sans2 font-bold text-[0.9375rem]
          text-white">Regístrate</button>

    )
}


function ConnectWalletButton(){
    return(
         <button className="button-layout ml-10 bg-white"> 
         <img src="/assets/metamask_logo.png" alt="metamask logo" className="mx-auto"   /> 
         </button>
    )
}


function EnterTheDrop(){
    return(
        <button className="button-hover mb-10 ml-16 w-56 h-14 rounded-lg bg-tertiaryLight text-sans2 
        font-semibold text-base text-white">Entrar a la subasta</button>
    )
}


function GoToCart(){
  return(
    <Link to="/cart">
       <button className="button-hover w-[11.375rem] h-[3.5rem]  ml-8 font-sans2 font-normal text-lg text-basic 
       border border-basic rounded-lg hover:bg-basic hover:text-white "> Terminar compra </button>
    </Link>   
  )
}



export { ConnectWalletButton, EnterTheDrop, GoToCart, LoginButton};










