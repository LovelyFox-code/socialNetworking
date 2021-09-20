import React from 'react';
import style from './Header.module.css'

function Header() {
  return (
    <div>
        <nav className = {style.navbar}>
          <div >
            <a className = {style.logo} href="#">Diary</a>
          </div>
        </nav>
      </div>
  );
}

export default Header;
