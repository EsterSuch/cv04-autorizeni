import React from 'react';
import './style.css';


const City = (props) => {
  return (
    <div className="city">
      <p>{props.city}</p>
    </div>
  )
};
export default City;