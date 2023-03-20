import { useNavigate } from "react-router-dom";

function BusDetail(props) {
  const { bus } = props;
  const navigate = useNavigate();
  function bookSeats() {
    navigate("/book-seats");
  }
  return (
    <div
      className="bg-light d-flex p-2 mb-3 justify-content-between align-items-center"
      style={{cursor: "pointer"}}
      onClick={bookSeats}
    >
      <h4 className="col-md-3">{bus.busName}</h4>
      <div className="d-flex flex-column col-md32">
        <div>DEPARTURE</div>
        <h4>{bus.departureTime}</h4>
      </div>
      <div className="d-flex flex-column col-md-3">
        <div>ARRIVAL</div>
        <h4>{bus.arrivalTime}</h4>
      </div>
      <h4 className="col-md-3">{bus.ticketPrice}/-</h4>
    </div>
  );
}

export default BusDetail;
