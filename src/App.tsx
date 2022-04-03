import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  /*
    typescript inferred this to be a number
    const [number, setNumber] = useState(5);

    But we can put explicit type annotation

    but let typescript infer on it's own
  */ 
  const [number, setNumber] = useState<number>(5);

  const changeNumber = () =>{
    // error for : setNumber("10");
    setNumber(10);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
