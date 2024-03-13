import React, { useState } from 'react';
import "./index.css";

const Reservation = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Nom:', name, 'Date:', date, 'Heure:', time);
    
    setName('');
    setDate('');
    setTime('');
  };

  return (
    <div>
      <h2>Réserver une table</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nom :
          <input type="text" value={name} onChange={handleNameChange} required />
        </label>
        <br />
        <label>
          Date :
          <input type="date" value={date} onChange={handleDateChange} required />
        </label>
        <br />
        <label>
          Heure :
          <input type="time" value={time} onChange={handleTimeChange} required />
        </label>
        <br />
        <button type="submit">Réserver</button>
      </form>
    </div>
  );
};

export default Reservation;