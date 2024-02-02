import { ChangeEvent, useState } from 'react';
import ShapeDimensionValues from '../../../types/ShapeDimensionValues';
import './AreaParamsInput.css';
import { validateForPositiveValues } from '../../../utils/validateDimensionsUtil';

type AreaParamsInputProps = {
    handler: (dimension: ShapeDimensionValues) => void;
    name: string;
}

function AreaParamsInput({ name, handler }: AreaParamsInputProps) {

    const [className, setClassName] = useState<string>('Area-params-input required');

    const getShapeDimensionValues = (value: string): ShapeDimensionValues => {
        const numericValue: number = Number(value);
        const result: ShapeDimensionValues = {};
        result[name] = numericValue;
        return result;
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const { value } = event.target;
        updateClassName(value);
        handler(getShapeDimensionValues(value));
    }

    const updateClassName = (value: string): void => {
        let className: string = "Area-params-input ";
        const validationResult = validateForPositiveValues(getShapeDimensionValues(value));
        
        if (value === "")
            className += "required";
        else if (validationResult.length > 0)
            className += "warning";
        else
            className += "success";
        
        setClassName(className);
    }

    return (
        <div className={className}>
            <label>
                <code>{`${name}:`}</code>
                <input type="number" min="0" step="any" placeholder="0.0" onChange={handleChange}></input>
            </label>
        </div>

    )
}

export default AreaParamsInput;