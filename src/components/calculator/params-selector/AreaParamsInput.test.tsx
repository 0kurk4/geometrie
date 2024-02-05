import { fireEvent, render, screen } from '@testing-library/react';
import AreaParamsInput from './AreaParamsInput';
import SquareArea from '../../../shapes/SquareArea';
import RectangleArea from '../../../shapes/RectangleArea';

test('should render correct dimension label', () => {
    let dimensionName = SquareArea.dimensions[0];
    const { rerender } = render(<AreaParamsInput name={dimensionName} handler={() => null} />);

    expect(screen.getByLabelText(`${dimensionName}:`)).toBeInTheDocument();

    dimensionName = RectangleArea.dimensions[0];
    rerender(<AreaParamsInput name={dimensionName} handler={() => null} />);

    expect(screen.getByLabelText(`${dimensionName}:`)).toBeInTheDocument();
});

test('should call handler with input value', () => {
    const handleChange = jest.fn(x => x);
    let dimensionName = RectangleArea.dimensions[0];
    const { rerender } = render(<AreaParamsInput name={dimensionName} handler={handleChange} />);

    let inputElement = screen.getByLabelText(`${dimensionName}:`);
    fireEvent.change(inputElement, {target: {value: 33}});
    expect(handleChange).toHaveReturnedWith({a: 33});

    dimensionName = RectangleArea.dimensions[1];
    rerender(<AreaParamsInput name={dimensionName} handler={handleChange} />);


    inputElement = screen.getByLabelText(`${dimensionName}:`);
    fireEvent.change(inputElement, {target: {value: 128}});
    expect(handleChange).toHaveReturnedWith({b: 128});

    expect(handleChange).toBeCalledTimes(2);
});