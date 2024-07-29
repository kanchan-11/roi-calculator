import { useState } from 'react';
const Question = (props) => {
  const [inputVal, setInputVal] = useState(props.defVal);
  const [isLess, setIsLess] = useState('false');

  const validateChange = () => {
    if (
      (inputVal < 1 && props.defVal == 2) ||
      (inputVal < 17400 && props.defVal == 30000)
    )
      setIsLess('true');
    else setIsLess('false');
  };

  return (
    <div>
      <p className="label">{props.ques}</p>
      <input
        type="number"
        value={inputVal}
        // id="param1"
        className="input"
        onkeyup="useCaseCalculation()"
        onChange={(e) => {
          setInputVal(e.target.value);
          validateChange();
          props.onValueChange(e.target.value);
        }}
      />

      {isLess && props.defVal == 2 && (
        <p className="error-line">Please enter the value greater than 0</p>
      )}

      {isLess && props.defVal == 30000 && (
        <p className="error-line">Please enter the value greater than 17400</p>
      )}
    </div>
  );
};

export default Question;
