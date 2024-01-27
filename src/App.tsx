import React, { useState } from 'react';
import './App.css';
import ShapeSelectorForm from './components/shape-selector/ShapeSelectorForm';
import AreaCalculator from './components/calculator/AreaCalculator';
import { shapeSourceData } from './data/shapes'

function App() {

    const [shapeIndex, setShapeIndex] = useState(-1);

    const getShape = () => shapeIndex < 0 ? null : shapeSourceData[shapeIndex];

    const onSelectorForm = (index: number) => {
        console.log('childToParent', index);
        setShapeIndex(index);
    }

    return (
        <div className="App">
            <h1 className="App-header">Výpočet obsahu</h1>
            <ShapeSelectorForm shapeSourceData={shapeSourceData} handler={onSelectorForm} />
            <AreaCalculator shape={getShape()} />
        </div>
    );
}

export default App;
