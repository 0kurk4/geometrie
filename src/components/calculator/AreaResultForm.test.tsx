import { fireEvent, render, screen } from '@testing-library/react';
import AreaResultForm from "./AreaResultForm";

test('should render submit button', () => {
    render(<AreaResultForm area={0} handler={() => null} />);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
});

test('should call handler for submit button', () => {
    const handleSubmit = jest.fn();
    render(<AreaResultForm area={0} handler={handleSubmit} />);

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);

    expect(handleSubmit).toBeCalled();
});

test('should display area value', () => {
    const { rerender } = render(<AreaResultForm area={102} handler={() => null} />);

    expect(screen.getByDisplayValue('102')).toBeInTheDocument();

    rerender(<AreaResultForm area={604.48612} handler={() => null} />);

    expect(screen.getByDisplayValue('604.48612')).toBeInTheDocument();

    rerender(<AreaResultForm area={undefined} handler={() => null} />);

    expect(screen.getByDisplayValue('')).toBeInTheDocument();
    
    rerender(<AreaResultForm area={NaN} handler={() => null} />);

    expect(screen.getByDisplayValue('')).toBeInTheDocument();
});
