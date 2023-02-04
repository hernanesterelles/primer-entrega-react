
import React, { useEffect, useState } from "react";
import "../CartWidget/Cartwidget"
import ItemList from "../itemList/itemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query,where } from "firebase/firestore"
import { db } from "../../firebase/config";





 export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setloading] = useState(true)
    const { categoriaId } = useParams()


    useEffect(() => {
        setloading(true)

        const productosRef = collection(db, "productos")
        const q = categoriaId
                    ? query(productosRef, where("categoria","==", categoriaId) )
                    : productosRef
                    
        getDocs(q)
            .then((resp) => {

                setProductos( resp.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                }))
            })
            .finally(() => {
                setloading(false)
            })

    }, [categoriaId])
   

    return (
        <div >
            {loading
                ? <h2>Cargando...</h2>
                : <ItemList productos={productos} />}

        </div>


    )
}
export default ItemListContainer