import { Route, Routes, Navigate, } from "react-router-dom"
import Contacts from "../pages/Contacts"
import Initial from "../pages/Initial"
import Login from "../pages/Login"
import Register from "../pages/Register"

const Routers = () => (
    <Routes>
        <Route path="" element={<Initial/>}>
            <Route path="entrar" element={<Login/>}/>
            <Route path="registro" element={<Register/>}/>
        </Route>
        <Route path="/contatos" element={<Contacts/>}/>
        <Route path="*" element={<Navigate to=""/>} />
    </Routes>
)

export default Routers