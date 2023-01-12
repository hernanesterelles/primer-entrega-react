import { Button } from 'bootstrap'
import { Link } from 'react-router-dom'
import Boton from '../components/itemCount/itemCount'
import '../item/item.scss'



const  Item =({prod}) =>{
 return(
    
      <div key={prod.id} className="cards">
            <img src={prod.img}/>                    
            <p>{prod.reloj}</p>                    
            <p>Precio ${prod.precio}</p>
            <p>{prod.cantidad}</p> 
            <p>categoria {prod.categoria}</p>
            <Link to={`/detail/${prod.id}`} className="VerMas"> Ver Mas</Link>            
         </div>

    
 )
}
export default Item