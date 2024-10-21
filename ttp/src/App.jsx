// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
// src/App.jsx
import React, { useState } from 'react';
import BookingForm from './components/BookingForm';
import TicketList from './components/TicketList';
import './styles.css';

const App = () => {
    const [tickets, setTickets] = useState([]);

    const handleBook = (ticket) => {
        setTickets([...tickets, ticket]);
    };

    return (
        <div className="app">
            <h1>Train Ticket Booking</h1>
            <BookingForm onBook={handleBook} />
            <h2>Booked Tickets</h2>
            <TicketList tickets={tickets} />
        </div>
    );
};

export default App;
