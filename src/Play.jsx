
import Nav from "./Nav";
import { useState } from "react";

const Play=()=>{
    const [value,setValue]=useState(1);
   
    const rollDice = () => {
        let y = Math.random() * 6;
        y = Math.floor(y) + 1;
        console.log(y);
        setValue(y);
    };
   return (
    <div className="played">
        <Nav y={value}/>
        <div className="contain">
            <div>
                <img onClick={rollDice} src={`./dice_${value}.png`}/>
            </div>
            <p>Click on the Dice to Roll</p>
        
        <div className="buttons">
            <button className="btne">Reset Score</button>
            <button className="btne">Show Rules</button>
            </div>
        </div>
    </div>
   )
}
export default Play;