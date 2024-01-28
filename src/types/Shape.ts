import ShapeDimensionValues from "./ShapeDimensionValues";

type Shape = {
    name: string;
    image: string;
    dimensions: Array<string>;
    getArea: (values: ShapeDimensionValues) => number;
}

export default Shape;