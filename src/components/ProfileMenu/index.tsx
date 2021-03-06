import NextLink from 'next/link';
import {
  AccountCircle,
  CreditCard,
  ExitToApp,
  FormatListBulleted,
} from '@styled-icons/material-outlined';

import { Nav, Link } from './styles';

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders' | string;
};

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => (
  <Nav>
    <NextLink href="/profile/me" passHref>
      <Link isActive={activeLink === '/profile/me'} title="My profile">
        <AccountCircle size={24} />
        <span>My profile</span>
      </Link>
    </NextLink>

    <NextLink href="/profile/cards" passHref>
      <Link isActive={activeLink === '/profile/cards'} title="My cards">
        <CreditCard size={24} />
        <span>My cards</span>
      </Link>
    </NextLink>

    <NextLink href="/profile/orders" passHref>
      <Link isActive={activeLink === '/profile/orders'} title="My orders">
        <FormatListBulleted size={24} />
        <span>My orders</span>
      </Link>
    </NextLink>

    <NextLink href="/logout" passHref>
      <Link>
        <ExitToApp size={24} />
        <span>Sign out</span>
      </Link>
    </NextLink>
  </Nav>
);

export default ProfileMenu;
