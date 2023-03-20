import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import BusContext from "./BusContext"

function Journey({Component}){
    const {from, to} = useContext(BusContext)
    const navigate = useNavigate()
    useEffect(()=>{
        if(!from || !to){
            navigate("/")
        }
    },[])
    return <Component></Component>
}

export default Journey