import { useState } from "react"
import "../item/item.scss"



const Contacto = () => {
    const [values, setValues] = useState({
        nombre: '',
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

        console.log("Submit", values)
    }
    return (
        <div className="container my-5">
            <form onSubmit={handleSubmit}>
                <input
                    onChangeCapture={handleInputChange}
                    value={values.nombre}
                    name='nombre'
                    type="text"
                    className="form-control my-2"
                    placeholder="Nombre" />
                <input
                    onChangeCapture={handleInputChange}
                    value={values.email}
                    name='email'
                    type="text"
                    className="form-control my-2"
                    placeholder="Email" />


                <button className="btn btn-primary">Enviar</button>
            </form>
        </div>
    )
}
export default Contacto