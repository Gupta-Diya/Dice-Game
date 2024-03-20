import { useState } from "react"

const Nav=({y})=>{
  
    const [counter,setCounter]=useState(0);
    const [selectedNumber, setSelectedNumber] = useState(null);
   
    const match=(x)=>{ 
        if (selectedNumber !== null){
         if (x === y) {
            console.log({counter});
        setCounter(counter+ 1);
        setSelectedNumber(null);
        

    }
}
else{
    alert("please select a number");
}


   
    }
    return (
        <div className="nav-bar">
         <div className="count">{counter}
         <br />
         <span>Total Score</span>
         </div>
         <ul className="lists">
            <li><div className="number" id="1" onClick={()=>{setSelectedNumber(1);
                match(1);
            }
                }>1</div></li>
            <li><div className="number" id="2" onClick={()=>match(2)}>2</div></li>
            <li><div className="number" id="3" onClick={()=>match(3)}>3</div></li>
            <li><div className="number" id="4" onClick={()=>match(4)}>4</div></li>
            <li><div className="number" id="5" onClick={()=>match(5)}>5</div></li>
            <li><div className="number" id="6" onClick={()=>match(6)}>6</div>
            <span>Select Number</span>
            </li>
           
         </ul>
        

        </div>
    );
};
export default Nav;