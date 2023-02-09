import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useCartContex } from '../../contex/cartContext'
import { db } from '../../firebase/config'
import { collection, addDoc, } from 'firebase/firestore'
import { FcOk } from "react-icons/fc"
import './Checkout.scss'





const Checkout = () => {
    const { cart, totalCart, vaciarCarrito } = useCartContex()

    const [orderId, setOrderId] = useState(null)
    const [values, setValues] = useState({

        nombre: '',
        direccion: '',
        email: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        const orden = {
            cliente: values,
            items: cart,
            total: totalCart()
        }
        const ordenRef = collection(db, 'ordenes')
        addDoc(ordenRef, orden)
            .then((doc) => {
                setOrderId(doc.id)
                vaciarCarrito()
            })
            .catch((error) => console.log(error))
    }
    if (orderId) {
        return (
            <div className="container ">
                <h2>Tu compra ha sido exitosa<FcOk /></h2>
                <hr />
                <p>Tu código de orden es: {orderId} </p>
                <p>Muchas  Gracias por tu Compra</p>

                <Link className='btn btn-primary' to="/">Volver</Link>
            </div>
        )
    }
    if (cart.length === 0) {
        return <Navigate to="/" />
    }
    return (
        <div className='Formulario'>
            <h2>Terminar Compra</h2>
            <div className='formCompra'>
                <form onSubmit={handleSubmit} >
                    <input className='form  '
                        onChange={handleInputChange}
                        type="text"
                        name="nombre"
                        value={values.nombre}
                        placeholder="tu nombre"
                    />
                    <br />
                    <input className='form  '
                        onChange={handleInputChange}
                        type="text"
                        name="direccion"
                        value={values.direccion}
                        placeholder="tu direccion"
                    />
                    <br />
                    <input className='form  '
                        onChange={handleInputChange}
                        type="email"
                        name="email"
                        value={values.email}
                        placeholder="tu email"
                    />
                    <br />
                    <button>Enviar</button>
                </form>
            </div>
        </div>
    )
}
export default Checkout