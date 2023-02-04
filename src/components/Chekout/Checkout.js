import {useState} from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useCartContex } from '../../contex/cartContext'
import { db } from '../../firebase/config'
import { collection, addDoc, doc} from 'firebase/firestore'





const Checkout = () => {
    const{cart, totalCart, vaciarCarrito} =useCartContex()

    const [orderId, setOrderId] = useState(null)
    const[ values, setValues] = useState({

        nombre:'',
        direccion:'',
        email:''
    })

    const handleInputChange =(e)=>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        const orden =  {
            cliente:values,
            items: cart,
            total: totalCart()
        }
       const ordenRef = collection(db,'ordenes') 
       addDoc(ordenRef, orden)
       .then((doc) => {
        setOrderId(doc.id)
        vaciarCarrito()
    })
       .catch((error) =>console.log(error))
    }
    if (orderId) {
        return (
            <div className="container my-5">
                <h2>Tu compra ha sido exitosa</h2>
                <hr/>
                <p>Tu código de orden es: {orderId} </p>
                <p>Muchas  Gracias por tu Compra</p>

                <Link className='btn btn-primary' to="/">Volver</Link>
            </div>
        )
    }
    if (cart.length === 0){
        return <Navigate to="/"/>
    }
    return (
        <div className='container my-5'>
            <h2>Terminar Compra</h2>

            <form onSubmit={handleSubmit} >
                <input className='form control my-2' 
                onChange={handleInputChange}
                type="text"
                name="nombre"
                value={values.nombre}
                placeholder="tu nombre"
                />
                 <input className='form control my-2' 
                onChange={handleInputChange}
                type="text"
                name="direccion"
                value={values.direccion}
                placeholder="tu direccion"
                />
                 <input className='form control my-2' 
                onChange={handleInputChange}
                type="email"
                name="email"
                value={values.email}
                placeholder="tu email"
                />
            <button>Enviar</button>
            </form>
        </div>
    )
}
export default Checkout