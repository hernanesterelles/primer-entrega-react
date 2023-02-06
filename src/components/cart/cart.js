import { useContext } from "react"
import { CartContex } from "../../contex/cartContext"
import { FaTrash } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { Link } from "react-router-dom"
import './cart.scss'




const Cart = () => {
    const { cart, vaciarCarrito, totalCart, EliminarCarrito } = useContext(CartContex)


    if (cart.length === 0) {
        return (
            <div className="container">
                <h2> Tu carrito esta vacio</h2>
                <h2> carga tu carrito</h2>
                <div>
                <Link className="return"to="/Checkout"  >Volve a Comprar</Link>
                <GiReturnArrow/>
                </div>
                
            </div>
        )
    }

    return (
        <div className="container">
            <h2>Tu Compra</h2>
            <hr />

            {
                cart.map(item => (
                    <div key={item.id}>
                        <img src={item.img} alt="foto"/>
                        <p className="cantidad">Cantidad :{item.cantidad}</p>
                        <p className="Precio">Precio {item.cantidad * item.precio}</p>
                        <p className="gotra" onClick={() => EliminarCarrito(item.id)}><FaTrash /></p>
                    </div>
                ))
            }
            <h4> Total : ${totalCart()}</h4>
            <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar carrito</button>

            <Link className="btn btn-primary my-2" to="/Checkout">Terminar mi Compra</Link>


        </div>
    )

}
export default Cart