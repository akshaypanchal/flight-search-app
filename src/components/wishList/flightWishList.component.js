import {useSelector} from 'react-redux';


const FlightWishList = () => {

    const selectedFlightDetails = useSelector(state=>state.flightDetails);

    return(

        <div>Hello to Flight Wish List</div>
    );

}

export default FlightWishList;