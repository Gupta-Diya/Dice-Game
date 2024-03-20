
import { useState } from "react";
import styled from "styled-components";
const NumberSelector=({error,selectedNumber,setSelectedNumber})=>{
    const numbers=[1,2,3,4,5,6];
   
    return (
      <NumberSelectorContainer>
        <p>{error}</p>
      <div className="conatiner">
      {numbers.map((value,i)=>
      <Box key={i} isSelected={value===selectedNumber} onClick={()=>setSelectedNumber(value)}>{value}</Box>
      )}
       </div>
       <p>Select a number</p>
      
      </NumberSelectorContainer>
    );
};
export default NumberSelector;

const  NumberSelectorContainer=styled.div`
   
  display:flex;
  flex-direction:column;
  align-items:end;
    .conatiner{
        display:flex;
    gap:20px;
    }
    p{
        font-size:26px;
        font-weight:300;
    }
`

const Box=styled.div`


 width:72px;
    height:72px;
  display:grid;
  place-items:center;
  font-size:24px;
  font-weight:600;
    border:1px solid black;
    background-color:${(props)=>(props.isSelected ? "black" : "white")};
    color: ${(props)=>(props.isSelected ? "white" : "black")};
`
