import Shape from "../types/Shape";
import validateDimensions from "../utils/validateDimensionsUtil";

const DiscArea: Shape = {

    name: "Kruh",

    image: "kruh.png",

    dimensions: ["r"],

    getArea: (values) => {
        if (!validateDimensions(values, DiscArea)) {
            return NaN;
        }

        const { r } = values;
        const result = Math.pow(r, 2) * Math.PI;

        return result;
    }
}

export default DiscArea;