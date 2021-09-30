import React from 'react';
import style from './Navbar.module.css'
import { NavLink } from 'react-router-dom';


function Navbar() {
  return (

    <div className={style.nav}>
      <nav className={style.nav_items}>
        <div className={style.nav_item} ><NavLink to="/profile" activeClassName={style.nav_active}>Profile</NavLink></div>
        <div className={style.nav_item} ><NavLink to="/dialogs" activeClassName={style.nav_active}>Messages</NavLink>
        <span className={style.right}>14</span>
        </div>
        <div className={style.nav_item} ><NavLink to="/news" activeClassName={style.nav_active}>News</NavLink></div>
        <div className={style.nav_item} ><NavLink to="/music" activeClassName={style.nav_active}>Music</NavLink></div>
        <div className={style.nav_item} ><NavLink to="/settings" activeClassName={style.nav_active}>Settings</NavLink></div>
      </nav>
    </div>

  );
}

export default Navbar;

