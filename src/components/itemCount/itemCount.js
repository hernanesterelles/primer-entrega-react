
import { useState } from "react"
import Item from "../../item/item"
import './itemCount.scss'



const ItemCount =() =>{
let [Counter,SetCounter]= useState (1)
   

const Sumar =() => {
        SetCounter(Counter +1)
    }
    const Restar =() => {
        if(Counter > 1){
        SetCounter(Counter -1)
        }
    }
    return(
        <div className="Contadores">                   

            <button className="Button"  onClick={Restar}> ➖</button>
            <p>{Counter}</p>
            <button className="Button"   onClick={Sumar}> ➕</button>            
            <hr/>
                <button className="AgregarAlCarrito"  > Agregar al carrito</button>
            
        
         
        </div>
       

    )
}
export default ItemCount