import Shape from "../types/Shape";
import ShapeDimensionValues from "../types/ShapeDimensionValues";
import errorLogger from "./errorLoggerUtil";

const validateForMissingKeys = (values: ShapeDimensionValues, shape: Shape): Array<Error> =>
    shape.dimensions.filter(key => !Object.hasOwn(values, key as PropertyKey))
        .map(key => new Error(`Error validating ${shape.name}: ${key} is missing.`));

const validateForPositiveValues = (values: ShapeDimensionValues): Array<Error> =>
    Object.entries(values).filter((key) => key[1] < 0)
        .map(key => new Error(`Error validating values. ${key[0]}: ${key[1]} is negative number.`));

const validateDimensions = (values: ShapeDimensionValues, shape: Shape): boolean => {
    const missingKeysErrors = validateForMissingKeys(values, shape);
    if (missingKeysErrors.length > 0) {
        errorLogger(missingKeysErrors);
        return false;
    }

    const positiveValuesErrors = validateForPositiveValues(values);
    if (positiveValuesErrors.length > 0) {
        errorLogger(positiveValuesErrors);
        return false;
    }

    return true;

}

export { validateDimensions, validateForPositiveValues };