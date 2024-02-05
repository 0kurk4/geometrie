import TrapezoidArea from './TrapezoidArea';
import ShapeDimensionValues from '../types/ShapeDimensionValues';
import disableConsoleErrors from '../utils/testUtil';

disableConsoleErrors();

const valid_shapeDimensions: ShapeDimensionValues = {
    "a": 127.45,
    "c": 87,
    "v": 48.2
};

const missingProperty_shapeDimensions: ShapeDimensionValues = {
    "a": 20,
    "b": 30,
    "x": 40
};

const negativeValue_shapeDimensions: ShapeDimensionValues = {
    "a": -10,
    "c": 10,
    "v": 2
};

test('checks if Shape returns valid area', () => {
    const result = TrapezoidArea.getArea(valid_shapeDimensions);
    expect(result).toEqual(
        ((valid_shapeDimensions.a + valid_shapeDimensions.c)
         * valid_shapeDimensions.v) / 2);
});

test('checks for missing property', () => {
    const result = TrapezoidArea.getArea(missingProperty_shapeDimensions);
    expect(result).toEqual(NaN);
});

test('checks for negative value', () => {
    const result = TrapezoidArea.getArea(negativeValue_shapeDimensions);
    expect(result).toEqual(NaN);
});