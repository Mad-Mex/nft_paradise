import React from "react";
import "./HomePage.css"
import Hero from "../../components/landing/Hero/Hero"
import CardFeaturedCreators from "../../components/landing/CardFeaturedCreators/CardFeaturedCreators";
import CardCategory from "../../components/landing/CardCategory/CardCategory";
import CardFeaturedNft from "../../components/landing/CardFeaturedNft/CardFeaturedNft";
import ValueProposal from "../../components/landing/ValueProposal/ValueProposal";
import Drops from "../../components/landing/Drops/Drops";
import Footer from "../../components/navigation/Footer/Footer";



function HomePage(){

    return(
        <>

        {/*Hero image */}
        <Hero />



        {/*Sección Nft destacados */}

        <section>

          <h2 className="header-landing">Nft destacados</h2>

          <div>
            <CardFeaturedNft />
          </div>
          
        </section>


        
         {/*Sección categorías */}  

        <section>

          <h2 className="header-landing ">Buscar categorías</h2>

          <div className="flex justify-around mx-28 mb-32">

            <CardCategory
            link={"/category/arte"}
            url={"/assets/arte_categoria.jpg"}
            categoryTitle="Arte"/>

            <CardCategory
            link={"/category/coleccionables"}
            url={"/assets/handle_with_care.jpg"}
            categoryTitle="Coleccionables"/>

            <CardCategory
            link={"/category/otros_mundos"}
            url={"/assets/otros_mundos.jpg"}
            categoryTitle="Otros mundos"/>
  
          </div>
        </section>



        {/*Sección Subasta */}

        <section>

          <Drops />
         
        </section>



        {/*Sección creadores destacados*/}

        <section>

         <h2 className="mt-20 ml-14 mb-12 font-sans2 font-medium text-2xl text-basic">Creadores destacados</h2>

         <div className="flex justify-around mb-24">

          <CardFeaturedCreators
            background = "/assets/fondo_neon.jpg"
            author= "Edson Oliveira"
            authorImg = "/assets/edson_oliveira.jpg"
            skills= "Ilustrador • Diseñador UI"
            nftCreated= "12K"
            owners= "900"
            minPrice= "0.7 Eth"
             />

          <CardFeaturedCreators
            background = "/assets/fondo_3d.jpg"
            author= "Mk12997"
            authorImg = "/assets/mk12997.jpg"
            skills= "Especialista en modelado 3D"
            nftCreated= "5K"
            owners= "558"
            minPrice= "0.5 Eth"
             />

          <CardFeaturedCreators
            background = "/assets/fondo_urbano.jpg"
            author= "Omar Guerreiro"
            authorImg = "/assets/omar_guerreiro.jpg"
            skills= "Artista urbano"
            nftCreated= "1.3K"
            owners= "370"
            minPrice= "0.25 Eth" />  

         </div>
          
        </section> 



        {/*Sección propuesta de valor */}

        <section>
          <ValueProposal />
        </section>



        {/*Footer */}

        <Footer />

        </>
    )
}

export default HomePage;

