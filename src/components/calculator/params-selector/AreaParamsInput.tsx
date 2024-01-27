function AreaParamsInput(props: any) {

    const handleChange = (event: any) => {
        console.log('AreaParamsInput', event.target.value);
    }

    return(
        <label>{props.name}
        <input type="number" min="0" step="any" placeholder="1.0" onChange={handleChange}></input>
        </label>
    )
}

export default AreaParamsInput;