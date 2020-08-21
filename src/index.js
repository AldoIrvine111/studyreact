import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function CheckBox() {
  const [checked, setChecked] = useState(true);
  
  useEffect(() => {
    alert(`checked: ${checked.toString()}`);
  }) ;



  return (
    <>
      <input type="checkbox"
        value={checked}
        onChange={() => setChecked(checked => !checked)} />
      {checked ? "checked" : "not checked"}
    </>
  )
}

ReactDOM.render(
  <CheckBox />,
  document.getElementById('root')
);




