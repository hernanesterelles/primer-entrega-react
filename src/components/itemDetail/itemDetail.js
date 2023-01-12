import { Link } from "react-router-dom"
import ItemCount from "../itemCount/itemCount"
import Boton from "../itemCount/itemCount"



  const  ItemDetail =({ img,categoria, precio,cantidad,id}) =>{
  
    return(       
            <div>               
               <img src={img}/>                   
                               
               <p>Precio ${precio}</p>
               <p>{cantidad}</p> 
               <small>{categoria}</small>
                <p>{id}</p> 
                <ItemCount  />
            </div>
   
       
    )
   }
   export default ItemDetail