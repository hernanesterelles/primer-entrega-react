import { ItemListContainer } from "../components/ItemListContainer/itemlistContainer";
import { NavBar } from "../components/NavBar/navbar";
import ItemDetailContainer from "../components/itemDetailContainer/itemDetailContainer";
import Contacto from "../components/contacto/contacto";
import Cart from "../components/cart/cart";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Checkout from "../components/Chekout/Checkout";
import Footer from "../components/footer/Footer";

const PrivateRoutes = () =>{
    return (
        <>
        < NavBar />      
        

        <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="productos/:categoriaId" element={<ItemListContainer />} />
            <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Checkout" element={<Checkout/>} />
            <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
        
        </>
    )
}
export default PrivateRoutes 