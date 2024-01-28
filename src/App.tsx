import React, { useState } from 'react';
import './App.css';
import ShapeSelectorForm from './components/shape-selector/ShapeSelectorForm';
import AreaCalculator from './components/calculator/AreaCalculator';
import { shapeSourceData } from './data/shapes';
import RectangleArea from './shapes/RectangleArea';
import ShapeDimensionValues from './types/ShapeDimensionValues';

function App() {

    const [shapeIndex, setShapeIndex] = useState(-1);

    const getShape = () => shapeIndex < 0 ? null : shapeSourceData[shapeIndex];

   

    const rectangleDimensions: ShapeDimensionValues = {
        a: 3,
        b: 5,
        d: 6
    }

    console.log(RectangleArea.getArea(rectangleDimensions));

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
