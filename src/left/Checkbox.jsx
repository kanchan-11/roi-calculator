import React, { useState } from 'react';
const Checkbox = ({ text, onCheck, isDisable }) => {
  const [check, setCheck] = useState(0);
  const onTick = (e) => {
    if(!isDisable)
      setCheck(check == 0 ? 1 : 0);
    onCheck(text, check);
  };
  return (
    <div className="check-box-style">
      <input
        className="roi-chkbox"
        type="checkbox"
        id="chk1"
        name={text}
        value="1"
        onClick={onTick}
      />
      <label class="question-checkbox" for="vehicle1">
        {text}
      </label>
    </div>
  );
};
export default Checkbox;
