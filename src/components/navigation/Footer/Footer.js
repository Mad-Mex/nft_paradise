import "./Footer.css";
import {Link} from "react-router-dom";

function Footer(){
    return(
        <div className="w-full h-[36.7rem] bg-secondaryDark">

          {/*Footer - parte superior */}  

          <div className="flex mb-12">


            {/*Columna Logo */}

            <div>

                <div className="flex ml-14 mb-4 ">
                    <h2 className="mr-1 pt-8 font-sans1 font-normal text-xl text-white uppercase">Nft 
                    Paradise</h2>
                    <img src="/assets/nft_paradise_logo.png" alt="nft paradise logo" className="mt-9 w-8 h-8"/>
                </div>

                <p className="w-44 ml-14 font-sans2 font-normal text-sm text-white leading-6">NFT Paradise 
                es el primer mercado virtual dirigido exclusivamente a la comunidad de LATAM</p>

            </div>



            {/*Columna Mercado */}

            <div className="footer-container" >

                <h2 className="footer-title">Mercado</h2>

                <Link to="/item/">
                    <h2 className="footer-link mb-5">Todos los NFT</h2>
                </Link>

                <Link to="/category/arte">
                    <h2 className="footer-link mb-5">Arte</h2>
                </Link>

                <Link to="/category/coleccionables">
                    <h2 className="footer-link mb-5">Coleccionables</h2>
                </Link>

                <h2 className="footer-link mb-5">Comics</h2>

                <h2 className="footer-link mb-5">Gaming</h2>

                <h2 className="footer-link mb-5">Música</h2>

                <Link to="/category/otros_mundos">
                    <h2 className="footer-link">Otros mundos</h2>                    
                </Link>

            </div>



            {/*Columna Cuenta */}

            <div className="footer-container">

                <h2 className="footer-title">Cuenta</h2>
                <h2 className="footer-link">Perfil</h2>
                <h2 className="footer-link">Subastas activas</h2>
                <h2 className="footer-link">Mi colección</h2>
                <h2 className="footer-link-bottom">Ajustes</h2>

                <h2 className="footer-title">Creadores</h2>
                <h2 className="footer-link">Perfil</h2>
                <h2 className="footer-link">Ofertas recibidas</h2>
                <h2 className="footer-link">Estadísticas</h2>
                <h2 className="footer-link">Crear NFT</h2>
                <h2 className="footer-link">Crear colección</h2>
                
            </div>



            {/*Columna Recursos */}

            <div className="footer-container">

                <h2 className="footer-title">Recursos</h2>
                <h2 className="footer-link">FAQ</h2>
                <h2 className="footer-link">Ayuda</h2>
                <h2 className="footer-link">Cómo empezar</h2>
                <h2 className="footer-link-bottom">Blog</h2>
                

                <h2 className="footer-title">Nosotros</h2>
                <h2 className="footer-link">¿Quiénes somos?</h2>
                <h2 className="footer-link">Únete al equipo</h2>
                <h2 className="footer-link">Partners</h2>

            </div>


            {/*Columna Redes Sociales */}

            <div className="ml-24 pt-8 text-white ">

                <h2 className="footer-title">Síguenos en nuestras redes</h2>

                <div className="flex">
                    <img src="/assets/twitter_logo.png" alt="twitter logo" className="social-media-logo" />
                    <img src="/assets/instagram_logo.png" alt="instagram logo" className="social-media-logo" />
                    <img src="/assets/tiktok_logo.png" alt="tiktok logo" className="social-media-logo" />
                    <img src="/assets/discord_logo.png" alt="discord logo" className="social-media-logo" />
                </div>

            </div>
          </div>



          {/*Footer - parte inferior - enlace a Github */}

          <hr className="mx-14 mb-3 text-gray-50" />

          <div className="mx-14 flex items-center justify-between ">

            <div className="flex items-center">
                <i className="fa fa-copyright w-4 h-4 mr-2 text-white"></i>
                <p className="copyright-text">Nft Paradise 2022</p>
            </div>

            <div className="flex items-center">
                <p className="copyright-text mr-4">Mad Mex </p>
                <a href="https://github.com/Mad-Mex/nft_paradise"> <i className="fa fa-github text-2xl
                text-white"> </i> </a>    
            </div>
                
          </div>

        </div>

    )
}

export default Footer;