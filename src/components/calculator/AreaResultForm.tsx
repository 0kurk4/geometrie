import { FormEvent } from "react";
import './AreaResultForm.css';

type AreaResultProps = {
    area: number | undefined;
    handler: () => void;
}

function AreaResultForm({ area, handler}: AreaResultProps) {
    const resultValue = (area !== undefined) && !isNaN(area) ? String(area) : ""

    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();
        handler();
    }


    return (
        <form className="Area-result-form" onSubmit={handleSubmit}>
            <label>Výsledek:
                <input type="text" disabled={true} value={resultValue} />
            </label>
            <div className="Button-wrapper">
                <button type="submit">Vypočítat</button>
                <div className="Button-icon"></div>
            </div>
        </form>
    )
}

export default AreaResultForm;