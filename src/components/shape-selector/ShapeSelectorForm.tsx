import React, { useState, ChangeEvent, FormEvent } from 'react';
// import ShapeSelectorInput from "./ShapeSelectorInput";
import "./ShapeSelectorForm.css"

function ShapeSelectorForm(props: any) {
    const [shapeId, setShapeId] = useState(-1);

    const handleFormChange = (event: ChangeEvent<HTMLSelectElement>) => setShapeId(Number(event.target.value));

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        props.handler(shapeId);
      };

    return (
        <form className="Shape-selector" onSubmit={handleSubmit}>
            <label>Geometrický tvar:
                <select className="Shape-selector-input" onChange={handleFormChange}>
                    <option value="-1" key='-1'>Vyberte tvar:</option>
                    {props.shapeSourceData.map((shape: any, key: number) => <option value={key} key={key}>{shape.name}, {key}</option>)}
                </select>
            </label>
            <button type="submit">Vybrat</button>
        </form>
    );
}

export default ShapeSelectorForm;