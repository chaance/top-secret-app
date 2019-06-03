import React from 'react';
import styled from '@emotion/styled';

const Span = styled.span`
  position: absolute !important;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  word-wrap: normal !important;
`;

const ScreenReaderText: React.FC = props => (
  <Span className="ScreenReaderText">{props.children}</Span>
);

export default ScreenReaderText;
