import DiscArea from "../shapes/DiscArea";
import RectangleArea from "../shapes/RectangleArea";
import SquareArea from "../shapes/SquareArea";
import TrapezoidArea from "../shapes/TrapezoidArea";
import TriangleArea from "../shapes/TriangleArea";
import disableConsoleErrors from "./testUtil";
import { validateDimensions } from "./validateDimensionsUtil";

disableConsoleErrors();

test('checks if returns valid result for dimension check', () => {
    let result = validateDimensions({a: 35, b: 20}, RectangleArea);
    expect(result).toBeTruthy();

    result = validateDimensions({a: 2, b: 15}, TriangleArea);
    expect(result).toBeFalsy();

    result = validateDimensions({a: 78, b: 16.9}, SquareArea);
    expect(result).toBeTruthy();

    result = validateDimensions({a: 64, b: Math.PI}, RectangleArea);
    expect(result).toBeTruthy();
    
    result = validateDimensions({a: NaN}, DiscArea);
    expect(result).toBeFalsy();
    
    result = validateDimensions({a: -56}, RectangleArea);
    expect(result).toBeFalsy();

    result = validateDimensions({a: 956.1231, c: 154, v: -.23}, TrapezoidArea);
    expect(result).toBeFalsy();
});