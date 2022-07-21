
import { Routes, Route } from "react-router-dom";
import Login from './componentes/Login';
import Listado from "./componentes/Listado";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login />} />     
      <Route path="/listado"  element={<Listado />} />
    </Routes> 
    </BrowserRouter>   
    </div>
  );
}

export default App;
