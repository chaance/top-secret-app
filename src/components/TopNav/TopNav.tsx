import React from 'react';
import { navigate } from '@reach/router';
import Menu from '../Menu';
import * as ROUTES from '../../routes';
import { useCurrentUser } from '../../hooks';
import { MenuItemData } from '../Menu/Menu.d';

const MENU_ITEMS: MenuItemData[] = [
  {
    id: 1,
    label: 'Sign In',
    href: ROUTES.SIGN_IN,
  },
  {
    id: 2,
    label: 'Sign Up',
    href: ROUTES.SIGN_UP,
  },
];

const MENU_ITEMS_LOGGED_IN: MenuItemData[] = [
  {
    id: 1,
    label: 'Home',
    href: ROUTES.HOME,
  },
  {
    id: 2,
    label: 'My Account',
    href: ROUTES.ACCOUNT,
  },
  {
    id: 3,
    label: 'Admin',
    href: ROUTES.ADMIN,
  },
  {
    id: 4,
    label: 'Sign Out',
    redirect: ROUTES.LANDING,
    getOnClick: (firebase, redirectTo) => {
      return () => {
        firebase
          .signOut()
          .then(() => {
            navigate(redirectTo);
          })
          .catch(console.error);
      };
    },
  },
];

const TopNav: React.FC = () => {
  const authUser = useCurrentUser();
  return (
    <nav className="TopNav">
      <Menu items={authUser ? MENU_ITEMS_LOGGED_IN : MENU_ITEMS} />
    </nav>
  );
};

export default TopNav;
