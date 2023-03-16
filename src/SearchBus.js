import React, { useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import {BsArrowLeftRight} from "react-icons/bs"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom";

const SearchBus = () => {
    const [from, setFrom] =useState("")
    const [to, setTo] = useState("")
    const [date, setDate] = useState("")
    const navigate = useNavigate()

    function interchangePlaces() {
        const fromPlace = from
        const toPlace = to
        setFrom(toPlace)
        setTo(fromPlace)
    }
    function searchBuses(){
      if(!from||!to||!date){
        //toast should appear with error msg
        toast.error("All the fields are required.")
      }
      else{
        navigate("/results")
      }
    }
  return (
    <div className="m-5">
      <InputGroup className="mb-3 flex align-items-center">
        <Form.Control
          placeholder="From"
          aria-label="Text input with dropdown button"
          value={from}
            onChange={(e)=>{
                setFrom(e.target.value)
            }}
        />
        <BsArrowLeftRight onClick={interchangePlaces}></BsArrowLeftRight>
        <Form.Control
          placeholder="To"
          aria-label="Text input with dropdown button"
          value={to}
          onChange={(e)=>{
            setTo(e.target.value)
          }}
        />
        <Form.Control
          type="date"
          placeholder="Date"
          aria-label="Text input with dropdown button"
          value={date}
          onChange={(e)=>{
            setDate(e.target.value)
          }}
        />
        <Button variant="danger" onClick={searchBuses}>Search buses</Button>
      </InputGroup>
    </div>
  );
};

export default SearchBus;
