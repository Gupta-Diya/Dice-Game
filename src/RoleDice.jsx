import { useState } from "react";
import styled from "styled-components";
const RoleDice=({generateRandom,number})=>{
    
  
    return (
        <RoleDiceContainer>
            <div>
                <img onClick={generateRandom} src={`./dice_${number}.png`}/>
                
            </div>
            <p>Clice the dice to roll</p>
           
        </RoleDiceContainer>
    );

};
export default RoleDice;
const RoleDiceContainer=styled.div`

display:flex;
flex-direction:column;
align-items:center;
margin-top:4px;


`

