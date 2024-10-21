// src/components/BookingForm.jsx
import React, { useState } from 'react';

const BookingForm = ({ onBook }) => {
    const [name, setName] = useState('');
    const [trainNumber, setTrainNumber] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onBook({ name, trainNumber, date });
        setName('');
        setTrainNumber('');
        setDate('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Train Number"
                value={trainNumber}
                onChange={(e) => setTrainNumber(e.target.value)}
                required
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />
            <button type="submit">Book Ticket</button>
        </form>
    );
};

export default BookingForm;
