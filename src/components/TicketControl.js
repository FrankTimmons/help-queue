import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    // Below is the default state of our TicketControl component.  State is like an object that holds properties that we expect to be manipulated.  We will call setState whenever we manipulate these properties.
    this.state = {
      // By default, we will not want to display the form, so we will set formVisibleOnPage to false.
      formVisibleOnPage: false,
      // By default, we will not have any tickets, so we will make mainTicketList an empty array.
      mainTicketList: [],
      // By default, we will not have a ticket selected so selectedTicket is set to null.
      selectedTicket: null
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      // When we execute this function we toggle the boolean formVisibleOnPage.  This will decide whether or not we will show the form, or the list.
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewTicketToList = (newTicket) => {
    // This method takes in a ticket object as an argument. It makes a new array equal to mainTicketList, but with our new ticket concatenated into it, called newMainTicketList. 
    const newMainTicketList = this.state.mainTicketList.concat(newTicket);
    // After we make our new list, we update our old list to be equal to it using setState.  We also set formVisibleOnPage to false, so we can toggle off of our form, and back onto our list.
    this.setState({mainTicketList: newMainTicketList,
                  formVisibleOnPage: false });
  }

  handleChangingSelectedTicket = (id) => {
    const newSelectedTicket = this.state.mainTicketList.filter(ticket => ticket.id === id)[0];
    this.setState({selectedTicket: newSelectedTicket});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedTicket != null) {
      // If selectedTicket is not null ( AKA we've selected a ticket), we will set currentlyVisibleState to the TicketDetail component, and pass our selectedTicket in as a prop called ticket.
      currentlyVisibleState = <TicketDetail ticket = {this.state.selectedTicket} />
      // Since our button will be visible no matter what component is rendered, we will just chenge the text to make sense for each condition.
      buttonText = "Return to Ticket List";
    } else if (this.state.formVisibleOnPage) {
      // If formVisibleOnPage is true, we will set currentlyVisibleState to the NewTicketForm component, and pass in the handleAddingNewTicketToList method as a prop called onNewTicketCreation.
      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} />;
      // Conditional button text 
      buttonText = "Return to Ticket List";
    } else {
      // If no previous conditions are met, we will set currentlyVisibleState to the TicketList component, and pass in mainTicketList as a prop called ticketList. We will also pass in the handleChangingSelectedTicket method as a prop called onTicketSelection.
      currentlyVisibleState = <TicketList ticketList={this.state.mainTicketList} onTicketSelection={this.handleChangingSelectedTicket}/>;
      // Conditional button text
      buttonText = "Add Ticket";
    }
    return (
      <React.Fragment>
        {/* We render whatever component we set to currentlyVisibleState. */}
        {currentlyVisibleState}
        {/* We also render a button that calls the handleClick method when clicked. */}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default TicketControl;