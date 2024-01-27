import React from 'react';
import './App.css';
import ShapeSelectorForm from './components/shape-selector/ShapeSelectorForm';
import AreaCalculator from './components/calculator/AreaCalculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Výpočet obsahu geometrických tvarů</h1>
      </header>
      <ShapeSelectorForm />
      <AreaCalculator />
    </div>
  );
}

export default App;
