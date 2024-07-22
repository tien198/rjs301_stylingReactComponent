import { useState } from 'react';
import { styled } from "styled-components";
import Button from "./Button";
import Input from "./Input";

const ControlsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlsDiv>
        {/* 
          In 2 <p> tags below:
          - Dynamic style in Style Component
          - Dynamic className
        */}
        {/* <p>
          <Label $invalid={emailNotValid}>Email</Label>
          <Input
            type="email"
            $invalid={emailNotValid}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p> */}
        {/* <p>
          <Label className={`${emailNotValid ? 'invalid' : ''}`}>Password</Label>
          <Input
            type="password"
            className={passwordNotValid ? 'invalid' : undefined}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p> */}

        <Input type='text' label='Email' invalid={emailNotValid}
          onChange={(e) => {
            handleInputChange('email', e.target.value);
          }} />
        <Input type='password' label={'Password'} invalid={passwordNotValid}
          onChange={(e) => {
            handleInputChange('password', e.target.value);
          }} />
      </ControlsDiv>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
