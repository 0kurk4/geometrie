import TriangleArea from './TriangleArea';
import ShapeDimensionValues from '../types/ShapeDimensionValues';
import disableConsoleErrors from '../utils/testUtil';

disableConsoleErrors();

const valid_shapeDimensions: ShapeDimensionValues = {
    "a": 15.96330,
    "v": 7.5
};

const missingProperty_shapeDimensions: ShapeDimensionValues = {
    "a": 12,
    "b": 13
};

const negativeValue_shapeDimensions: ShapeDimensionValues = {
    "a": 6.3,
    "v": -510
};

test('checks if Shape returns valid area', () => {
    const result = TriangleArea.getArea(valid_shapeDimensions);
    expect(result).toEqual((valid_shapeDimensions.a * valid_shapeDimensions.v) / 2);
});

test('checks for missing property', () => {
    const result = TriangleArea.getArea(missingProperty_shapeDimensions);
    expect(result).toEqual(NaN);
});

test('checks for negative value', () => {
    const result = TriangleArea.getArea(negativeValue_shapeDimensions);
    expect(result).toEqual(NaN);
});