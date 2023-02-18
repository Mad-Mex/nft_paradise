import CountdownTimer from "../../utils/CountdownTimer/CountdownTimer";
import "./Drop.css";

function Drops(){
    return(

        <div className="w-full h-[44rem] bg-background font-sans2">

            <h2 className="pt-14 mb-5 ml-14 font-medium text-2xl text-white">Subasta</h2>

            {/*Detalles de la subasta */}

            <div className="flex">


                {/*Contenedor - lado izquierdo */}

                <div>

                  
                    <div className="flex items-center justify-center mr-[36rem] mb-8 ml-14 w-[17rem] h-10
                        bg-accent1 rounded-full">        
                        <i className="fa fa-calendar mr-4 text-base"></i>
                        <h3 className="font-normal text-xs">Próxima - Lanzamiento : 30/09/22</h3>
                    </div>

                    <h3 className="mb-3 ml-14 font-medium text-xl text-white">¡Nicki G está aquí!</h3>

                    <p className="drop-text w-[36rem] mb-3"> Con motivo del lanzamiento de su sencillo más 
                    reciente, <em>Close night, Cold breeze, </em> Nicki G ha colaborado con nosotros para 
                    crear un NFT conmemorativo de esta canción tan íntima y especial. </p> 
                    
                    <p className="drop-text w-[36rem] mb-1">
                    La edición está limitada a <span className="font-semibold text-accent1">5</span> unidades 
                    e incluye un código QR, el cual desbloquea los siguientes elementos: </p> 
                    
                    <ul className="mb-8 ml-32 font-normal text-sm text-white leading-6 list-disc
                     marker:text-accent1 ">
                        <li>un folleto digital</li>
                        <li>dos versiones alternativas (acid y pop-rock)</li>
                        <li>una canción exclusiva del NFT</li>
                    </ul>
                    
                    <div className="flex items-center mb-10">
                        <h2 className="ml-14 font-normal text-lg text-white">Escucha un adelanto en 
                        </h2>
                        <img src="/assets/spotify_logo.png" alt="spotify logo" className="ml-5 w-28" />
                    </div>

                    {/*Cuenta regresiva para la fecha de lanzamiento */}

                    <CountdownTimer />  

                </div>

                    
    
                {/*Contenedor - lado derecho - Nft de la subasta */}

                <div>

                    {/* Imagen */}

                    <div className="w-[18rem] mb-4 rounded-lg">
                        <img src="/assets/nicki_g.jpg" alt="nft subasta" className="w-full h-[21rem] rounded-lg
                        brightness-[.73] object-cover"/>
                    </div>    

                    {/* Detalle precio */}

                    <div className="w-[18rem] h-[4.5rem] bg-white rounded-lg shadow-xl">

                        <div className="flex">
                            <p className="drop-card-title mr-10 ml-3"> Precio inicial</p>
                            <p className="drop-card-title"> Disponibilidad</p>
                        </div>

                        <div className="flex">
                            <div className="flex items-center">
                                <img src="/assets/ethereum_logo.png" alt="ethereum logo" className="mt-1 mr-2 ml-3 
                                w-5 h-5" />
                                <p className="drop-card-text mr-14">1.2 eth</p>
                            </div>

                            <p className="drop-card-text">5</p>
                        </div>
   
                    </div>

                </div>
            </div>            
        </div>
    )
}

export default Drops;