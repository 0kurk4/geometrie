import Shape from "../../../types/Shape";
import ShapeDimensionValues from "../../../types/ShapeDimensionValues";
import AreaParamsInput from "./AreaParamsInput";
import './AreaParamsForm.css';

type AreaDescriptionProps = {
    shape: Shape | null;
    handler: (dimension: ShapeDimensionValues) => void;
}

function AreaParamsForm({shape, handler}: AreaDescriptionProps) {
    const dimensions:Array<string> = shape ? shape.dimensions : [];

    const onInputHandler = (dimension: ShapeDimensionValues) => {
        handler(dimension);
    }

    return(
        <div className="Area-params-form">
            <h4>Parametry výpočtu</h4>
            {dimensions.map((dimension: any, key: number) => <AreaParamsInput name={dimension} key={key} handler={onInputHandler}/>)}
        </div>
    )
}

export default AreaParamsForm;