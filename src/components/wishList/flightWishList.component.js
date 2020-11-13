import {useSelector} from 'react-redux';
import {Container, Row, Col} from 'react-bootstrap';
import ScrollFlightDetails from '../scrollFlightDetail/scrollFlightDetails.component';
import Flight from '../Flights/flight.component';
import './flightWishList.style.css';

const FlightWishList = () => {

    const selectedFlightDetails = useSelector(state=>state.flightDetails);

    return(

        <div>

        <Container className="container">
            <h1>Flight Wish List</h1>
            <Row>

            <Col className="header">#</Col>
                        <Col className="header">Origin City</Col>
                        <Col className="header">Destination City</Col>
                        <Col className="header">Minimum Price</Col>
                        <Col className="header">Carrier Name</Col>
                        <Col className="header">Departure Date</Col>
                        <Col className="header">Departure Time</Col>
                        <Col className="header">Flight Type</Col>
                        <Col className="header">#</Col>
            </Row>

        </Container>

        <ScrollFlightDetails>
        {
            selectedFlightDetails.map((flight, index) => {
                return <Flight key={flight.flight.QuoteId} flight={flight.flight} index={index} originCity={flight.originCity}
                        destinationCity={flight.destinationCity} Carriers = {flight.Carriers}
                        directFlight = {flight.directFlight} 
                         />
            })
        }
        </ScrollFlightDetails>

    </div >

    );

}

export default FlightWishList;