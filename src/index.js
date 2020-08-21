import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function GitHubUser({ login }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, [login])

  if (data) {
    return (
      <>
        <h1>Login name: {login}</h1>
        <div>{data.login}</div>
      </>
    )

  }

  return (
    <h1>Login name: {login}</h1>
  )
}

function App() {
  return (
    <GitHubUser login="AldoIrvine111" />
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);




