import React from 'react';
import style from './SideNav.module.css'
import Bio from './Bio/Bio';


function SideNav() {
  return (

    <div className={style.nav}>
      < Bio />
      <ul className={style.items}>
        <li className={style.item}>Profile</li>
        <li className={style.item}>Messages
        <span className={style.right}>14</span>
        </li>
        <li className={style.item}>News</li>
        <li className={style.item}>Music</li>
        <li className={style.item}>Settings</li>
      </ul>
    </div>

  );
}

export default SideNav;

