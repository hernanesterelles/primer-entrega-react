import {TbError404} from 'react-icons/tb'
import { Link } from 'react-router-dom'
import "./notFound.scss"
import {GiReturnArrow} from 'react-icons/gi'

const  NotFound = () => {
    return (
        <div className='container '>
            <p className='notFound'> Oops, ha ocurrido un error</p>
            <p className='not'><TbError404/></p>
            <Link className="notFound"to="/"  >Volver</Link>
                <GiReturnArrow/>
            
            
        </div>

    )
}
export default NotFound