import { withTheme } from 'emotion-theming';
import withLinkWrapper, { WrappedLinkProps } from '../withLinkWrapper';
import {
  StyledButton,
  StyledPrimaryButton,
  StyledSecondaryButton,
} from './Button.style';

export const Button = (props: WrappedLinkProps) =>
  withLinkWrapper(withTheme(StyledButton), props);

export const PrimaryButton = (props: WrappedLinkProps) =>
  withLinkWrapper(withTheme(StyledPrimaryButton), props);

export const SecondaryButton = (props: WrappedLinkProps) =>
  withLinkWrapper(withTheme(StyledSecondaryButton), props);

export default Button;
