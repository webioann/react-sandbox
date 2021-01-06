import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import Root from '../Root/Root';

function App() {
  const [togle,setTogle] = useState(true);


  let ccc = {
    go: 34,
    root: 'Todo props'
  }
function openClose () {
  setTogle((ope) => !ope);
};

  return (
    <div className="App">
      <h1>Hello react</h1>
       <Root a={'a'}/>
    </div>
  );
}

export default App;
