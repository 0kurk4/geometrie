import { ChangeEvent } from 'react';
import Shape from '../../types/Shape';
import './ShapeSelectorInput.css';

type ShapeSelectorInputProps = {
    shapeId: number,
    handler: (event: ChangeEvent<HTMLSelectElement>) => void;
    shapes: Array<Shape>;
}

function ShapeSelectorInput({shapes, shapeId, handler}: ShapeSelectorInputProps) {
    return (
        <label className="Shape-selector-input">Geometrický tvar:
            <div>
                <select value={shapeId} onChange={handler}>
                    <option value={-1} key="-1">Vyberte tvar:</option>
                    {shapes.map((shape: any, key: number) => <option value={key} key={key}>{shape.name}</option>)}
                </select>
            </div>
        </label>
    )
}

export default ShapeSelectorInput;