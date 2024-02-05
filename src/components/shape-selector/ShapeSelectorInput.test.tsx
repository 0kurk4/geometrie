import React, { ChangeEvent } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ShapeSelectorInput from './ShapeSelectorInput';
import { getShapeSet } from '../../data/ShapeSet';


const shapeSet = getShapeSet();

test('should correctly set default option', () => {
    render(<ShapeSelectorInput shapes={shapeSet} shapeId={-1} handler={() => null} />);

    const optionElement = screen.getByRole('option', { name: 'Vyberte tvar:' });
    expect(optionElement).toBeInstanceOf(HTMLOptionElement);
    expect((optionElement as HTMLOptionElement).selected).toBeTruthy();
});

test('should display the correct number of options', () => {
    render(<ShapeSelectorInput shapes={shapeSet} shapeId={-1} handler={() => null} />);

    expect(screen.getAllByRole('option').length).toBe(shapeSet.length + 1);
});

test('should fire handler with selected value', () => {
    const handleSelect = jest.fn(e => e.target.value);
    render(<ShapeSelectorInput shapes={shapeSet} shapeId={-1} handler={handleSelect} />);
    
    const selectorElement = screen.getByRole('combobox');

    let selectedValue = Math.round(Math.random() * (shapeSet.length - 1));  
    fireEvent.change(selectorElement, { target: { value: selectedValue }});    
    expect(handleSelect).toHaveReturnedWith(String(selectedValue));
    
    selectedValue = Math.round(Math.random() * (shapeSet.length - 1));  
    fireEvent.change(selectorElement, { target: { value: selectedValue }});    
    expect(handleSelect).toHaveReturnedWith(String(selectedValue));

    selectedValue = Math.round(Math.random() * (shapeSet.length - 1));  
    fireEvent.change(selectorElement, { target: { value: selectedValue }});    
    expect(handleSelect).toHaveReturnedWith(String(selectedValue));

    expect(handleSelect).toBeCalledTimes(3);
});
