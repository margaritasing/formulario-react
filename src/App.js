
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Login from './componentes/Login';
import Listado from "./componentes/Listado";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Detalle from "./componentes/Detalle";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <div className="container">
          <Routes>
            <Route exact path="/" element={<Login />} />     
            <Route path="/listado"  element={<Listado />} />
            <Route path="/detalle"  element={<Detalle />} />
          </Routes> 
      </div>
     <Footer /> 
    </BrowserRouter>  
  );
}

export default App;
