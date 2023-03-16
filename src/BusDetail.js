function BusDetail(props){
    const {bus} = props
    return <div className="bg-light d-flex p-2 mb-3 justify-content-between align-items-center">
        <h4>{bus.busName}</h4>
        <div className="d-flex flex-column">
            <div>DEPARTURE</div>
            <h4>{bus.departureTime}</h4>
        </div>
        <div className="d-flex flex-column">
            <div>ARRIVAL</div>
            <h4>{bus.arrivalTime}</h4>
        </div>
        <h4>{bus.ticketPrice}/-</h4>
    </div>
}

export default BusDetail