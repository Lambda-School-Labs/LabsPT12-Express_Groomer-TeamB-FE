import React from 'react';
import './overview.scss';

export default function Overview() {
  return (
    <div>
      <div className="Upcoming-Appointments">
        <h1>Upcoming Appointments</h1>
      </div>
      <div className="My-Pets">
        <h1>My Pets</h1>
      </div>
      <div className="Favorite-Customers">
        <h1>Favorite Groomers</h1>
      </div>
      <div className="Current-Balance">
        <h1>Current Balance</h1>
      </div>
    </div>
  );
}
