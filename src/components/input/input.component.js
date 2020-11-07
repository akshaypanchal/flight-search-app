import {useState} from 'react';
import axios from 'axios';


const Input = () =>{

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
        let  destinationCityData= document.getElementById("destinationCity").value;
        setDestinationCity(destinationCityData);
    }

    // Function for searching the flight details from the api using axios
    const searchFlightDetails = () =>{

        const options = {
            method: 'GET',
            url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/CA/CAD/en-US/${originCity}/${destinationCity}/2020-11`,
            params: {inboundpartialdate: '2020-11'},
            headers: {
              'x-rapidapi-key': 'bc672e1d75msh8d1d6b258eaa990p101570jsn50767165a40f',
              'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data);
          }).catch(function (error) {
              console.error(error);
          });

    }

    return(
        <div>
            {/* creating the input and button for  user interaction */}
            <label>Origin</label>
            <input id="originCity" onChange={addOriginCity} placeholder="Enter the City"/>
            <label>Destination</label>
            <input id="destinationCity" onChange={addDestinationCity} placeholder="Enter the City" />
            <button onClick={searchFlightDetails}>Search the Flights</button>
        </div>
    );
}

export default Input;