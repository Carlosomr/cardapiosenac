import React from 'react';
import { StyledInput } from './styles';

const Input = ({ type, placeholder, value, onChange }) => {
  return <StyledInput type={type} placeholder={placeholder} value={value} onChange={onChange} />;
};

export default Input;
