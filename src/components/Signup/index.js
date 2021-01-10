import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

import AuthWrapper from './../AuthWrapper';
import FormInput from './../forms/FormInput';
import Button from './../forms/Button';

export const Signup = () => {

  return (
    <AuthWrapper>
      <div className=''>
        <form onSubmit="">

          <FormInput
            type="text"
            name="displayName"
            value=""
            placeholder="Full name"
          />

          <FormInput
            type="email"
            name="email"
            value=""
            placeholder="Email"
          />

          <FormInput
            type="password"
            name="password"
            value=""
            placeholder="Password"
          />

          <FormInput
            type="password"
            name="confirmPassword"
            value=""
            placeholder="Confirm Password"
          />

          <Button type="submit">
            Register
          </Button>
        </form>

        <div className="links">
          <Link to="/login">
            LogIn
          </Link>
          {` | `}
          <Link to="/registration">
            Reset Password
            </Link>
        </div>
      </div>
    </AuthWrapper>
  );
}
