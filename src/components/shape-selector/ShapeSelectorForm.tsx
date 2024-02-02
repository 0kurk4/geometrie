import React, { useState, ChangeEvent, FormEvent } from 'react';
import ShapeSelectorInput from "./ShapeSelectorInput";
import "./ShapeSelectorForm.css";
import Shape from '../../types/Shape';

type ShapeSelectorFormProps = {
    handler: (shapeId: number) => void;
    shapes: Array<Shape>;
}

function ShapeSelectorForm({ shapes, handler }: ShapeSelectorFormProps) {
    const [shapeId, setShapeId] = useState(-1);

    const handleSelect = (event: ChangeEvent<HTMLSelectElement>): void => setShapeId(Number(event.target.value));

    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();
        handler(shapeId);
    };


    return (
        <form className="Shape-selector" onSubmit={handleSubmit}>
            <ShapeSelectorInput shapes={shapes} shapeId={shapeId} handler={handleSelect} />
            <div className="Button-wrapper">
                <button type="submit">Vybrat</button>
                <div className="Button-icon"></div>
            </div>
        </form>
    );
}

export default ShapeSelectorForm;