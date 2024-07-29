import React, { useState } from 'react';

import Left from './Left';
import Right from './Right';
const App = () => {
  const [finalValues, setFinalValues] = useState({});
  const getFinalValues = (values) => {
    setFinalValues(values);
  };
  const [years,SetYears] = useState(1)
  const getYears=(value)=>{
    SetYears(value)
  }
  return (
    <div className="container">
      <Left sentFinalValues={getFinalValues} />
      <Right finalValues={finalValues} />
    </div>
  );
};

export default App;
