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

            <Container className=".container">
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