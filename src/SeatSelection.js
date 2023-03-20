import { useContext, useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BusContext from "./BusContext";

function SeatSelection() {
//   const seats = [1, 2, 3, 4, 5, 6, 7, 8];
    const [selectedSeat, setSelectedSeat] = useState([])
  return (
    <Container className="bg-danger mw-100 p-4 d-flex flex-column justify-content-center align-items-center">
      <div className="bg-white p-2 d-flex flex-column">
        {[1, 2, 3].map((seatRow,i) => {
          return (
            <div className={`row mt-${Math.ceil(seatRow*1.5)}`} key={seatRow}>
              {[1,2,3,4,5,6,7,8].map((seat,j) => {
                return (
                  <div
                    style={{
                      border: "1px solid black",
                      width: "30px",
                      height: "30px",
                      background: "gray",
                      marginRight: "15px",
                      marginLeft: "15px"
                    }}
                    key={i*8+j+1}
                    onClick={()=>{
                        // const seatsArr = [...selectedSeat]
                        // seatsArr.push(i*8+j+1)
                        if(selectedSeat.includes(8*i+j+1)){
                            const seatsArrFinal = selectedSeat.filter(seat=>{
                                if(seat!==(8*i+j+1))
                                    return true
                                return false
                            })
                            setSelectedSeat(seatsArrFinal)
                        }
                        else{
                            setSelectedSeat([...selectedSeat, 8*i+j+1])
                        }

                    }}
                    className={selectedSeat.includes(i*8+j+1)?"bg-success":null}
                  >
                  </div>
                );
              })}
            </div>
          );
        })}
        {/* <div className="row">
          {seats.map((seat) => {
            return (
              <div
                style={{
                  border: "1px solid black",
                  width: "30px",
                  height: "30px",
                  background: "gray",
                  marginRight: "15px",
                }}
              >
                {seat}
              </div>
            );
          })}
        </div>
        <div className="row mt-2">
          {seats.map((seat) => {
            return (
              <div
                style={{
                  border: "1px solid black",
                  width: "30px",
                  height: "30px",
                  background: "gray",
                  marginRight: "15px",
                }}
              >
                {seat}
              </div>
            );
          })}
        </div>
        <div className="row mt-5">
          {seats.map((seat) => {
            return (
              <div
                style={{
                  border: "1px solid black",
                  width: "30px",
                  height: "30px",
                  background: "gray",
                  marginRight: "15px",
                }}
              >
                {seat}
              </div>
            );
          })}
        </div> */}
      </div>
      {selectedSeat.length? <Button variant="success" className="mt-4 rounded-0">Book tickets</Button> : null}
       
    </Container>
  );
}
export default SeatSelection;
