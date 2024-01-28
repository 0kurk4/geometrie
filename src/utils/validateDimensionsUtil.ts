import Shape from "../types/Shape";
import ShapeDimensionValues from "../types/ShapeDimensionValues";
import errorLogger from "./errorLoggerUtil";

const validateForMissingKeys = (values: ShapeDimensionValues, shape: Shape): Array<Error> =>
    shape.dimensions.filter(key => !Object.hasOwn(values, key as PropertyKey))
        .map(key => new Error(`Error validating ${shape.name}: ${key} is missing.`));

const validateDimensions = (values: ShapeDimensionValues, shape: Shape): boolean => {
    const missingKeysErrors = validateForMissingKeys(values, shape);
    if (missingKeysErrors.length > 0) {
        errorLogger(missingKeysErrors);
        return false;
    } else {
        return true;
    }
}

export default validateDimensions;