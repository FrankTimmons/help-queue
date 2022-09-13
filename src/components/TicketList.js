import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";

function TicketList(props){
  return (
    <React.Fragment>
      <hr/>
        {/* 
        
          We loop through the ticketList we passed down as a prop from TicketControl, and render a Ticket component for each ticket in the list. When werender each ticket, we pass in various props. The important one to note is the whenTicketClicked prop.  This is a function called handleChangingSelectedTicket that originated in the TicketControl component, and was passed to this TicketList component as a prop called onTicketSelection. When we pass it down for the second time to the Ticket component, we call it whenTicketClicked.  See visual below
        
                                                                        (Current Component)
          Components:                     TicketControl                    TicketList               Ticket
                                    ----------------------------        -----------------      -----------------
          Method passing through:   handleChangingSelectedTicket   =>   onTicketSelection  =>  whenTicketClicked
          
          The method stays the same, only the name is changing when we pass it down as a prop.

        */}
        {Object.values(props.ticketList).map((ticket) =>
          <Ticket 
            whenTicketClicked={props.onTicketSelection}
            names={ticket.names} 
            location={ticket.location} 
            issue={ticket.issue}
            id={ticket.id} 
            key={ticket.id} 
          />
        )}
    </React.Fragment>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.object,
  onTicketSelection: PropTypes.func
};

export default TicketList;



// <Ticket 
//   props
//   {
//     names: 'Thato and Haley'
//     location: '3A'
//     issue: 'Firebase won\'t save record. Halp.'
//     key = 0
//   }            
// />