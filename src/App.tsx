import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {

  const [apiResult, setApiResult] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      let { text } = await( await (await (await fetch(`/api/message`)).json()));
      console.log('data fetched', text);
      setApiResult(text);

    }
    fetchData();
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          Commit changes and push to master and magic happens ;)
        </p>
        <p>
          Api result: {apiResult}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
