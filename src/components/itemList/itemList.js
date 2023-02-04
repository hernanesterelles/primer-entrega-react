import Item from "../item/item"
import '../item/item.scss'



const ItemList = ( {productos} ) =>{
    return   (
        <div >
            <div className="imagen">
                <img className="imagen" src="https://i0.wp.com/klokker.com.mx/wp-content/uploads/2017/10/portada-coleccion-mido.png?resize=1500%2C500&ssl=1" alt="foto3"/>
            </div>
            
            <div className="nuestro"> RELOJES</div>
            <section className="cards">
                {productos.map((prod) => <Item  key={prod.id}prod ={prod}/>       
                )}    
               
            </section>
        </div>
    )
}
export default ItemList