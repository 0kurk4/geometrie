import RectangleArea from './RectangleArea';
import ShapeDimensionValues from '../types/ShapeDimensionValues';
import disableConsoleErrors from '../utils/testUtil';

disableConsoleErrors();

const valid_shapeDimensions: ShapeDimensionValues = {
    "a": 28.89,
    "b": 48921.79122
};

const missingProperty_shapeDimensions: ShapeDimensionValues = {
    "a": 279,
    "x": 562
};

const negativeValue_shapeDimensions: ShapeDimensionValues = {
    "a": -10,
    "b": 10
};

test('checks if Shape returns valid area', () => {
    const result = RectangleArea.getArea(valid_shapeDimensions);
    expect(result).toEqual(valid_shapeDimensions.a * valid_shapeDimensions.b);
});

test('checks for missing property', () => {
    const result = RectangleArea.getArea(missingProperty_shapeDimensions);
    expect(result).toEqual(NaN);
});

test('checks for negative value', () => {
    const result = RectangleArea.getArea(negativeValue_shapeDimensions);
    expect(result).toEqual(NaN);
});