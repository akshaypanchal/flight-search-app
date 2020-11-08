import './flight.style.css';
import {Container, Col, Row} from 'react-bootstrap';
import FlightList from '../flightList/flightList.component';

const Flight = ({ flight, originCity, destinationCity, Carriers, directFlight }) => {

    // fetching the time stamp from the Date Object for departure
    const departureTime =  new Date(flight.OutboundLeg.DepartureDate).toLocaleTimeString('en-US');


    // calculating the date from the data object for departure
    const departureDate =  new Date(flight.OutboundLeg.DepartureDate).toDateString('en-US')



    return (
        <Container className="container" >
        <Row>
            <Col>{flight.QuoteId}</Col>
            <Col>{originCity}</Col>
            <Col>{destinationCity.hasOwnProperty('CityName')?destinationCity.CityName:destinationCity.Name}</Col>
            <Col>{flight.MinPrice}$</Col>
            <Col>
                {
                    // returning the carrier name by comparing the carrier id with main API feteched Object
                    Carriers.map(item=>{
                        if(item.CarrierId===flight.OutboundLeg.CarrierIds[0]){
                            return item.Name;
                        }
                    })
                
                }
            </Col>
            <Col>{departureDate}</Col>
            <Col>{departureTime}</Col>
            <Col>{(directFlight)?"Direct Flight":"Connecting Flight"}</Col>

            <Col>
                <button>Add to Wish List</button>
            </Col>
            </Row>
        </Container>
    );
}   

export default Flight;