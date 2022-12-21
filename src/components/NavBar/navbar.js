import './NavBar.scss'
import '../MiComponentes'
import { CartWidget } from '../MiComponentes'



 export const NavBar = () => {
    return( 
        <header>
            <h1>Tienda Online</h1>
            <nav>
                <a className='link' href= "">Digital</a>
                <a className='link' href = "">Deportivo</a>
                <a className='link' href = "">Analogicos</a>
                <a className='link3' href=  ""><span className='Cantidad'>9</span><CartWidget/></a> 
                        
            </nav>
        </header>

    )
}


    