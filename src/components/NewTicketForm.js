import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types"; 
import ReusableForm from "./ReusableForm";

function NewTicketForm(props){

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    // When we call onNewTicketCreation below, it executes the method handleAddingNewTicketToList in TicketControl. It's able to do this because we've passed this method down from TicketContol -> TicketList -> Ticket as a prop, and renamed it. When we pass in an object, it will be read as newTicket in the method in TicketControl. 
    props.onNewTicketCreation(
      {
        // We create the new ticket object using the input values from the form. We can access them  
        names: event.target.names.value, 
        location: event.target.location.value, 
        issue: event.target.issue.value, 
        // We use uuid to give the ticket an id that is a random 32 character string.
        id: v4()
      }
    );
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewTicketFormSubmission}
        buttonText="Help!" />
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;