import { fireEvent, render, screen } from '@testing-library/react';
import AreaParamsForm from "./AreaParamsForm";
import SquareArea from '../../../shapes/SquareArea';
import TriangleArea from '../../../shapes/TriangleArea';
import TrapezoidArea from '../../../shapes/TrapezoidArea';

test('should correctly render inputs', () => {
    const { rerender } = render(<AreaParamsForm shape={SquareArea} handler={() => null}/>);

    expect(screen.getAllByRole('spinbutton').length).toBe(SquareArea.dimensions.length);

    rerender(<AreaParamsForm shape={TriangleArea} handler={() => null}/>);

    expect(screen.getAllByRole('spinbutton').length).toBe(TriangleArea.dimensions.length);
});

test('should return value from input', () => {
    const handleChange = jest.fn(x => x);
    render(<AreaParamsForm shape={TrapezoidArea} handler={handleChange}/>);

    const inputElements = screen.getAllByRole('spinbutton');

    fireEvent.change(inputElements[0], {target: {value: '23.5'}});
    expect(handleChange).toHaveLastReturnedWith({a: 23.5});

    fireEvent.change(inputElements[1], {target: {value: '012'}});
    expect(handleChange).toHaveLastReturnedWith({c: 12});

    fireEvent.change(inputElements[1], {target: {value: 'abc'}});
    expect(handleChange).toHaveLastReturnedWith({c: 0});

    expect(handleChange).toBeCalledTimes(3);
});