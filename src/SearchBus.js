import React, { useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import {BsArrowLeftRight} from "react-icons/bs"

const SearchBus = () => {
    const [from, setFrom] =useState("")
    const [to, setTo] = useState("")
    const [date, setDate] = useState("")

    function interchangePlaces() {
        const fromPlace = from
        const toPlace = to
        setFrom(toPlace)
        setTo(fromPlace)
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
        <Button variant="danger">Search buses</Button>
      </InputGroup>
    </div>
  );
};

export default SearchBus;
