import { ThemeProps } from '../../shared/theme';

export interface WrappedLinkProps {
  target?: string;
  href?: string;
  to?: string;
  children: React.ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  rel?: string;
  buttonSize?: string;
  theme: ThemeProps;
}

export { default } from './withLinkWrapper';
