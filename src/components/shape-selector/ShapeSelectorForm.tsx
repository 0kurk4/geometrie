import React, { useState, ChangeEvent, FormEvent } from 'react';
// import ShapeSelectorInput from "./ShapeSelectorInput";
import "./ShapeSelectorForm.css";
import Shape from '../../types/Shape';

type ShapeSelectorFormProps = {
    handler: (shapeId: number) => void;
    shapes: Array<Shape>;
}

function ShapeSelectorForm({shapes, handler}: ShapeSelectorFormProps) {
    const [shapeId, setShapeId] = useState(-1);

    const handleSelect = (event: ChangeEvent<HTMLSelectElement>):void => setShapeId(Number(event.target.value));

    const handleSubmit = (event: FormEvent):void => {
        event.preventDefault();
        handler(shapeId);
      };


    return (
        <form className="Shape-selector" onSubmit={handleSubmit}>
            <label>Geometrický tvar:
                <select className="Shape-selector-input" value={shapeId} onChange={handleSelect}>
                    <option value="-1" key='-1'>Vyberte tvar:</option>
                    {shapes.map((shape: any, key: number) => <option value={key} key={key}>{shape.name}, {key}</option>)}
                </select>
            </label>
            <button type="submit">Vybrat</button>
        </form>
    );
}

export default ShapeSelectorForm;