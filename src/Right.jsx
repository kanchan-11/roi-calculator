import React, { useState } from 'react';
import Benefit from './right/Benefits';
import DropDown from './right/DropDown';

const Right = ({ finalValues }) => {
  console.log(finalValues);
  const benefitList = [
    'Enhanched cycle time',
    'Timely reaction to market trends',
    'Reduced operational risk',
    'Driving process improvement and diligency',
  ];

  const [years, setYears] = useState(1);
  const calYears = (param) => {
    setYears(param);
    console.log('number of years', param);
  };

  return (
    <div className="right">
      <h2 className="title1">YOUR ROI</h2>
      <p className="font1">With ADROSONIC RPA</p>
      <span className="year">in </span>
      <DropDown numOfYears={calYears} />
      <div className="output-section">
        <img
          className="icon-class"
          src="https://www.adrosonic.com/wp-content/uploads/2022/03/Icon-awesome-money-bill-wave-1.svg"
          alt=""
        />

        <p className="font">Your current cost of</p>
        <p className="answer" type="text" id="original-time">
          $ {finalValues.finalCurrentHours}
        </p>
      </div>
      <div className="output-section">
        <p className="font">will be reduced to</p>
        <p className="answer" type="text" id="optimised-time">
          $ {finalValues.finalOptimisedHours}
        </p>
      </div>
      <div className="output-section">
        <img
          className="icon-class"
          src="https://www.adrosonic.com/wp-content/uploads/2022/03/Icon-awesome-chart-line-1.svg"
          alt=""
        />

        <p className="font">Your ROI can be maximised upto</p>
        <p className="answer" type="text" id="reduced-hours">
          {finalValues.reducedCost} %
        </p>
      </div>
      <br />
      <p className="font">And a lot more benefits:</p>
      {benefitList.map((e) => (
        <Benefit text={e} />
      ))}
      <br />
      <p className="font">
        Interested to know how? Book a free demo with us today!
      </p>
      <br />
      <a href="/contact-us" className="get-in-touch" />
      GET IN TOUCH
    </div>
  );
};
export default Right;
