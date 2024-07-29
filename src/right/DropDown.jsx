const DropDown = ({numOfYears}) => {
  const yearSelectfunction = (e) => {
    numOfYears(e.target.value);
    console.log('number of years', e.target.value);
  };
  return (
    <select id="years" onChange={yearSelectfunction}>
      <option value="1">1 year</option>
      <option value="2">2 years</option>
      <option value="3">3 years</option>
    </select>
  );
};
export default DropDown;
