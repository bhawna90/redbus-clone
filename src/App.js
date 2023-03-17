import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NavBar";
import SearchBus from "./SearchBus";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import SearchResult from "./SearchResult";
import BusContext from "./BusContext";
import {useState} from "react"

function App() {
  const [from, setFrom] =useState("")
  const [to, setTo] = useState("")
  const [buses, setBuses] = useState([])
  const [busLoader, setBusLoader] = useState(false)
  return (
    <div className="App">
      <BusContext.Provider value={{from, to, setFrom, setTo, buses, setBuses, busLoader, setBusLoader}}>
      <BrowserRouter>
        <Toaster></Toaster>
        <NavBar></NavBar>
        <SearchBus></SearchBus>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/results"
            element={<SearchResult></SearchResult>}
          ></Route>
        </Routes>
      </BrowserRouter>
      </BusContext.Provider>
    </div>
  );
}

export default App;
