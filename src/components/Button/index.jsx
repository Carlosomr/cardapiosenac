import React from 'react';
import styled from 'styled-components';
import { StyledButton } from './styles';

const Button = ({ children, onClick, className }) => {
  return (
    <StyledButton onClick={onClick} className={className}>
      {children}
    </StyledButton>
  );
};

export default Button;