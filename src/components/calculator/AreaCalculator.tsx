import AreaDescription from "./AreaDescription";
import AreaResult from "./AreaResult";
import AreaParamsForm from "./params-selector/AreaParamsForm";
import './AreaCalculator.css';
import Shape from "../../types/Shape";

type AreaCalculatorProps = {
    shape: Shape | null;
}

function AreaCalculator({shape}: AreaCalculatorProps) {
    return (
        <div className="Area-calculator">
            <AreaDescription shape={shape} />
            <div className="Area-params-wrapper">
                <AreaParamsForm shape={shape} />
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