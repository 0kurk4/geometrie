import Shape from "../types/Shape";
import validateDimensions from "../utils/validateDimensionsUtil";

const TrapezoidArea: Shape = {

    name: "Lichoběžník",

    image: "lichobeznik.png",

    dimensions: ["a", "c", "v"],

    getArea: (values) => {
        if (!validateDimensions(values, TrapezoidArea)) {
            return NaN;
        }

        const { a, c, v } = values;
        const result = ((a + c) * v) / 2;

        return result;
    }
}

export default TrapezoidArea;