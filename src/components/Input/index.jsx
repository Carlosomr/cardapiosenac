import React from 'react';
import { StyledInput } from './styles';

const Input = ({ type, maxLength, placeholder, value, onChange }) => {
  const handleChange = (e) => {
    let inputValue = e.target.value;

    if (type === 'cod') {
      inputValue = inputValue.replace(/\D/g, '');
    }
    onChange(inputValue);
  }
  return <StyledInput type={type} maxLength={maxLength} placeholder={placeholder} value={value} onChange={handleChange} />;
};

export default Input;
