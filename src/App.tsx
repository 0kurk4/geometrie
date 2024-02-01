import React, { useState } from 'react';
import './App.css';
import ShapeSelectorForm from './components/shape-selector/ShapeSelectorForm';
import AreaCalculator from './components/calculator/AreaCalculator';
import { getShapeSet, getShapeFromSet } from './data/ShapeSet';

function App() {

    const shapeSet = getShapeSet();

    const [selectedShapeIndex, setSelectedShapeIndex] = useState(-1);

    const onSelectorForm = (index: number): void => setSelectedShapeIndex(index);

    return (
        <div className="App">
            <h1 className="App-header">Výpočet obsahu</h1>
            <ShapeSelectorForm shapes={shapeSet} handler={onSelectorForm} />
            <AreaCalculator shape={getShapeFromSet(selectedShapeIndex)} key={selectedShapeIndex} />
        </div>
    );
}

export default App;
