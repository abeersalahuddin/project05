import React, { useState } from 'react';
import './App.css';
import Parent from './Parent';
import CounterContext from './CounterContext';
// import CounterReducer from './CounterReducer';


function App() {
  let countState = useState (1)

  return (
  
      <CounterContext.Provider value={countState}>
        <div>
          <Parent />
          
        </div>
      </CounterContext.Provider>
    );
}


export default App;






