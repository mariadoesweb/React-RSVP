import React, { Component } from 'react';
import MainContent from '../MainContent';
import Header from '../Header';

class App extends Component {

  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: []
  };

// Fixed bugs with new add guest

  lastGuestId = 0;

  newGuestID = () => {
    const id = this.lastGuestId;
    this.lastGuestId += 1;
    return id;
  }

// Confirming and editing 

  toggleGuestProperty = (property, id) =>
    this.setState({
      guests: this.state.guests.map((guest) => {
        if (id === guest.id) {
          return {
            ...guest,
            [property]: !guest[property]
          };
        }
        return guest;
      })
    });

  toggleConfirmation = id =>
    this.toggleGuestProperty("isConfirmed", id);

  toggleEditing = id =>
    this.toggleGuestProperty("isEditing", id);

  setName = (name, id) =>
    this.setState({
      guests: this.state.guests.map((guest) => {
        if (id === guest.id) {
          return {
            ...guest,
            name
          };
        }
        return guest;
      })
    });

  toggleFilter = () =>
    this.setState({ isFiltered: !this.state.isFiltered });



  // Add new guest to the guest list
  handleNameInput = e => 
    this.setState({pendingGuest: e.target.value})


  // Set the state of submit button
    newGuestSubmitHandler = e => {
      e.preventDefault();
      const id= this.newGuestID();
      this.setState({
        guests: [
          {
            name: this.state.pendingGuest,
            isConfirmed: false,
            isEditing: false,
            id
          },
          ...this.state.guests
        ],
        pendingGuest: ""
      })
    }



  // Removing guest from the guest list
  removeGuest = id => 
  this.setState({
    guests: this.state.guests.filter(guest => id !== guest.id)
  });
     

  // Total number of guests
  getTotalInvited = () => this.state.guests.length;



  // Number of attending guests
  getAttendingGuests = () =>
    this.state.guests.filter(guest => guest.isConfirmed).length
    
  

  render() {
    
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingGuests();
    const numberUnconfirmed = totalInvited - numberAttending;

    return (
      
      <div className="App">
        <Header 
          newGuestSubmitHandler={this.newGuestSubmitHandler} 
          pendingGuest={this.state.pendingGuest}
          handleNameInput={this.handleNameInput}
          />
    
        <MainContent 
          // ConfirmedFilter.js
          toggleFilter={this.toggleFilter}
          isFiltered={this.state.isFiltered}
          // Counter.js
          totalInvited={totalInvited}
          numberAttending={numberAttending}
          numberUnconfirmed={numberUnconfirmed}
          // GuestList.js
          guests={this.state.guests}
          toggleConfirmation={this.toggleConfirmation}
          toggleEditing={this.toggleEditing}
          setName={this.setName}
          removeGuest={this.removeGuest}
          pendingGuest={this.state.pendingGuest}/>
      </div>
    );
  }
}

export default App;
