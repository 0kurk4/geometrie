import AreaDescription from "./AreaDescription";
import AreaResult from "./AreaResult";
import AreaParamsForm from "./params-selector/AreaParamsForm";
import './AreaCalculator.css';
import Shape from "../../types/Shape";
import ShapeDimensionValues from "../../types/ShapeDimensionValues";
import { FormEvent, MouseEvent, useState } from "react";

type AreaCalculatorProps = {
    shape: Shape | null;
}

function AreaCalculator({ shape }: AreaCalculatorProps) {
    const [shapeDimensions, setShapeDimensions] = useState<ShapeDimensionValues>({});

    const onParamsFormHandler = (dimension: ShapeDimensionValues) => {
        const dimensionsToUpdate: ShapeDimensionValues = shapeDimensions;
        Object.assign(dimensionsToUpdate, dimension);
        setShapeDimensions(dimensionsToUpdate);
        console.log(shapeDimensions);
    }

    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();
        //handler(shapeId);
    }

    const handleClick = (event: MouseEvent): void => {
        const result = console.log(event);
    }

    return (
        <div className="Area-calculator">
            <AreaDescription shape={shape} />
            <div className="Area-params-wrapper">
                <AreaParamsForm shape={shape} handler={onParamsFormHandler} />
                <form className="Area-result-wrapper" onSubmit={handleSubmit}>
                    <label>Výsledek:
                        <input type="text" disabled={true} value="Result" />
                    </label>
                    <button type="submit" onClick={handleClick}>Vypočítat</button>
                </form>
            </div>
        </div>
    )
}

export default AreaCalculator;