import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../../utils/tests/helpers';
import GameInfo from '../../../components/GameInfo';

const props = {
  title: 'My Game',
  description: 'Game description',
  price: '210.00',
};

describe('GameInfo', () => {
  it('should be able to render game information', () => {
    renderWithTheme(<GameInfo {...props} />);

    expect(
      screen.getByRole('heading', {
        name: /my game/i,
      }),
    ).toBeInTheDocument();

    expect(screen.getByText(/game description/i)).toBeInTheDocument();
    expect(screen.getByText(props.price)).toBeInTheDocument();
  });

  it('should be able to render', () => {
    renderWithTheme(<GameInfo {...props} />);

    expect(
      screen.getByRole('button', {
        name: /add to cart/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', {
        name: /wishlist/i,
      }),
    ).toBeInTheDocument();
  });
});
