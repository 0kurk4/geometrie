import { FormEvent } from "react";

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
        <form className="Area-result-wrapper" onSubmit={handleSubmit}>
            <label>Výsledek:
                <input type="text" disabled={true} value={resultValue} />
            </label>
            <button type="submit">Vypočítat</button>
        </form>
    )
}

export default AreaResultForm;