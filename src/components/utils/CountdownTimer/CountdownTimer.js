import React, {useEffect, useState} from "react";
import calculateCountdown from "./calculateCountdown";
import { EnterTheDrop } from "../Buttons/Buttons";


function CountdownTimer(){

    const [time, setTime] = useState(calculateCountdown());

    useEffect( () =>{

        const timeMeasurement = setTimeout( () => {
            setTime(calculateCountdown())
        }, 1000);
        return () => clearTimeout(timeMeasurement)    

    });


    const timer = [];

    Object.keys(time).forEach( interval => {
        if(!time[interval]){
            return;
        } timer.push(
                <span>{time[interval]} {interval} {" "}</span>
                    
            
        );
    });

    return(

        <div>

          {timer.length ? 
            <div className="flex items-center w-[27rem] h-[4.5rem] ml-14 bg-grayish1 font-sans2 font-medium
            text base rounded-lg">
                <h3 className="mr-3 ml-4 py-2 text-tertiary">Inicia en:</h3>
                <h3> {timer} </h3>  
            </div>
            
            : <EnterTheDrop />  
           }

        </div>


 
                        
                       
                 

       
        
    )
}

export default CountdownTimer;