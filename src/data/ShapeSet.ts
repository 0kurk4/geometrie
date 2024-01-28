import DiscArea from "../shapes/DiscArea";
import RectangleArea from "../shapes/RectangleArea";
import SquareArea from "../shapes/SquareArea";
import TrapezoidArea from "../shapes/TrapezoidArea";
import TriangleArea from "../shapes/TriangleArea";
import Shape from "../types/Shape";

const ShapeSet: Array<Shape> = [
    SquareArea,
    RectangleArea,
    TriangleArea,
    TrapezoidArea,
    DiscArea
];

const getShapeSet = (): Array<Shape> => ShapeSet;

const getShapeFromSet = (index: number): Shape | null => (index < 0 && index > ShapeSet.length) ? null : ShapeSet[index];

export {
    getShapeSet,
    getShapeFromSet
};