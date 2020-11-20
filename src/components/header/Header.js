import React from 'react';
import { Navbar } from './Navbar';

export const Header = ({ isAuth }) => {
  return (
    <div className="headerContainer">
      <div className="leftHeader">
        <center>
          <div>
            <img src={require('../../static/logo192.png')} className="logo" />
          </div>
          <div>
            <h1
              style={{
                fontFamily: 'monospace',
                color: '#e2dcdc',
                fontFamily: 'cursive',
                color: '#e2dcdc',
                marginTop: 0,
              }}
            >
              The School Of Mathmatis
            </h1>
          </div>
        </center>
      </div>
      <div className="rightHeader">
        <Navbar isAuth={isAuth} />
      </div>
    </div>
  );
};
