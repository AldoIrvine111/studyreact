import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Lake({ name }) {
  return (
    <div>
      <h1>Visit {name}!</h1>
    </div>)
}

function SkiResort({ name }) {
  return (
    <div>
      <h1>Visit {name}!</h1>
    </div>)
}

function App(props) {
  return (
    <div>
      {props.season === "summer" ? (
        <Lake name="Jenny Lake" />) :
        props.season === "winter" ? (
          <SkiResort name="JHMR" /> 
        ) : (
          <h1>Come back in Winter or Summer</h1>
        )
      }
    </div>
  )
}

ReactDOM.render(
  <App season="summer" />,
  document.getElementById('root')
);


