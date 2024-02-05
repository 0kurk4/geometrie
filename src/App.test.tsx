import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { getShapeFromSet, getShapeSet } from './data/ShapeSet';

test('should render default state', () => {
    render(<App />);

    // render header
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();

    // render <option> for all shapes
    expect(screen.getAllByRole('option').length).toBe(getShapeSet().length + 1);

    // check if default <option> is selected
    const optionElement = screen.getByRole('option', { name: 'Vyberte tvar:' });
    expect(optionElement).toBeInTheDocument();
    expect(optionElement).toBeInstanceOf(HTMLOptionElement);
    expect((optionElement as HTMLOptionElement).selected).toBeTruthy();

    // render prompt text
    expect(screen.getByText('Zvolte prosím geometrický tvar')).toBeInTheDocument();

    // render result <input> (also check if no other <input> element appear in default state)
    const resultInputElement = screen.getByRole('textbox');
    expect(resultInputElement).toBeInTheDocument();
    expect(resultInputElement).toBeInstanceOf(HTMLInputElement);
    expect((resultInputElement as HTMLInputElement).disabled).toBeTruthy();

    // render buttons
    const buttonElements = screen.getAllByRole('button');
    expect(buttonElements.length).toBe(2);
});
