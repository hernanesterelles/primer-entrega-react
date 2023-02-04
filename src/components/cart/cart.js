import { useContext } from "react"
import { CartContex } from "../../contex/cartContext"
import { GoTrashcan } from "react-icons/go"
import { Link } from "react-router-dom"




const Cart = () => {
    const { cart, vaciarCarrito, totalCart, EliminarCarrito } = useContext(CartContex)


    if (cart.length === 0) {
        return (
            <div>
                <h2> Tu carrito esta vacio</h2>
                <h2> carga tu carrito</h2>

            </div>
        )
    }

    return (
        <div>
            <h2>Tu Compra</h2>
            <hr />

            {
                cart.map(item => (
                    <div key={item.id}>
                        <img src={item.img} alt="foto"/>
                        <p>Cantidad :{item.cantidad}</p>
                        <p>Precio {item.cantidad * item.precio}</p>
                        <button onClick={() => EliminarCarrito(item.id)}><GoTrashcan /></button>
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