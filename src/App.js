import 'react-bootstrap'
import "./components/itemList/itemList.js"
import { CartProvider } from "./contex/cartContext";
import { LoginProvider } from "./contex/LoginContex";
import AppRouter from "./router/appRouter.js";





function App() {

  return (
    <LoginProvider>
      <CartProvider>        
        <AppRouter/>
      </CartProvider>
    </LoginProvider>
  );



}

export default App;
