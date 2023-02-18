import "./ValueProposal.css"

function ValueProposal(){
    return(

        <div className="w-full h-[46rem] bg-background font-sans2">

            <h2 className="ml-16 mb-14 pt-14 font-medium text-2xl text-white">¿Qué nos hace 
            diferentes?</h2>

            <div className="flex justify-between h-[36rem] mx-14 ">


                {/*Primer container */} 

                <div className="container">

                    <img src="/assets/grafiti.jpg" alt="primera característica" className="image-feature 
                    brightness-[.70] hover:brightness-[.25]" />

                    <div className="ml-[1.25rem]">    
                        <h3 className="container-title">Difusión de creadores emergentes</h3>
                    </div>

                    <div>
                        <h3 className="container-text mx-9 -translate-y-[16.5rem]">¡Nos encanta lo indie! 
                        Por eso utilizamos nuestro servidor en Discord para promover el trabajo de nuevos 
                        ilustradores y diseñadores </h3>
                    </div>
                </div>


                {/*Segundo container */}

                <div className="container">

                    <img src="/assets/second_value_proposal.jpg" alt="segunda característica" 
                    className="image-feature hover:brightness-[.30]" />

                    <div className="ml-[1.25rem]">    
                        <h3 className="container-title">Experiencias digitales únicas</h3>
                    </div>

                    <div>
                        <h3 className="container-text mx-10 -translate-y-[15rem] ">Realizamos una cuidadosa 
                        curaduría para ofrecer un catálogo en el que conviven lo artístico, lo lúdico, lo 
                        irreverente y también, ¿por qué no?, lo pop </h3>
                    </div>

                </div>

                {/*Tercer container*/}

                <div className="container">

                    <img src="/assets/partnership.jpg" alt="tercera característica" className="image-feature 
                    brightness-125 hover:brightness-[.50]" />

                    <div className="ml-[1.25rem]">    
                        <h3 className="container-title">Alianzas especiales con partners</h3>
                    </div>

                    <div>
                        <h3 className="container-text mx-10 -translate-y-[15rem]">Colaboramos con marcas, 
                        influencers y artistas reconocidos para crear piezas exclusivas y dignas del 
                        coleccionista más exigente </h3>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default ValueProposal;