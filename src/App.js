import { Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css"
import CountryDetails from "./Pages/CountryDetails";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/details" element={<CountryDetails/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
