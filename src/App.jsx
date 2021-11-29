import React from 'react';
import './App.css';
import Timer from './Components/Timer'

function App() {

  return (
    <div className="App">
      <Timer startTime='60000' step='1' />
    </div>
  );
}

export default App;