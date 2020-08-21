import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const lakeList = ["Toba", "Hijau", "Mode"];

function App({lakes}) {
  return (
      <ul>
        {lakes.map(lake => (
          <li>
            {lake}
          </li>
        ))}
      </ul>
  )
}

ReactDOM.render(
  <App lakes={lakeList}/>,
  document.getElementById('root')
);


