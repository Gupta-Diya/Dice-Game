import ReactDOM from "react-dom";
import Home from "./Home";
import Play from "./Play";
import { BrowserRouter,Routes,Route } from "react-router-dom";

const App=()=>{
    return (
        
            <BrowserRouter>
            <Routes>
                <Route path="/play" element={<Play/>}/>
                <Route path="/" element={<Home/>} />
            </Routes>
            </BrowserRouter>
           
       
    );
};

const container=document.getElementById("root");
const root=ReactDOM.createRoot(container);
root.render(<App />);