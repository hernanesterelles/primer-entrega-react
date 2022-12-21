import { ItemListContainer } from "./ItemListContainer/itemlistContainer";
import { NavBar } from "./components/NavBar/navbar";
import './ComponenteNuevo';






function App() {
  return (
    <div>
     < NavBar />
     <ItemListContainer  greeting="Bienvenidos a nuestra tienda online"/>
    </div>
  );
  
   
  
}

export default App;
