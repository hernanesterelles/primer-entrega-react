import { createContext, useContext, useEffect, useState } from "react";




export const CartContex = createContext()
export const useCartContex= ()=> {
  return useContext(CartContex)
}

const init = JSON.parse(localStorage.getItem('cart')) ||[]

export const CartProvider=({children}) => {
    const [cart, setCart] =useState(init)
  console.log(cart)

  const agregarAlCarrito= (Item) =>{
    setCart([...cart, Item])
    
  }
  const EliminarCarrito =(id) => {
    setCart(cart.filter(item => item.id !== id))
  }
  const isInCart =(id) => {
    return cart.some(item => item.id === id)
  }
  const vaciarCarrito =() => {
    setCart([])
  }
  const totalCart =() =>{
    return cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
  }
  const totalCantidad =()=>{
    return cart.reduce((acc, item) => acc + item.cantidad, 0)
  }
  useEffect(()=> {localStorage.setItem('cart', JSON.stringify(cart))
},[cart]) 
  

 return (
    <CartContex.Provider value={{cart,
        agregarAlCarrito, 
        isInCart,
        vaciarCarrito,
        totalCart,
        EliminarCarrito,
        totalCantidad
        }}>
            {children}
    </CartContex.Provider>
 )
}