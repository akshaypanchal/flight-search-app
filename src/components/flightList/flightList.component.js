import Flight from '../Flights/flight.component';
import ScrollFlightDetails from '../scrollFlightDetail/scrollFlightDetails.component';
import { Col, Container, Row } from 'react-bootstrap';
import './flightlist.style.css';

const FlightList = ({ flightListData }) => {

    console.log("inside the Flight List");
    console.log(flightListData)

    return (

        <div>
            <h3>Flight Details:</h3>

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
                flightListData.Quotes.map((flight, index) => {
                    return <Flight key={flight.QuoteId} flight={flight} index={index} originCity={flightListData.Places[0].CityName}
                            destinationCity={flightListData.Places[1]} Carriers = {flightListData.Carriers}
                            directFlight = {flight.Direct} 
                             />
                })
            }
            </ScrollFlightDetails>

        </div >
    );
}

export default FlightList;