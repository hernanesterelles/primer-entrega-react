import Item from "../item/item"
import '../item/item.scss'



const ItemList = ( {productos} ) =>{
    return   (
        <div >
            <div className="nuestro"> Nuestros productos</div>
            <section className="cards">
                {productos.map((prod) => <Item  key={prod.id}prod ={prod}/>       
                )}    
               
            </section>
        </div>
    )
}
export default ItemList