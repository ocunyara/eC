import React from 'react';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Directory } from './../../components/Directory';

import './styles.scss';

export const HomePage = props => {
  return (
    <section className="homepage">
      <Directory />
    </section>
  );
};