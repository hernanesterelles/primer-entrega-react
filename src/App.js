import { ItemListContainer } from "./ItemListContainer/itemlistContainer";
import { NavBar } from "./components/NavBar/navbar";
import './ComponenteNuevo';
import Boton from "./components/itemCount/itemCount";
import { Button } from "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer";
import ItemDetail from "./components/itemDetail/itemDetail";
import Item from "./item/item";
import {BrowserRouter, Routes,Route, Navigate} from "react-router-dom"





function App() {

  return (
    <BrowserRouter>

        < NavBar />
    
      <Routes>
    
      
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="productos/:categoriaId" element={<ItemListContainer />}/> 
        <Route path="/detail/:itemId" element={<ItemDetailContainer />}/>      
        <Route path="*" element={<Navigate to={"/"} />}/>
      
      
      </Routes>
     
    </BrowserRouter>

    
  );
  
   
  
}

export default App;
