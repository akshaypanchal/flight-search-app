import {useSelector} from 'react-redux';
import {Container, Row, Col} from 'react-bootstrap';
import ScrollFlightDetails from '../scrollFlightDetail/scrollFlightDetails.component';
import Flight from '../Flights/flight.component';

const FlightWishList = () => {

    const selectedFlightDetails = useSelector(state=>state.flightDetails);
    console.log('Flight Wish List');
    console.log(selectedFlightDetails);

    return(

        <div>
        <h3>Flight Wish List Details:</h3>

        <Container className="container">
            <Row>

                    <Col>#</Col>
                    <Col>Origin City</Col>
                    <Col>Destination City</Col>
                    <Col>Minimum Price</Col>
                    <Col>Carrier Name</Col>
                    <Col>Departure Date</Col>
                    <Col>Departure Time</Col>
                    <Col>Flight Type</Col>
                    <Col>#</Col>
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