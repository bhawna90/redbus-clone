import { useEffect, useState } from "react"
import {Spinner} from "react-bootstrap"
import BusDetail from "./BusDetail"

function SearchResult(){
    const [buses, setBuses] = useState([])
    const [loader, setLoader] = useState(false)

    useEffect(()=>{
        async function fetchBuses(){
            //fetch api call for buses
            setLoader(true)
            const response = await fetch("https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses") 
            const data = await response.json()
            console.log(data);
            setBuses(data)
            setLoader(false)
        }
        fetchBuses()
    },[])
    if(loader){
        return  <Spinner animation="border" variant="danger"></Spinner>
    }
    return <div className="bg-danger p-3">
        {buses.map(bus=>{
            return <BusDetail bus={bus}></BusDetail>
        })}
    </div>
}
export default SearchResult