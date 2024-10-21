// src/components/Ticket.jsx
import React from 'react';

const Ticket = ({ ticket }) => {
    return (
        <div className="ticket">
            <h3>Ticket for {ticket.name}</h3>
            <p>Train Number: {ticket.trainNumber}</p>
            <p>Date: {ticket.date}</p>
        </div>
    );
};

export default Ticket;
