
const Home=()=>{
    return(
        <div className="container">
         <div className="image">
            <img src="./dices.png"/>
         </div>
         <div className="centered">
            <h1>DICE GAME</h1>
            <a href="/play">
            <button className="btn">Play Game</button>
            </a>
         </div>
        </div>
    );
};
export default Home;