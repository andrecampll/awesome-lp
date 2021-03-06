import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../../utils/tests/helpers';
import mockItems from '../../../components/CartList/mock';

import CartList from '../../../components/CartList';

describe('CartList', () => {
  it('should be able to render', () => {
    const { container } = renderWithTheme(
      <CartList items={mockItems} total="R$ 330,00" />,
    );

    expect(screen.getAllByRole('heading')).toHaveLength(2);
    expect(screen.getByText('R$ 330,00')).toHaveStyle({ color: '#F231A5' });

    expect(container.firstChild).toMatchSnapshot();
  });
});
