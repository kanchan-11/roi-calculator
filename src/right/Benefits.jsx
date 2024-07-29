import React from 'react';
import '../App.css';
const Benefit = ({ text }) => {
  return (
    <div className="spacer">
      <img
        src="https://www.adrosonic.com/wp-content/uploads/2022/03/Icon-feather-check.svg"
        alt=""
        height="12"
      />
      <p className="benefit">{text}</p>
    </div>
  );
};
export default Benefit;
