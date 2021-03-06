import { screen } from '@testing-library/react';
import ProfileMenu from '../../../components/ProfileMenu';
import { renderWithTheme } from '../../../utils/tests/helpers';

describe('ProfileMenu', () => {
  it('should be able to render', () => {
    const { container } = renderWithTheme(<ProfileMenu />);

    expect(
      screen.getByRole('link', { name: /my profile/i }),
    ).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /my cards/i })).toBeInTheDocument();

    expect(
      screen.getByRole('link', { name: /my orders/i }),
    ).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should be able to render the menu with an active link defined', () => {
    renderWithTheme(<ProfileMenu activeLink="/profile/cards" />);

    expect(screen.getByRole('link', { name: /my cards/i })).toHaveStyle({
      background: '#F231A5',
      color: '#FAFAFA',
    });
  });
});
