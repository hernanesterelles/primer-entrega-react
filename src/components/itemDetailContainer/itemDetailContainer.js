import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../itemDetail/itemDetail"
import "../itemDetailContainer/itemDetail.scss"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"


const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {

        const docRef = doc(db, "productos", itemId)

        getDoc(docRef)
            .then(doc => {
                setItem({ ...doc.data(), id: doc.id })
            })

    }, [itemId])

    return (
        <div className="item">
            {

                item && <ItemDetail {...item} />
            }

        </div>
    )
}
export default ItemDetailContainer