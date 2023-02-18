import {Link} from "react-router-dom";

function Hero(){

    return(

        <div className="w-full h-[30rem] mb-12 font-sans2">
            <img src="/assets/intro_to_nft.jpg" alt="hero image" className="w-full h-full object-full 
            brightness-[0.8] transform -scale-x-100"/>

           
            <div className="ml-14 pt-10">
                <h1 className="max-w-xl mb-4 pt-16 font-semibold text-[2.625rem] leading-[1.18]
                 text-white transform -translate-y-[31rem]" > Descubre, crea, vende y colecciona 
                <span className="text-yellow-400"> NFT </span> </h1>

                <p className="max-w-md mb-8 font-normal text-base text-white leading-[1.7] transform
                -translate-y-[31.3rem] ">NFT Paradise es el primer mercado virtual dirigido exclusivamente 
                a la comunidad de LATAM</p>

                <Link to="/item">
                    <button className="w-40 h-14 font-normal text-base text-white border
                     border-white rounded-lg transform -translate-y-[31rem] hover:bg-black hover:border
                     hover:border-black transition duration-200">Explorar</button>
                </Link>  
            </div>
           
        </div>
    )
}

export default Hero;

