import * as React from 'react';
import { LinkProps, Omit } from '@types/reach__router';
import Firebase from '../../services/firebase';

export interface MenuItemData {
  id: string | number;
  href?: string;
  label: string;
  options?: {
    target?: string;
    className?: string;
    hideLabel?: boolean;
  };
  children?: MenuItem[];
  redirect?: string;
  onClick?(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  getOnClick?(firebase: Firebase, redirect: redirect): onClick;
}

export class MenuItem extends React.Component<
  MenuItemProps & React.HTMLProps<HTMLLIElement>
> {}

export class MenuLink extends React.Component<MenuLinkProps & LinkProps> {}

export interface MenuItemProps {
  className?: string;
  children: React.Node;
  hasChildren: boolean;
}

export type MLP = Omit<LinkProps, 'to'>;

export interface MenuLinkProps extends MLP {
  href?: string;
  label: string | JSX.Element;
  redirect?: string;
  onClick?(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  getOnClick?(firebase: Firebase, redirect: redirect): onClick;
}

export interface MenuProps {
  className?: string;
  items: MenuItemData[];
}
