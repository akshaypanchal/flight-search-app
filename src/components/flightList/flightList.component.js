import Flight from '../Flights/flight.component';
import ScrollFlightDetails from '../scrollFlightDetail/scrollFlightDetails.component';
import { Col, Container, Row } from 'react-bootstrap';

const FlightList = ({ flightListData }) => {
      console.log(flightListData)


    return (

        <div>
            <h3>Flight Details:</h3>

            <Container >
                <Row>

                        <Col>#</Col>
                        <Col>Origin City</Col>
                        <Col>Destination City</Col>
                        <Col>Minimum Price</Col>
                        <Col>Carrier ID</Col>
                        <Col>Departure Date</Col>
                        <Col>Arrival Date</Col>

                </Row>

            </Container>

            <ScrollFlightDetails>
            {
                flightListData.Quotes.map((flight, index) => {
                    return <Flight key={flight.QuoteId} flight={flight} index={index} originCity={flightListData.Places[0].CityName}
                            destinationCity={flightListData.Places[1].CityName} Carriers = {flightListData.Carriers} />
                })
            }
            </ScrollFlightDetails>

        </div >
    );
}

export default FlightList;