import { useContext, useEffect } from "react"
import { Toaster } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import BusContext from "./BusContext"
import NavBar from "./NavBar"
import SearchBus from "./SearchBus"

function Journey({Component}){
    const {from, to} = useContext(BusContext)
    const navigate = useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem("token")){
            navigate("/login")
        }
        else if(!from || !to){
            navigate("/")
        }
    },[])
    return <>
        <Toaster></Toaster>
        <NavBar></NavBar>
        <SearchBus></SearchBus>
        <Component></Component>
    </>
}

export default Journey