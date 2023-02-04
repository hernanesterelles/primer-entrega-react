import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { CartContex } from "../../contex/cartContext"
import ItemCount from "../itemCount/itemCount"
import "../itemDetail/itemDetail.scss"



const ItemDetail = ({ img, categoria, precio, id, stock }) => {

  const { agregarAlCarrito, isInCart } = useContext(CartContex)


  const [cantidad, setCantidad] = useState(1)

  const navigate = useNavigate()

  const handlevolver = () => {
    navigate(-1)
  }
  const handleAgregar = () => {
    const item = {
      id,
      categoria,
      img,
      precio,
      cantidad,
      stock

    }
    agregarAlCarrito(item)
  }

  return (
    <div className="Compra">
      <img src={img}alt="foto2"/>
      <p>Precio ${precio}</p>
      <p>{cantidad}</p>
      <p>{categoria}</p>
      
      {
        !isInCart(id)
          ? <ItemCount
            cantidad={cantidad}
            setCantidad={setCantidad}
            max={stock}
            onAdd={handleAgregar}
          />
          : <Link to="/cart" className="FinalizarCompra my-2">Finalizar Compra</Link>
      }

      
      <button className="btn btn-primary my-2" onClick={handlevolver}> Volver</button>
    </div>


  )
}
export default ItemDetail