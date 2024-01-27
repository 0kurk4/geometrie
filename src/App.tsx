import React, { useState } from 'react';
import './App.css';
import ShapeSelectorForm from './components/shape-selector/ShapeSelectorForm';
import AreaCalculator from './components/calculator/AreaCalculator';
import { shapeSourceData } from './data/shapes'

function App() {

    const [shapeIndex, setShapeIndex] = useState(-1);

    const onSelectorForm = (index: number) => {
        console.log('childToParent', index);
        setShapeIndex(index);
    }

    return (
        <div className="App">
            <h1 className="App-header">Výpočet obsahu</h1>
            <ShapeSelectorForm shapeSourceData={shapeSourceData} handler={onSelectorForm} />
            <AreaCalculator shapeSourceData={shapeSourceData} shapeIndex={shapeIndex} />
        </div>
    );
}

export default App;
