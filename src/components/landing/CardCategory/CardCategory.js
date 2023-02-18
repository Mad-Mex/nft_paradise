import {Link} from "react-router-dom";


function CardCategory(props){
    return(

        <div>

            <Link to={props.link}>
              <div className="w-72 h-[8.5rem] transition duration-200 ">

                  <img src={props.url} alt="categoria"  className="w-[19rem] h-full rounded-2xl 
                  object-cover brightness-95 hover:brightness-[.60] transition duration-300" />
                
                  <p className=" relative font-sans2 font-medium text-lg text-white text-center
                  transform -translate-y-[5rem]"> {props.categoryTitle}</p>
              
              </div> 
             </Link>  

        </div>
    )
}

export default CardCategory;

