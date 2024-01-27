import AreaDescription from "./AreaDescription";
import AreaResult from "./AreaResult";
import AreaParamsForm from "./params-selector/AreaParamsForm";
import './AreaCalculator.css';

function AreaCalculator(props: any) {
    console.log(props.shape);
    return (
        <div className="Area-calculator">
            <AreaDescription shape={props.shape} />
            <div className="Area-params-wrapper">
                <AreaParamsForm shape={props.shape} />
                <form className="Area-result-wrapper">
                    <label>Výsledek:
                        <input type="text" disabled={true} value="Result" />
                    </label>
                    <button type="submit">Vypočítat</button>
                </form>
            </div>
        </div>
    )
}

export default AreaCalculator;