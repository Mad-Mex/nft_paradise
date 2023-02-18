import "./CardFeaturedCreators.css";

function CardFeaturedCreators(props){
    return(

        <div>

            {/*Contenedor */}

            <div className=" w-[19rem] h-[22rem] mx-16 font-sans2 border border-grayish2 rounded-lg">
                
                {/*Card - parte superior : fondo y avatar del autor*/}

                <div className="rounded-t-lg">
                    
                    <img src={props.background}  alt="fondo neon" className="w-full h-24 rounded-t-lg
                     object-cover"/>
                    
                    
                    <div className="relative flex justify-center">
                        <img src={props.authorImg} alt="creador destacado" className=" w-16 h-16
                        border-4 border-white rounded-full object-cover transform translate-x-auto -translate-y-8" />
                    </div>

                </div>


                {/*Card - parte central : detalle nombre */}

                <div className="flex flex-col items-center mb-10 ">
                        <h3 className="mb-0.5  font-semibold text-base text-basic">{props.author}</h3>
                        <h4 className="mb-3 font-normal text-sm text-grayish3">{props.skills}</h4>
                        <button className="w-28 h-9 bg-sky-500 font-normal text-sm text-white 
                        rounded-md hover:bg-tertiary transform translate-y-0.5 duration-200 ">Seguir</button>
                </div>


                {/*Card - parte inferior : detalle estadísticas */}

                <div className="flex">

                    <div className="container-card-title">
                        <h4 className="container-card-text">Creados</h4>
                    </div>

                    <div className="container-card-title">
                        <h4 className="container-card-text">Compradores</h4>
                    </div>

                    <div className="w-1/3">
                        <h4 className="container-card-text">Precio min</h4>
                    </div>
               
                </div> 


                <div className="flex">

                    <div className="container-card-title">
                        <h4 className="container-card-text-bold">{props.nftCreated}</h4>
                    </div>

                    <div className="container-card-title">
                        <h4 className="container-card-text-bold">{props.owners}</h4>
                    </div>
                
                    <div className="w-1/3">
                        <h4 className="container-card-text-bold">{props.minPrice}</h4>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default CardFeaturedCreators;