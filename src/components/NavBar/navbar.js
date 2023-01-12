import './NavBar.scss'
import '../MiComponentes'
import { CartWidget } from '../MiComponentes'
import { Link } from 'react-router-dom'
import ItemList from '../../itemList/itemList'



 export const NavBar = () => {
    return( 
       
            <header>
                <h1>Tienda Online</h1>
                <nav >
                    <Link className='link' to="/">Inicio</Link>
                    <Link className='link' to="/productos/Digital">Digital</Link>
                    <Link className='link' to="/productos/Deportivo">Deportivo</Link>
                    <Link className='link' to="/productos/Analogico">Analogico</Link>
                    
                    
                    <Link className='link3' to=  ""><span className='Cantidad'>9</span><CartWidget/></Link> 
                            
                </nav>
            </header>
        
    )
}


    
