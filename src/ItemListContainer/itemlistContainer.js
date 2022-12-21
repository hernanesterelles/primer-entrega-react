import React from "react";

import "../components/MiComponentes"
import"../ItemListContainer/ItemListContainer.scss"



export const ItemListContainer =({greeting,children}) =>{
    return (
        <div className="Item">
            <h1>{greeting}</h1>
            {children}
        </div>
    );
}
export default ItemListContainer;