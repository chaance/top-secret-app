import styled from '@emotion/styled';
import { WrappedLinkProps } from '../../lib/wrapLinkComponent';
import { ThemeProps } from '../../shared/theme';

// shortcut to our themed button colors
const bx = (theme: ThemeProps) => theme[theme.mode].button;

export const StyledButton = styled.button<WrappedLinkProps>`
  display: inline-block;
  position: relative;
  transition: all 0.25s ease-in-out;
  background: ${({ theme }) => bx(theme).default.background};
  font-size: ${({ buttonSize }) =>
    buttonSize === 'small' ? '0.8rem' : '1rem'};
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => bx(theme).default.text};
  cursor: pointer;
  border: 0;
  border-radius: 0;
  padding: ${props =>
    props.buttonSize === 'small' ? '0.4rem 0.8rem' : '0.5rem 0.9rem'};
  appearance: none;
  opacity: ${({ disabled }) => (disabled ? '0.6' : '1')};
  line-height: 1.2;

  &:hover,
  &:focus {
    background: ${({ theme }) => bx(theme).default.backgroundHover};
  }
`;

export const StyledPrimaryButton = styled(StyledButton)`
  background: ${({ theme }) => bx(theme).primary.background};
  color: ${({ theme }) => bx(theme).primary.text};

  &:hover,
  &:focus {
    background: ${({ theme }) => bx(theme).primary.backgroundHover};
  }
`;

export const StyledSecondaryButton = styled(StyledButton)`
  background: ${({ theme }) => bx(theme).secondary.background};
  color: ${({ theme }) => bx(theme).secondary.text};

  &:hover,
  &:focus {
    background: ${({ theme }) => bx(theme).secondary.backgroundHover};
  }
`;
