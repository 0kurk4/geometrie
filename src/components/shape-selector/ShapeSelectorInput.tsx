function ShapeSelectorInput(props: any) {

    console.log("again FUNCTION", props.data);



    return(
        <label>Geometrický tvar:
        <select className="Shape-selector-input">
            <option value="-1">Vyberte tvar:</option>
            {props.data.map((shape: any, key: number) => <option value={key}>{shape.name}, {key}</option>)}
        </select>
        </label>
    )
}

export default ShapeSelectorInput;