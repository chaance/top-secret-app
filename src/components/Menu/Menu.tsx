import React from 'react';
import cx from 'classnames';

import SRT from '../ScreenReaderText';
import { useFirebase } from '../../hooks';
import { isValidUrl } from '../../lib/utils';
import {
  StyledMenu,
  StyledSubmenu,
  StyledMenuItem,
  StyledMenuAnchor,
  StyledMenuButton,
  StyledMenuLink,
} from './Menu.styles';
import {
  MenuItemData,
  MenuItemProps,
  MenuLinkProps,
  MenuProps,
} from './Menu.d';

const noop = () => {};

const MenuLink: React.FC<MenuLinkProps> = ({
  href,
  target,
  label,
  onClick,
  getOnClick,
  rel,
  redirect,
  ...props
}) => {
  const firebase = useFirebase();
  if (onClick || getOnClick) {
    const handleClick =
      onClick || (getOnClick && getOnClick(firebase, redirect)) || noop;
    return (
      <StyledMenuButton className="Menu__link" onClick={handleClick} {...props}>
        {label}
      </StyledMenuButton>
    );
  }
  if (href) {
    const hrefIsUrl = isValidUrl(href);
    return hrefIsUrl ? (
      <StyledMenuAnchor
        className="Menu__link"
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        {...props}
      >
        {label}
      </StyledMenuAnchor>
    ) : (
      <StyledMenuLink
        to={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        getProps={({ isCurrent }) => {
          return {
            className: cx('Menu__link', { 'Menu__link--active': isCurrent }),
          };
        }}
        {...props}
      >
        {label}
      </StyledMenuLink>
    );
  }
  return <span className="Menu__link">{label}</span>;
};

const MenuItem: React.FC<MenuItemProps> = ({
  className,
  children,
  hasChildren = false,
  ...props
}) => {
  return (
    <StyledMenuItem
      className={cx('Menu__item', className, {
        'Menu__item--has-children': hasChildren,
      })}
      {...props}
    >
      {children}
    </StyledMenuItem>
  );
};

const Menu: React.FC<MenuProps> = ({ className, items }) => {
  const renderSubMenu = (subItems: MenuItemData[]) => {
    if (subItems && subItems.length) {
      return (
        <StyledSubmenu className="Menu__submenu">
          {renderMenuItems(subItems)}
        </StyledSubmenu>
      );
    }
  };

  const renderMenuItems = (items: MenuItemData[]) =>
    items.map(item => {
      const {
        id,
        href,
        options = {},
        children = [] as any,
        onClick,
        getOnClick,
        redirect,
      } = item;
      const { target, className, hideLabel } = options;

      return (
        <MenuItem
          className={className}
          key={id}
          hasChildren={!!(children && children.length)}
        >
          <MenuLink
            onClick={onClick}
            getOnClick={getOnClick}
            redirect={redirect}
            href={href}
            label={hideLabel ? <SRT>{item.label}</SRT> : item.label}
            target={target}
          />
          {renderSubMenu(children)}
        </MenuItem>
      );
    });
  return (
    <StyledMenu className={cx('Menu', className)}>
      {renderMenuItems(items)}
    </StyledMenu>
  );
};

export default Menu;
