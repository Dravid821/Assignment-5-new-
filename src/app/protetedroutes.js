import { Navigate,Outlet } from "react-router-dom";
import React from 'react'

const protetedroutes = () => {
    let loggin = JSON.parse(localStorage.getItem("isLogin"));
    if(loggin){
        return <Outlet/>
    }else{
        return <Navigate to="/"/>
    }
}

export default protetedroutes
