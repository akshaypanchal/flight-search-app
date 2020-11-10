import './flight.style.css';
import {Container, Col, Row} from 'react-bootstrap';
import {addFlightDetails} from "../../action/action";
import {useDispatch} from 'react-redux';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const Flight = ({ flight, originCity, destinationCity, Carriers, directFlight }) => {

    const dispatch =  useDispatch();

    const [isClicked, setisClicked] = useState(false);

    // fetching the time stamp from the Date Object for departure
    const departureTime =  new Date(flight.OutboundLeg.DepartureDate).toLocaleTimeString('en-US');


    // calculating the date from the data object for departure
    const departureDate =  new Date(flight.OutboundLeg.DepartureDate).toDateString('en-US');


    const addFlightDataToWishList =  () =>{

        if(!isClicked){

        dispatch(addFlightDetails({flight, originCity, destinationCity, Carriers, directFlight}));
        setisClicked(true);
        }
        else{

            setisClicked(false);
        }

    }


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
                <Button variant={isClicked?"danger":"primary"} onClick={addFlightDataToWishList}>
                    {isClicked ? "Remove from List":"Add to Wish List"}
                </Button>
            </Col>
            </Row>
        </Container>
    );
}   

export default Flight;