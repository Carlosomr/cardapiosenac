import React from 'react';
import styled from 'styled-components';
import { StyledButton } from './styles';

// Em button.jsx
const Button = ({ children, onClick, className, type }) => {
  return (
    <StyledButton 
      onClick={onClick} 
      className={`${className || ''} ${type}-button`}
    >
      {children}
    </StyledButton>
  );
};

export default Button;