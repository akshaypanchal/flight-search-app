import Flight from '../Flights/flight.component';
import Table from 'react-bootstrap/Table';
import ScrollFlightDetails from '../scrollFlightDetail/scrollFlightDetails.component';

const FlightList = ({ flightListData }) => {
    //   console.log(flightListData)


    return (

        <div>
            <h3>Flight Details:</h3>

            <Table >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Origin City</th>
                        <th>Destination City</th>
                        <th>Minimum Price</th>
                        <th>Carrier ID</th>
                        <th>Departure Date</th>
                        <th>Arrival Date</th>
                    </tr>
                    <tbody>
                        <tr>           </tr>
                    </tbody>
                </thead>

            </Table>

            <ScrollFlightDetails>
            {
                flightListData.Quotes.map((flight, index) => {
                    return <Flight key={flight.QuoteId} flight={flight} index={index} />
                })
            }
            </ScrollFlightDetails>

        </div >
    );
}

export default FlightList;