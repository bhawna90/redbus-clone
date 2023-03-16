import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NavBar";
import SearchBus from "./SearchBus";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import SearchResult from "./SearchResult";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
