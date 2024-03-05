import { Route, Routes } from "react-router-dom";
import { Registarion } from "./components/registarion.component";
import { Login } from "./components/login.component";
import { Forgot } from "./components/forgot.component";
import { Reset } from "./components/reset.component";

export function AppRouter(){
    return(
        <Routes>
            <Route path="/register" element={<Registarion></Registarion>}></Route> 
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/forgot" element={<Forgot></Forgot>}></Route>
            <Route path="/reset" element={<Reset></Reset>}></Route>
        </Routes>
    )
}