import { fireEvent, render, screen } from '@testing-library/react';
import ShapeSelectorForm from "./ShapeSelectorForm";
import { getShapeSet } from '../../data/ShapeSet';


const shapeSet = getShapeSet();

test('should render submit button', () => {
    render(<ShapeSelectorForm shapes={shapeSet} handler={() => null} />);

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument();
});

test('should submit value of form', () => {
    const handleSubmit = jest.fn(value => value);
    render(<ShapeSelectorForm shapes={shapeSet} handler={handleSubmit} />);

    const buttonElement = screen.getByRole('button');

    fireEvent.click(buttonElement);
    expect(handleSubmit).toBeCalled();
    expect(handleSubmit).toHaveReturnedWith(-1);

    const selectorElement = screen.getByRole('combobox');

    let selectedValue = Math.round(Math.random() * (shapeSet.length - 1));  
    fireEvent.change(selectorElement, { target: { value: selectedValue }});
    fireEvent.click(buttonElement);
    expect(handleSubmit).toHaveReturnedWith(selectedValue);

    selectedValue = Math.round(Math.random() * (shapeSet.length - 1));  
    fireEvent.change(selectorElement, { target: { value: selectedValue }});
    fireEvent.click(buttonElement);
    expect(handleSubmit).toHaveReturnedWith(selectedValue);

    expect(handleSubmit).toBeCalledTimes(3);
});
