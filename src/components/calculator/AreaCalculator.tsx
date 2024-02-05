import AreaDescription from "./AreaDescription";
import AreaResultForm from "./AreaResultForm";
import AreaParamsForm from "./params-selector/AreaParamsForm";
import './AreaCalculator.css';
import Shape from "../../types/Shape";
import ShapeDimensionValues from "../../types/ShapeDimensionValues";
import { useState } from "react";

type AreaCalculatorProps = {
    shape: Shape | null;
}

const getDefaultShapeDimensions = (shape: Shape | null): ShapeDimensionValues => {
    const dimensions: ShapeDimensionValues = {};
    const values: Array<string> = shape ? shape.dimensions : [];
    for (let i = 0; i < values.length; i++) {
        dimensions[values[i]] = 0;
    }
    return dimensions;
}

function AreaCalculator({ shape }: AreaCalculatorProps) {
    const [shapeDimensions, setShapeDimensions] = useState<ShapeDimensionValues>(getDefaultShapeDimensions(shape));
    const [shapeArea, setShapeArea] = useState<number>();


    const onAreaParamsFormHandler = (dimension: ShapeDimensionValues): void => {
        const dimensionsToUpdate: ShapeDimensionValues = shapeDimensions;
        Object.assign(dimensionsToUpdate, dimension);
        setShapeDimensions(dimensionsToUpdate);
    }

    const onAreaResultFormHandler = (): void => {
        setShapeArea(shape?.getArea(shapeDimensions));
    }

    return (
        <div className="Area-calculator">
            <AreaDescription shape={shape} />
            <div className="Area-params-wrapper">
                <AreaParamsForm shape={shape} handler={onAreaParamsFormHandler} />
                <AreaResultForm area={shapeArea} handler={onAreaResultFormHandler} />
            </div>
        </div>
    )
}

export default AreaCalculator;