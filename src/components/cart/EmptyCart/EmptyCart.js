import { Link } from "react-router-dom";

function EmptyCart(){
    return(

        <div className="flex flex-col items-center justify-center mt-14 font-sans2 text-center">
            
            <div className="flex items-center justify-center w-36 h-36 bg-grayish1 rounded-full">
                <img src="/assets/shopping_cart.png" alt="carrito de compra vacío" 
                className=" w-[6rem] h-[6rem] top-0 left-0 bottom-0 right-0 opacity-90" />
            </div>
                       
            <h2 className="mt-6 font-medium text-2xl text-basic tracking-wide">Tu carrito 
            está vacío</h2>
            <h3 className="max-w-lg mt-5 font-normal text-[0.9375rem] text-basic leading-6">Parece que aún no has 
            añadido nada a tu carrito. ¡No te preocupes! Comienza a explorar ya mismo nuestro catálogo;
            mira los NFT en tendencia o participa en una subasta. Te aseguramos que muy pronto
            encontrarás una nueva pieza para tu colección. ¡Vamos!</h3>

            <Link to="/">
                <button className="w-40 h-12 mt-10 text-base text-secondary border border-secondary
                rounded-lg hover:bg-secondary hover:text-white hover:translate-y-0.5 transition : ;
                duration-200 "> Visitar la tienda</button>
            </Link>

        </div>

    )
}


export default EmptyCart;


