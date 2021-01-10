import React from 'react';

import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

export const MainLayout = ({props, children}) => {
  return (
    <>
      <Header {...props} />
        <div className="main">
          {children}
        </div>
      <Footer />
    </>
  );
};

