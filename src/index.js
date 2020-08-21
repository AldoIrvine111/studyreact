import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Lake() {
  return (
    <div>
      <h1>Lake</h1>
    </div>)
}

function SkiResort() {
  return (
    <div>
      <h1>SkiResort</h1>
    </div>)
}

function App() {
  return (
    <>
      <Lake />
      <SkiResort />
    </>
  )
}

ReactDOM.render(
  <App season="summer" />,
  document.getElementById('root')
);

const [, , third] = ["Aldo", "Irvine", "3"];

console.log(third) ;



