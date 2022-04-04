import React, {useState} from 'react';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState{
  people: {
    name: string
    age: number
    img: string
    note?: string
  }[]; // <- we use to define an array of objects
}

function App() {
  /*
    typescript inferred this to be a number
    const [number, setNumber] = useState(5);

    But we can put explicit type annotation

    but let typescript infer on it's own
  */ 
 /*
  const [number, setNumber] = useState<number>(5);

  const changeNumber = () =>{
    // error for : setNumber("10");
    setNumber(10);
  }
  */

  /*
  [
    { 
      name : "LeBron James",
      age : 36,
      img : "https://www.google.com",
      note : "Allergic to staying on same team " 
    },
    { 
      name : "Kobe Bryant",
      age : 32,
      img : "https://www.google.com"
    },
  ]
  */

  const [people, setPeople] = useState<IState["people"]>([{ 
    name : "LeBron James",
    age : 36,
    img : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.thebasketballnetwork.com%2Fwp-content%2Fuploads%2F2018%2F05%2FUSATSI_10853818.jpg%3Ffit%3D5683%252C3789%26ssl%3D1&f=1&nofb=1",
    note : "Allergic to staying on same team " 
  }]);

  return (
    <div className="App">
        <h1>People invited to my party</h1>
        <List people={people}/>
        <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
