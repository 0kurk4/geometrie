import Shape from "../types/Shape";
import validateDimensions from "../utils/validateDimensionsUtil";

const TriangleArea: Shape = {

    name: "Trojúhelník",

    image: "trojuhelnik.png",

    dimensions: ["a", "v"],

    getArea: (values) => {
        if (!validateDimensions(values, TriangleArea)) {
            return NaN;
        }

        const { a, v } = values;
        const result = (a * v) / 2;

        return result;
    }
}

export default TriangleArea;