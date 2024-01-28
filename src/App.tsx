import React, { useState } from 'react';
import './App.css';
import ShapeSelectorForm from './components/shape-selector/ShapeSelectorForm';
import AreaCalculator from './components/calculator/AreaCalculator';
// import { shapeSourceData } from './data/shapes';
import RectangleArea from './shapes/RectangleArea';
import ShapeDimensionValues from './types/ShapeDimensionValues';
import { getShapeSet, getShapeFromSet } from './data/ShapeSet';
import Shape from './types/Shape';

function App() {

    const shapeSet = getShapeSet();

    const [selectedShapeIndex, setSelectedShapeIndex] = useState(-1);

    //const [selectedShape, setSelectedShape] = useState<Shape>();

    // const getShape = ():any => selectedShapeIndex < 0 ? null : shapeSourceData[selectedShapeIndex];

    // const getShapeFromSet = ():Shape | null => selectedShapeIndex < 0 ? null : shapeSet[selectedShapeIndex];

   

    // const rectangleDimensions: ShapeDimensionValues = {
    //     a: 3,
    //     b: 5,
    //     d: 6
    // }

    // console.log(RectangleArea.getArea(rectangleDimensions));

    const onSelectorForm = (index: number):void => setSelectedShapeIndex(index);

    return (
        <div className="App">
            <h1 className="App-header">Výpočet obsahu</h1>
            <ShapeSelectorForm shapes={shapeSet} handler={onSelectorForm} />
            <AreaCalculator shape={getShapeFromSet(selectedShapeIndex)}/>
        </div>
    );
}

export default App;
