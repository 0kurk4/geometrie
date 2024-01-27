import AreaParamsInput from "./AreaParamsInput";

function AreaParamsForm(props: any) {
    const dimensions = props.shape ? props.shape.dimensions : null;
    const name = dimensions ? dimensions[0] : "none";

    console.log('dimensions', dimensions);

    return(
        <div className="Area-params-form">
            <h4>Parametry výpočtu</h4>
            <AreaParamsInput name={name} />
        </div>
    )
}

export default AreaParamsForm;