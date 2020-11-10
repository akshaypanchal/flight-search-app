import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const Input = ({searchFlightDetails}) => {


    // create the local store for storing the user value for origin and destination city name
    const [originCity, setOriginCity] = useState("");
    const [destinationCity, setDestinationCity] = useState("");
    const [departureDate, setDepartureDate] = useState("");
    

    // Update the origin city to the local store
    const addOriginCity = () => {   
        let origincityData = document.getElementById("originCity").value;
        setOriginCity(origincityData);
    }

    // Update the destination city to the local store
    const addDestinationCity = () => {
        let destinationCityData = document.getElementById("destinationCity").value;
        setDestinationCity(destinationCityData);
    }

    const addDepartureDate = () =>{
        let selectedDate = document.getElementById("departureDate").value;
        setDepartureDate(selectedDate);
    }

    // Function for searching the flight details from the api using axios
    const addFlightDetails = () => {

        // calling the parent componet method to fetch the flight details from the WEB API
        searchFlightDetails({originCity, destinationCity, departureDate});
        
        // Clear the local store of originCity and destinationCity to empty
        setOriginCity("");
        setDestinationCity("");
        setDepartureDate(""); 

    }
 
    return (
        <Form>
            {/* creating the input and button for  user interaction */}
            <Form.Label>Origin: </Form.Label>
            <Form.Control id="originCity" onChange={addOriginCity} placeholder="Enter the City" value={originCity} required />
            <Form.Label>Destination: </Form.Label>
            <Form.Control id="destinationCity" onChange={addDestinationCity} placeholder="Enter the City" value={destinationCity} required/>
            <Form.Label>Departure Date:</Form.Label>
            <Form.Control id="departureDate" placeholder="yyyy/mm/dd"  onChange={addDepartureDate} value={departureDate}/>
            <Button variant="success" onClick={addFlightDetails}>Search the Flights</Button>
        </Form>
    );
}

export default Input;