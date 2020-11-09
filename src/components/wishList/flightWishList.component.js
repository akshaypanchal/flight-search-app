import {useSelector} from 'react-redux';
import {Container, Row, Col} from 'react-bootstrap';

const FlightWishList = () => {

    const selectedFlightDetails = useSelector(state=>state.flightDetails);
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

        {/* <ScrollFlightDetails>
        {
            flightListData.Quotes.map((flight, index) => {
                return <Flight key={flight.QuoteId} flight={flight} index={index} originCity={flightListData.Places[0].CityName}
                        destinationCity={flightListData.Places[1]} Carriers = {flightListData.Carriers}
                        directFlight = {flight.Direct} 
                         />
            })
        }
        </ScrollFlightDetails> */}

    </div >

    );

}

export default FlightWishList;