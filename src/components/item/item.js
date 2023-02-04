
import { Link } from 'react-router-dom'





const  Item =({prod}) =>{
 return(
    
      <div key={prod.id} className="cards">
            <img src={prod.img} alt="foto1"/>                    
            <p>{prod.reloj}</p>                    
            <p>Precio ${prod.precio}</p>            
            <p>categoria {prod.categoria}</p>
            <Link to={`/detail/${prod.id}`} className="VerMas"> Ver Mas</Link>            
         </div>

    
 )
}
export default Item