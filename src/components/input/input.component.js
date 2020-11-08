import { useState } from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {addFlightDetails} from "../../action/action";


const Input = ({searchFlightDetails}) => {

    // Intializing dispatch function here from useDispatch
    const dispatch = useDispatch();

    // create the local store for storing the user value for origin and destination city name
    const [originCity, setOriginCity] = useState("");
    const [destinationCity, setDestinationCity] = useState("");

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

    // Function for searching the flight details from the api using axios
    const addFlightDetails = () => {

        // calling the parent componet method to fetch the flight details from the WEB API
        searchFlightDetails({originCity, destinationCity});
        
        // Clear the local store of originCity and destinationCity to empty
        setOriginCity("");
        setDestinationCity("");

    }

    return (
        <div>
            {/* creating the input and button for  user interaction */}
            <label>Origin: </label>
            <input id="originCity" onChange={addOriginCity} placeholder="Enter the City" />
            <label>Destination: </label>
            <input id="destinationCity" onChange={addDestinationCity} placeholder="Enter the City" />
            <button onClick={addFlightDetails}>Search the Flights</button>
        </div>
    );
}

export default Input;