import React from 'react';

const ScrollFlightDetails = (props)=>{
	return(
		<div style={{overflowY:'scroll', height:'30em', width:'content-match'}}>
			{props.children}
		</div>
		);
};

export default ScrollFlightDetails;