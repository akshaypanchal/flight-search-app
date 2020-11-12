import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './components/input/input.component';
import { useState } from 'react';
import axios from 'axios';
import FlightList from './components/flightList/flightList.component';
import FlightWishList from './components/wishList/flightWishList.component';
import {useSelector} from 'react-redux';

function App() {

  // local store for storing the fetched flight details from the WEB API
  const [flightDetails, setFlightDetails] = useState({});

  const flighWishListArray = useSelector(state=>state.flightDetails); 
  

  // function for fetching the flight details from WEB API
  const searchFlightDetails = ({ originCity, destinationCity, departureDate }) => {

    // checking the condition if user input for originCity and destinationCity is empty or not
    if (originCity !== "" || destinationCity !== "") {

      const options = {
        method: 'GET',
        url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/CA/CAD/en-US/${originCity}/${destinationCity}/${departureDate}`,
        // params: { inboundpartialdate: '2020-11' },
        headers: {
          'x-rapidapi-key': 'bc672e1d75msh8d1d6b258eaa990p101570jsn50767165a40f',
          'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
        }
      };

      // api request for fetching the flight details from Skyscanner API
      axios.request(options)
        .then(function (response) {
          //updating the local store with fetched flight details from the WEB API 
          setFlightDetails(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
    else {
      alert("Please enter valid input!!!");
    }


  }


  return (
    <div className="App">
      <h1>Welcome to the Flight Search Application</h1>
      <Input searchFlightDetails={searchFlightDetails} />
      { (Object.keys(flightDetails).length >0) ?
        <FlightList flightListData={flightDetails} /> : null
      }
      <hr />
      {

        flighWishListArray.length!=0? <FlightWishList /> : null
      
      }
      </div>
  );
}

export default App;
