import wrapLinkComponent from '../../lib/wrapLinkComponent';
import {
  StyledButton,
  StyledPrimaryButton,
  StyledSecondaryButton,
} from './Button.style';
import { WrappedLinkProps } from '../../lib/wrapLinkComponent';
import { withTheme } from 'emotion-theming';

export const Button = (props: WrappedLinkProps) =>
  wrapLinkComponent(withTheme(StyledButton), props);

export const PrimaryButton = (props: WrappedLinkProps) =>
  wrapLinkComponent(withTheme(StyledPrimaryButton), props);

export const SecondaryButton = (props: WrappedLinkProps) =>
  wrapLinkComponent(withTheme(StyledSecondaryButton), props);

export default Button;
