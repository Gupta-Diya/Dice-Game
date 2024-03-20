import styled from "styled-components";
import TotalScore from "./TotalScore";
import { useState } from "react";
import NumberSelector from "./NumberSelector";
import Rule from "./Rule";
import RoleDice from "./RoleDice";
const GamePlay=()=>{
    const [selectedNumber,setSelectedNumber]=useState();
    const [number,setnumber]=useState(1);
    const [counter,setcounter]=useState(0);
    const [error,seterror]=useState("");
    const [showRules,setshowRules]=useState(false);
    const generateRandom=()=>{
        if(!selectedNumber){
            seterror("you have not selected a number");
            return ;}
            seterror("");
        let n=Math.random();
        n=n*6;
        n=Math.floor(n)+1;
        if(n===selectedNumber){
            setcounter((prev)=>prev+n);
        }
        else{
            setcounter((prev)=>prev-2);
        }
        setnumber(n);
        setSelectedNumber();
        
    }
    const resetscore=()=>{
        setcounter(0);
    }
 
    return (
     <MainContainer>
        <div className="top-section">
        <TotalScore counter={counter} />
        <NumberSelector error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
        </div>
        <RoleDice number={number} generateRandom={generateRandom}/>
        <div className="btns">
            <Button onClick={resetscore}>Reset Score</Button>
           <br />
            <Button onClick={() => setshowRules((prev) => !prev)}>Show Rules</Button>
            </div>
            {showRules && <Rule />}
     </MainContainer>
       
    );
};
export default GamePlay;

const MainContainer=styled.div`
.btns{
    display:flex;
flex-direction:column;
align-items:center;
margin-top:12px;

}
    .top-section{
        display:flex;
        justify-content:space-around;
        align-items:end;

    }
`
const Button=styled.button`
     
    background-color:black;
    color:white;
    min-width:220px;
    padding:10px;
    margin:0px;
    font-size:15px;
    cursor: pointer;
    transition:0.4s background ease-in;

    &:hover{
        background-color:white;
        color:black;
        transition:0.3s background ease-in;
    }

`