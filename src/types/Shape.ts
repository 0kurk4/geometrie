import ShapeDimensionValues from "./ShapeDimensionValues";

type Shape = {
    name: String;
    image: String;
    dimensions: Array<String>;
    getArea: (values: ShapeDimensionValues) => number;
}

export default Shape;