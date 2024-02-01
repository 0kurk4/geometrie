import { ChangeEvent } from 'react';
import ShapeDimensionValues from '../../../types/ShapeDimensionValues';

type AreaParamsInputProps = {
    handler: (dimension: ShapeDimensionValues) => void;
    name: string;
}

function AreaParamsInput({ name, handler }: AreaParamsInputProps) {

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const value:number = Number(event.target.value);
        const result:ShapeDimensionValues = {};
        result[name] = value;
        handler(result);
    }

    return (
        <label>{name}
            <input type="number" min="0" step="any" placeholder="0.0" defaultValue="1.0" onChange={handleChange}></input>
        </label>
    )
}

export default AreaParamsInput;