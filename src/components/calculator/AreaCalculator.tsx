import AreaDescription from "./AreaDescription";
import AreaResult from "./AreaResult";
import AreaParamsForm from "./params-selector/AreaParamsForm";
import './AreaCalculator.css';

function AreaCalculator(props: any) {
    return(
        <div className="Area-calculator">
            <AreaDescription />
            <div className="Area-params-wrapper">
                <AreaParamsForm />
                <div className="Area-result-wrapper">
                   <AreaResult />
                    <button type="submit">Vypočítat</button>
                </div>
            </div>
        </div>
    )
}

export default AreaCalculator;