function ShapeSelectorInput(props: any) {
    return (
        <label>Geometrický tvar:
            <select className="Shape-selector-input">
                <option value="-1">Vyberte tvar:</option>
                {props.data.map((shape: any, key: number) => <option value={key}>{shape.name}</option>)}
            </select>
        </label>
    )
}

export default ShapeSelectorInput;