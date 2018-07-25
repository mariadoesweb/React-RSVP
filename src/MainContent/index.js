import React from 'react';
import PropTypes from 'prop-types';
import GuestList from './GuestList';
import Counter from './Counter';
import ConfirmedFilter from './ConfirmedFilter';



const MainContent = props => {
    
    return (
        <div className="main">
            <ConfirmedFilter 
                toggleFilter={props.toggleFilter} 
                isFiltered={props.isFiltered}
            />
          <Counter  
            totalInvited={props.totalInvited}
            numberAttending={props.numberAttending}
            numberUnconfirmed={props.numberUnconfirmed}
            />
          <GuestList
                // Guest.js
            guests={props.guests}
            toggleConfirmation={props.toggleConfirmation}
            toggleEditing={props.toggleEditing}
            setName={props.setName}
            isFiltered={props.isFiltered}
            removeGuest={props.removeGuest}
                // PendingGuest.js
            pendingGuest={props.pendingGuest}
          />
    </div>
    )
};

MainContent.propTypes = {
    // ConfirmedFilter.js
  toggleFilter: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  // Counter.js
  totalInvited: PropTypes.number.isRequired,
  numberAttending: PropTypes.number.isRequired,
  numberUnconfirmed: PropTypes.number.isRequired,
  // GuestList.js
  guests: PropTypes.array.isRequired,
  toggleConfirmation: PropTypes.func.isRequired,
  toggleEditing: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  removeGuest: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired
};

export default MainContent;