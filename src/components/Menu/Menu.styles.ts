import styled from '@emotion/styled';
import { Link } from '@reach/router';
// import { ThemeProps } from '../../shared/theme';

export const StyledMenu = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const StyledSubmenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StyledMenuItem = styled.li`
  margin: 0 10px;
`;

export const StyledMenuLink = styled(Link)`
  color: ${(props: any) => (props.isCurrent ? 'red' : 'blue')};
`;

export const StyledMenuButton = styled.button`
  color: blue;
`;

export const StyledMenuAnchor = styled.a`
  color: blue;
`;
