// src/app.jsx
import React from 'react';

const App = () => {
  return <h1>Hello, World!</h1>;
};

export default App;

import  { useState } from 'react';
import './app.css';

function App() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const convertToCelsius = () => {
    const result = (parseFloat(fahrenheit) - 32) * (5 / 9);
    setCelsius(result.toFixed(2));
  };

  const convertToFahrenheit = () => {
    const result = (parseFloat(celsius) * (9 / 5)) + 32;
    setFahrenheit(result.toFixed(2));
  };

  return (
    <div className="container">
      <h1>Temperature Converter</h1>
      <div>
        <label>Celsius:</label>
        <input
          type="text"
          value={celsius}
          onChange={(e) => setCelsius(e.target.value)}
        />
        <button onClick={convertToFahrenheit}>&#8594; Convert to Fahrenheit</button>
      </div>
      <div>
        <label>Fahrenheit:</label>
        <input
          type="text"
          value={fahrenheit}
          onChange={(e) => setFahrenheit(e.target.value)}
        />
        <button onClick={convertToCelsius}>&#8594; Convert to Celsius</button>
      </div>
    </div>
  );
}

export default App;