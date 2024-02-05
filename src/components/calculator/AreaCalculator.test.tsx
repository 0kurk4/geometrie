import { render, screen } from '@testing-library/react';
import AreaCalculator from './AreaCalculator';
import SquareArea from '../../shapes/SquareArea';
import TriangleArea from '../../shapes/TriangleArea';
import TrapezoidArea from '../../shapes/TrapezoidArea';

test('should render proper content', () => {
    const { rerender } = render(<AreaCalculator shape={SquareArea} />);

    // AreaDescription image
    expect(screen.getByAltText(SquareArea.name)).toBeInTheDocument();

    // AreaParamsInput dimensions
    SquareArea.dimensions.map(
        dimension => expect(screen.getByLabelText(`${dimension}:`)).toBeInTheDocument()
    );

    rerender(<AreaCalculator shape={TriangleArea} />);

    expect(screen.getByAltText(TriangleArea.name)).toBeInTheDocument();
    TriangleArea.dimensions.map(
        dimension => expect(screen.getByLabelText(`${dimension}:`)).toBeInTheDocument()
    );

    rerender(<AreaCalculator shape={TrapezoidArea} />);

    expect(screen.getByAltText(TrapezoidArea.name)).toBeInTheDocument();
    TrapezoidArea.dimensions.map(
        dimension => expect(screen.getByLabelText(`${dimension}:`)).toBeInTheDocument()
    );
});