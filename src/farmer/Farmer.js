import React from 'react';
import './Farmers.css';

const Farmers = () => {
  const rows = new Array(10).fill(null).map((_, index) => (
    <div className="farmer-row" key={index}>
      <div className="farmer-column icon">👤</div>
      <div className="farmer-column">ID</div>
      <div className="farmer-column">Names</div>
      <div className="farmer-column">Surname</div>
      <div className="farmer-column">Acreage</div>
      <div className="farmer-column">Location</div>
    </div>
  ));

  return (
    <div className="farmers">
      <h2>Farmers</h2>
      {rows}
    </div>
  );
}

export default Farmers;
