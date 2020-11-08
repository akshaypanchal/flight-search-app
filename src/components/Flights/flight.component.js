import './flight.style.css';
import {Container, Col, Row} from 'react-bootstrap';

const Flight = ({ flight, originCity, destinationCity, Carriers }) => {

    // fetching the time stamp from the Date Object for departure and arrival
    const departureTime =  new Date(flight.OutboundLeg.DepartureDate).toLocaleTimeString('en-US');
    const arrivalTime = new Date(flight.QuoteDateTime).toLocaleTimeString('en-US');

    // calculating the date from the data object for departure and arrival
    const departureDate =  new Date(flight.OutboundLeg.DepartureDate).toDateString('en-US')
    const arrivalDate = new Date(flight.QuoteDateTime).toDateString('en-US');

    // Calculating the total time difference between two departure and arrival time stamps
    let diffInMilliSeconds = Math.abs(new Date(flight.OutboundLeg.DepartureDate) - new Date(flight.QuoteDateTime) );
    let totalDuration = Math.floor(diffInMilliSeconds/3600)%24;
    diffInMilliSeconds -= totalDuration * 3600;


    return (
        <Container className="table" onClick={()=>{console.log("Clicked!!!")}}>
        <Row>
            <Col>{flight.QuoteId}</Col>
            <Col>{originCity}</Col>
            <Col>{destinationCity.hasOwnProperty('CityName')?destinationCity.CityName:destinationCity.Name}</Col>
            <Col>{flight.MinPrice}$</Col>
            <Col>
                {
                    Carriers.map(item=>{
                        if(item.CarrierId===flight.OutboundLeg.CarrierIds[0]){
                            return item.Name;
                        }
                    })
                
                }
            </Col>
            <Col>{departureDate}</Col>
            <Col>{arrivalDate}</Col>
            <Col>{departureTime}</Col>
            <Col>{arrivalTime}</Col>
            <Col>{totalDuration} Hrs.</Col>
            <Col>
                <button>Add to Wish List</button>
            </Col>
            </Row>
        </Container>
    );
}   

export default Flight;