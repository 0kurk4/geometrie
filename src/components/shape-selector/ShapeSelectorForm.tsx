import ShapeSelectorInput from "./ShapeSelectorInput";
import "./ShapeSelectorForm.css"

function ShapeSelectorForm() {
    return(
        <form className="Shape-selector">
            <ShapeSelectorInput />
            <button type="submit">Vybrat</button>
        </form>
    );
}

export default ShapeSelectorForm;