import React, { useState } from 'react';
import './App.css';

const SeatBooking = () => {
  const [seats, setSeats] = useState([
    { id: '1a', booked: true },
    { id: '1b', booked: true },
    { id: '1c', booked: false },
    { id: '1d', booked: false },
    { id: '1e', booked: false },
    { id: '2a', booked: false },
    { id: '2b', booked: false },
    { id: '3a', booked: false },
    { id: '3b', booked: false },
    { id: '3c', booked: false },
    { id: '3d', booked: false },
    { id: '3e', booked: false },
  ]);

  const handleSeatClick = (seatId) => {
    const updatedSeats = seats.map((seat) =>
      seat.id === seatId ? { ...seat, booked: !seat.booked } : seat
    );
    setSeats(updatedSeats);
  };

  return (
    <div className="seat-booking-container">
      <div className="row">
        <div className="seat booked">1a</div>
        <div className="seat booked">1b</div>
        <div
          className={`seat ${seats[2].booked ? 'booked' : 'available'}`}
          onClick={() => handleSeatClick('1c')}
        >
          1c
        </div>
        <div
          className={`seat ${seats[3].booked ? 'booked' : 'available'}`}
          onClick={() => handleSeatClick('1d')}
        >
          1d
        </div>
        <div
          className={`seat ${seats[4].booked ? 'booked' : 'available'}`}
          onClick={() => handleSeatClick('1e')}
        >
          1e
        </div>
      </div>
      <div className="row">
        <div
          className={`seat ${seats[5].booked ? 'booked' : 'available'}`}
          onClick={() => handleSeatClick('2a')}
        >
          2a
        </div>
        <div
          className={`seat ${seats[6].booked ? 'booked' : 'available'}`}
          onClick={() => handleSeatClick('2b')}
        >
          2b
        </div>
      </div>
      <div className="row">
        <div
          className={`seat ${seats[7].booked ? 'booked' : 'available'}`}
          onClick={() => handleSeatClick('3a')}
        >
          3a
        </div>
        <div
          className={`seat ${seats[8].booked ? 'booked' : 'available'}`}
          onClick={() => handleSeatClick('3b')}
        >
          3b
        </div>
        <div
          className={`seat ${seats[9].booked ? 'booked' : 'available'}`}
          onClick={() => handleSeatClick('3c')}
        >
          3c
        </div>
        <div
          className={`seat ${seats[10].booked ? 'booked' : 'available'}`}
          onClick={() => handleSeatClick('3d')}
        >
          3d
        </div>
        <div
          className={`seat ${seats[11].booked ? 'booked' : 'available'}`}
          onClick={() => handleSeatClick('3e')}
        >
          3e
        </div>
      </div>
    </div>
  );
};

export default SeatBooking;
