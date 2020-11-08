import './flight.style.css';
import Table from 'react-bootstrap/esm/Table';
import {Container, Col, Row} from 'react-bootstrap';

const Flight = ({ flight, originCity, destinationCity, Carriers }) => {

    return (
        <Container className="table" onClick={()=>{console.log("Clicked!!!")}}>
        <Row>
            <Col>{flight.QuoteId}</Col>
            <Col>{originCity}</Col>
            <Col>{destinationCity}</Col>
            <Col>{flight.MinPrice}$</Col>
            <Col>
                {
                    Carriers.map(item=>{
                        if(item.CarrierId===flight.OutboundLeg.CarrierIds[0]){
                            // console.log(item);
                            return item.Name;
                        }
                    })
                
                }
            </Col>
            <Col>{flight.OutboundLeg.DepartureDate}</Col>
            <Col>{flight.QuoteDateTime}</Col>
            </Row>
        </Container>
    );
}   

export default Flight;