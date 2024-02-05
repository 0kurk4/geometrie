import DiscArea from './DiscArea';
import ShapeDimensionValues from '../types/ShapeDimensionValues';
import disableConsoleErrors from '../utils/testUtil';

disableConsoleErrors();

const valid_shapeDimensions: ShapeDimensionValues = {
    "r": 2
};

const missingProperty_shapeDimensions: ShapeDimensionValues = {
    "a": 2
};

const negativeValue_shapeDimensions: ShapeDimensionValues = {
    "r": -2
};

test('checks if Shape returns valid area', () => {
    const result = DiscArea.getArea(valid_shapeDimensions);
    expect(result).toEqual(Math.pow(valid_shapeDimensions.r, 2) * Math.PI);
});

test('checks for missing property', () => {
    const result = DiscArea.getArea(missingProperty_shapeDimensions);
    expect(result).toEqual(NaN);
});

test('checks for negative value', () => {
    const result = DiscArea.getArea(negativeValue_shapeDimensions);
    expect(result).toEqual(NaN);
});