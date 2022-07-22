
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Login from './componentes/Login';
import Listado from "./componentes/Listado";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Detalle from "./componentes/Detalle";
import Resultados from "./componentes/Resultados";


function App() {

  const favMovie = localStorage.getItem('favs');

  let tempMoviesInFavs;

  if (favMovie === null) {
    tempMoviesInFavs = []    
  }else{    
    tempMoviesInFavs = JSON.parse(favMovie)
  }

  console.log(tempMoviesInFavs)

  const addOrRemoveFromFavs=  e =>{
    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const imgURL = parent.querySelector('img').getAttribute('src');
    const title =  parent.querySelector('h5').innerText;
    const overview =  parent.querySelector('p').innerText;
    const movieData = {
      imgURL, title, overview,
      id:btn.dataset.movieId
    }

   /*  let movieIsInArray = tempMoviesInFavs.find(oneMovie =>{
      return oneMovie.id === movieData.id
    }) */

   /* if (!movieIsInArray) {
      tempMoviesInFavs.push(movieData);      
      localStorage.setItem('favs', JSON.stringify(tempMoviesInFavs));
      console.log("Se agrego la peli")            
    }  else {
      let moviesLeft = tempMoviesInFavs.filter(oneMovie => {
        return oneMovie.id !== movieData.id
      })
      localStorage.setItem('favs', JSON.stringify(moviesLeft));
      console.log("Se elimino la peli") 
    }  */
 
  }

  return (
    <BrowserRouter>
    <Header />
      <div className="container">
          <Routes>
            <Route exact path="/" element={<Login />} />     
            <Route path="/listado"  element={<Listado addOrRemoveFromFavs={addOrRemoveFromFavs} />} />
            <Route path="/detalle"  element={<Detalle />} />
            <Route path="/resultados"  element={<Resultados />} />
          </Routes> 
      </div>
     <Footer /> 
    </BrowserRouter>  
  );
}

export default App;
