
import { BrowserRouter } from "react-router-dom";
import { useLoginContext } from "../contex/LoginContex";
import React from "react";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";


const AppRouter = () => {

    const { user } = useLoginContext()

    return (
        <BrowserRouter>

            {user.logged 
            ? <PrivateRoutes />              
            : <PublicRoutes />
            }
        </BrowserRouter>
    )
}
export default AppRouter