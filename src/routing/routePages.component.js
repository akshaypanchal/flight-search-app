import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import App from '../App';
import FlightWishList from '../components/wishList/flightWishList.component';


const Routing = () =>{

    <Switch>
        <Route exact path="/" component={App} />
        <Route path="/wishlist" component={FlightWishList} />
    </Switch>

}

export default Routing;