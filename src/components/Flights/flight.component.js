import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/esm/Table';

const Flight = ({ flight, index }) => {

    return (
        <Table>
            <th>{flight.QuoteId}</th>
            <th>Mumbai</th>
            <th>Toronto</th>
            <th>{flight.MinPrice}</th>
            <th>{flight.OutboundLeg.CarrierIds[0]}</th>
            <th>{flight.OutboundLeg.DepartureDate}</th>
            <th>{flight.QuoteDateTime}</th>
        </Table>
    );
}

export default Flight;