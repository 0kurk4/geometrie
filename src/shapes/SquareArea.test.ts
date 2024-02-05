import SquareArea from './SquareArea';
import ShapeDimensionValues from '../types/ShapeDimensionValues';
import disableConsoleErrors from '../utils/testUtil';

disableConsoleErrors();

const valid_shapeDimensions: ShapeDimensionValues = {
    "a": 6543201.258
};

const missingProperty_shapeDimensions: ShapeDimensionValues = {
    "b": 123,
    "x": 456
};

const negativeValue_shapeDimensions: ShapeDimensionValues = {
    "a": -5
};

test('checks if Shape returns valid area', () => {
    const result = SquareArea.getArea(valid_shapeDimensions);
    expect(result).toEqual(valid_shapeDimensions.a * valid_shapeDimensions.a);
});

test('checks for missing property', () => {
    const result = SquareArea.getArea(missingProperty_shapeDimensions);
    expect(result).toEqual(NaN);
});

test('checks for negative value', () => {
    const result = SquareArea.getArea(negativeValue_shapeDimensions);
    expect(result).toEqual(NaN);
});