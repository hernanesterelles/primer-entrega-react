

import './itemCount.scss'



const ItemCount = ({ cantidad, setCantidad, max, onAdd }) => {

    const Restar = () => {

        cantidad > 1 && setCantidad(cantidad - 1)
    }


    const Sumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    return (
        <div className="Contadores">

            <button 
            className="Button" 
            onClick={Restar} 
            disabled={cantidad === 1}
            > 
            ➖</button>
            <p>{cantidad}</p>
            <button 
            className="Button"
             onClick={Sumar}
             disabled={cantidad === max}
              >
                 ➕</button>
            <hr />
            <button className="AgregarAlCarrito" onClick={onAdd} > Agregar al carrito</button>



        </div>


    )
}
export default ItemCount