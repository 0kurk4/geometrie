import AreaDescription from "./AreaDescription";
import AreaResult from "./AreaResult";
import AreaParamsForm from "./params-selector/AreaParamsForm";

function AreaCalculator() {
    return(
        <div className="Area-calculator">
            <AreaDescription />
            <AreaParamsForm />
            <button type="submit">Vypočítat</button>
            <AreaResult />
        </div>
    )
}

export default AreaCalculator;