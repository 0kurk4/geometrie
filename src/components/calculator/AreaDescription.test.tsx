import { render, screen } from '@testing-library/react';
import AreaDescription from './AreaDescription';
import SquareArea from '../../shapes/SquareArea';
import RectangleArea from '../../shapes/RectangleArea';

test('should render correct image', () => {
    const { rerender } = render(<AreaDescription shape={SquareArea} />);

    expect(screen.getByAltText(SquareArea.name)).toBeInTheDocument();

    rerender(<AreaDescription shape={RectangleArea} />);

    expect(screen.getByAltText(RectangleArea.name)).toBeInTheDocument();
});

test('should render prompt text', () => {
    render(<AreaDescription shape={null} />);

    expect(screen.getByText('Zvolte prosím geometrický tvar')).toBeInTheDocument();
});