import React, { useState } from 'react';

const YesNo = ({ text, type, buttonSuccess, buttonFail }) => {
  const [colorBgYes, setColorBgYes] = useState('#2D79A6');
  const [colorBgNo, setColorBgNo] = useState('#ffffff');
  const [colorYes, setColorYes] = useState('#ffffff');
  const [colorNo, setColorNo] = useState('#000000');

  const success = () => {
    setColorBgYes('#2D79A6');
    setColorBgNo('#ffffff');
    setColorYes('#ffffff');
    setColorNo('#000000');
    buttonSuccess({ type });
  };
  const fail = () => {
    setColorBgNo('#2D79A6');
    setColorBgYes('#ffffff');
    setColorYes('#000000');
    setColorNo('#ffffff');
    buttonFail({ type });
  };

  return (
    <div>
      <p className="question-btn">{text}</p>
      <button
        className="roi-btn-yes"
        // id="btn-yes"
        onClick={success}
        name={type}
        style={{ backgroundColor: colorBgYes, color: colorYes }}
      >
        <i className="fa-solid fa-check"></i> Yes
      </button>
      <button
        className="roi-btn-no"
        // id="btn1-no"
        onClick={fail}
        name={type}
        style={{ backgroundColor: colorBgNo, color: colorNo }}
      >
        <i className="fa-solid fa-xmark"></i>No
      </button>
    </div>
  );
};
export default YesNo;
