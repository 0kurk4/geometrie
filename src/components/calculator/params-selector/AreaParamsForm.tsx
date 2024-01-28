import Shape from "../../../types/Shape";
import ShapeDimensionValues from "../../../types/ShapeDimensionValues";
import AreaParamsInput from "./AreaParamsInput";

type AreaDescriptionProps = {
    shape: Shape | null;
}

function AreaParamsForm({shape}: AreaDescriptionProps) {
    const dimensions:Array<string> = shape ? shape.dimensions : [];

    const onInputHandler = (dimension: ShapeDimensionValues) => {
        console.log('dydydyd', dimension);
    }

    return(
        <div className="Area-params-form">
            <h4>Parametry výpočtu</h4>
            {dimensions.map((dimension: any, key: number) => <AreaParamsInput name={dimension} key={key} handler={onInputHandler}/>)}
        </div>
    )
}

export default AreaParamsForm;