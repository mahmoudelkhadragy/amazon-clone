import React from 'react'
import './Header.css';
import amazon_logo from './images/amazon_logo.png';

function Header() {
  return (
    <div className="header">
      <img src={amazon_logo} alt="amazon logo"/>
    </div>
  )
}

export default Header;
