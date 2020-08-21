import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const numberList = [1, 2, 3, 4, 5,]

function App({ numbers }) {
  return (
    <div>
      {numbers.map(number =>
        <li key={number.toString()}>{number}</li>
      )}
    </div>
  )
}

ReactDOM.render(
  <App numbers={numberList} />,
  document.getElementById('root')
);


