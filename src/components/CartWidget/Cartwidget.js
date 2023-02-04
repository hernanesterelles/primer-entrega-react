import React, { useContext } from "react";
import { Link } from "react-router-dom";
import{FaCartArrowDown}from"react-icons/fa"
import { CartContex } from "../../contex/cartContext";
import'./CartWidget.scss'




    

export const CartWidget = () =>{

    const {totalCantidad} = useContext(CartContex)

    return (
        
            <Link to="/cart" className="cart-wid">
                <FaCartArrowDown/>
                <span className="Cart">{totalCantidad()}</span>
            </Link>
        
        
    )
}
export default CartWidget