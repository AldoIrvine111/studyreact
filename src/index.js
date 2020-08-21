import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Hello() {
  return (
  <div>
    <h1>Welcome to React!</h1>
    <p>Lets start learning</p>
    <p>I'm using Component to write React UI</p>
  </div>
  )
}

ReactDOM.render(
  <Hello /> ,
  document.getElementById('root')
);


