import React, { useState } from 'react';

const RateFilter = ({ onRateChange }) => {
  const [selectedRate, setSelectedRate] = useState('');

  const handleRateChange = (e) => {
    const newRate = e.target.value;
    setSelectedRate(newRate);
    onRateChange(newRate);
  };

  return (
    <div>
      <label htmlFor="rate-filter">Filter by Rate:</label>
      <select id="rate-filter" onChange={handleRateChange} value={selectedRate}>
        <option value="">All</option>
        <option value="1">1 Star</option>
        <option value="2">2 Stars</option>
        <option value="3">3 Stars</option>
        <option value="4">4 Stars</option>
        <option value="5">5 Stars</option>
      </select>
    </div>
  );
};

export default RateFilter;
