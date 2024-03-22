import styled from "styled-components";
const StartGame=({toggle})=>{
    return (
        <Container>
            <div>
                <img src="https://drive.google.com/file/d/1eNRZ8SEeFdNYotFfYh8UCfgbjba82ldT/view?usp=sharing"/>
            </div>
            <div className="content">
                <h1>Dice Game</h1>
                <Button onClick={toggle}>Play Now</Button>
            </div>
        </Container>
    )
}
export default StartGame;

const Container=styled.div`
height:100vh;
align-items:center;
max-width:1180px;
    display:flex;
    flex-flow:row;
    gap:100px;
    margin:0 auto;

    .content{
        
        h1{
            font-size:94px;
           white-space:nowrap;
        }
    }
`
const Button=styled.button`
     
    background-color:black;
    color:white;
    min-width:220px;
    padding:10px;
    font-size:20px;
    cursor: pointer;
    transition:0.4s background ease-in;

    &:hover{
        background-color:white;
        color:black;
        transition:0.3s background ease-in;
    }

`
