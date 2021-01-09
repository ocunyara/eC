import React from 'react';
import { Link  } from 'react-router-dom';

import './styles.scss';

import Logo from './../../assets/logo.png';

export const Header = () => {

  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="SimpleTut LOGO" />
          </Link>
        </div>
      </div>
    </header>
  );
};