import { useState } from "react";

function CollapseInfo({nft}){

    const [active, setActive] = useState(false)

    function toggleInfo(){
        setActive(!active)
    }


    return(

        <div className="mb-28 font-sans2">

            <div className="flex items-center justify-between w-[33rem] h-16 border border-grayish2 
            rounded-t-[0.625rem] cursor-pointer" onClick={toggleInfo}>
                <div className="flex items-center">
                    <i className="ml-4 fa fa-align-justify text-sm "></i>
                    <h3 className="ml-4 font-semibold text-base text-grayish5 ">Descripción</h3>
                </div>
                
                <span className="mr-6 text-2xl"> 
                {!active ? <i className="fa fa-angle-down"></i> : <i className="fa fa-angle-up"></i>} 
                </span>
               
            </div>

            { !active ? null :

            <div className="w-[33rem] h-auto p-6 bg-grayish font-normal text-sm text-basic leading-6
             rounded-b-[0.625rem]">
                <p>{nft.description}</p>
            </div>
            }
            
        </div>

    )
}

export default CollapseInfo;