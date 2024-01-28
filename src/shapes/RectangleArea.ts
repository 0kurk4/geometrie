import Shape from "../types/Shape";
import validateDimensions from "../utils/validateDimensionsUtil";

const RectangleArea: Shape = {

    name: "Obdélník",

    image: "obdelnik.png",

    dimensions: ["a", "b"],

    getArea: (values) => {
        if (!validateDimensions(values, RectangleArea)) {
            return NaN;
        }

        const { a, b } = values;
        const result = a * b;

        return result;
    }
}

export default RectangleArea;