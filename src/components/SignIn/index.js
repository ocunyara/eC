import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

import AuthWrapper from './../AuthWrapper';
import FormInput from './../forms/FormInput';
import Button from './../forms/Button';

const SignIn = () => {

  return (
    <AuthWrapper>
      <div className="formWrap">
        <form>

          <FormInput
            type="email"
            name="email"
            value=''
            placeholder="Email"
          />

          <FormInput
            type="password"
            name="password"
            value=''
            placeholder="Password"
          />

          <Button type="submit">
            LogIn
          </Button>

          <div className="socialSignin">
            <div className="row">
              <Button>
                Sign in with Google
              </Button>
            </div>
          </div>

          <div className="links">
            <Link to="/registration">
              Register
            </Link>
            {` | `}
            <Link to="/recovery">
              Reset Password
            </Link>
          </div>

        </form>
      </div>
    </AuthWrapper>
  );
}

export default SignIn;
