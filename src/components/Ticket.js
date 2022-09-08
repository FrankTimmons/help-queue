import React from "react";
import PropTypes from "prop-types";

function Ticket(props) {
  return (
    <React.Fragment>
      {/* We render a div that shows us all the elements of the ticket that we passed down as props from the TicketList component. We also have the function prop we passed down through from TicketList component (see visual in TicketList.js). */}
      <div onClick = {() => props.whenTicketClicked(props.id)}>
        <h3>{props.location} - {props.names}</h3>
        <p><em>{props.issue}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  id: PropTypes.string, 
  whenTicketClicked: PropTypes.func
}

export default Ticket;