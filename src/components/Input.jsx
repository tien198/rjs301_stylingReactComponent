import { styled } from "styled-components";

function Input({ label, invalid, ...props }) {
  let labelClass = '', inputClass = '';
  if (invalid) {
    labelClass = ' text-red-400 ';
    inputClass = ' bg-red-100 text-red-400';
  } else {
    labelClass = ' text-stone-300';
    inputClass = ' bg-stone-300 text-gray-700';
  }
  return <p>
    <label className={`block mb-2 text-xs font-bold tracking-wide uppercase ${labelClass}`}>{label}</label>
    <input className={`w-full px-3 py-2 leading-tight border rounded shadow ${inputClass}`} {...props} />
  </p>
}

export default Input;


/**
* @param {boolean} props.$invalid - Indicate whether input value is valid
*/
/*
const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ $invalid }) => $invalid ? '#f87171;' : '#6b7280'};`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  background-color:${({ $invalid }) => $invalid ? '#fed2d2' : '#d1d5db'};
  color: ${({ $invalid }) => $invalid ? '#ef4444' : '#374151'};
  border: 1px solid ${({ $invalid }) => $invalid ? '#f73f3f' : 'transparent'};
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);`;

import React from 'react';

function CusInput({ label, invalid, ...props }) {
    return (
        <p>
            <Label $invalid={invalid}>{label}</Label>
            <Input $invalid={invalid} {...props} />
        </p>
    );
}

export default CusInput;
*/