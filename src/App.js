import './App.css';
import counterContext from './CounterContext';
import Parent from './Parent'
import React, {useState} from 'react'


function App() {

  let c_value = useState(23);

  return (
    <counterContext.Provider value={c_value}>
    <div className="App">
      <p>Context Api Demo</p>
      <br />
      <br />
      <br />
      <Parent />
    </div>
    </counterContext.Provider>
  );
}

export default App;
