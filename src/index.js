import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  const [manager, setManager] = useState("Alex");
  const [status, setStatus] = useState("Open");
  const [year, setYear] = useState(2050);
  return (

    <>
      <div>
        <h1>{year}</h1>
        <button onClick={() => setYear(year + 1)}>New Year!</button>
      </div>

      <div>
        <h1>Manager on Duty: {manager}</h1>
        <button onClick={() => setManager("Alex")}>Alex</button>
        <button onClick={() => setManager("Aldo")}>Aldo</button>
        <button onClick={() => setManager("Beatrice")}>Beatrice</button>
      </div>

      <div>
        <h1>Status : {status} </h1>
        <button onClick={() => setStatus("Open")}>Open</button>
        <button onClick={() => setStatus("Closed")}>Closed</button>
        <button onClick={() => setStatus("Back in 5")}>Break</button>
      </div>
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);




