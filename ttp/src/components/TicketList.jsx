// src/components/TicketList.jsx
import React from 'react';
import Ticket from './Ticket';

const TicketList = ({ tickets }) => {
    return (
        <div className="ticket-list">
            {tickets.map((ticket, index) => (
                <Ticket key={index} ticket={ticket} />
            ))}
        </div>
    );
};

export default TicketList;
