import React from 'react';
import logoImage from '../assets/logo/mecca-logo.png';

function Header() {
  return (
    <header class="header">
        <img src={logoImage} alt="mecca logo" class="logo" />
    </header>
  );
}

export default Header;