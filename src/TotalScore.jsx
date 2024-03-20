import styled from "styled-components";
const TotalScore=({counter})=>{
    return (
        <TotalScoreConatiner>
            <h1>{counter}</h1>
            <p>Total Score</p>
        </TotalScoreConatiner>
    );
};
export default TotalScore;

const TotalScoreConatiner=styled.div`
    max-width:200px;
    text-align:center;
   

    h1{
        font-size:62px;
        font-weight:600;
        margin-bottom:0;
      
    }
    p{
        
        font-size:26px;
        font-weight:300;
    }
`