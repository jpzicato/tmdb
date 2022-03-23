import React from 'react';
import useInput from '../../hooks/useInput';
import useForm from '../../hooks/useForm';
import { StyledContainer } from './style';

function AuthForm({ type }) {
  const userName = useInput('name');
  const email = useInput('email');
  const password = useInput('password');

  const handleSubmit = useForm(userName, email, password, type);

  return (
    <StyledContainer>
      <form onSubmit={handleSubmit} className='form'>
        {type === 'register' && (
          <>
            <input
              type='text'
              placeholder='Name'
              name={userName.name}
              value={userName.value}
              onChange={userName.handleChange}
              className='form__input'
              required
            />
            <br />
          </>
        )}
        <input
          type='email'
          placeholder='Email'
          name={email.name}
          value={email.value}
          onChange={email.handleChange}
          className='form__input'
          required
        />
        <br />
        <input
          type='password'
          placeholder='Password'
          name={password.name}
          value={password.value}
          onChange={password.handleChange}
          className='form__input'
          required
        />
        <br />
        <button type='submit' className='form_button'>
          Submit
        </button>
      </form>
    </StyledContainer>
  );
}

export default AuthForm;
