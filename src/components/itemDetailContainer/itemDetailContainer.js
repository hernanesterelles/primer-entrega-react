import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pedirDatos, pedirItemPorId } from "../../helpers/pedirDatos"
import ItemDetail from "../itemDetail/itemDetail"
import Item from "../itemDetail/itemDetail"
import "../itemDetailContainer/itemDetail.scss"


const ItemDetailContainer =({}) =>{

    const [item, setItem] = useState(null)
    const [error, setError] = useState(null)
    const {itemId} = useParams()

    useEffect(()=>{
        setError(null)
        
        pedirItemPorId( Number (itemId))
        .then((data) =>{
            setItem(data)
        })
        .catch((err) =>{
         setError(err.error)
        })

    },[itemId])

    return(
        <div className="item">
            {
            error 
            ? error
            : item && <ItemDetail {...item}/>
            }

        </div>
    )
}
export default ItemDetailContainer