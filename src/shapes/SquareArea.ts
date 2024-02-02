import Shape from "../types/Shape";
import { validateDimensions } from "../utils/validateDimensionsUtil";

const SquareArea: Shape = {

    name: "Čtverec",

    image: "ctverec.png",

    dimensions: ["a"],

    getArea: (values):number => {
        if (!validateDimensions(values, SquareArea)) {
            return NaN;
        }

        const { a } = values;
        const result = Math.pow(a, 2);

        return result;
    }
}

export default SquareArea;