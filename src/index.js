import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Hello( {library, message, number} ) {
  console.log(library) ;
  console.log(message) ;
  console.log(number) ;
  return (
    <div>
      <h1>Welcome to {library}!</h1>
      <p>Lets start learning</p>
      <p>{message}</p>
      <p>{number} = this is the assigned number with props</p>
      <p>I'm using Component to write React UI</p>
    </div>
  )
}

ReactDOM.render(
  <Hello
    library="Aldo's Page"
    message="Have FUN!"
    number={1} />,
  document.getElementById('root')
);


