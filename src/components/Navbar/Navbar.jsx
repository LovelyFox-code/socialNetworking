import React from 'react';
import style from './Navbar.module.css'
import { NavLink } from 'react-router-dom';
import avatar from '../../img/flower.png'



function Navbar(props) {
  const friends = props.state.friends.map(el => <div className={style.friendsNav}><img src={avatar} alt="avatar" /><p>{el.name}</p></div>)
    
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
        <div className={style.nav_item} ><NavLink to="/friends"  activeClassName={style.nav_active}>Friends<div className={style.friendsBlock}>{friends}</div></NavLink></div>
        
      </nav>
    </div>

  );
}

export default Navbar;

