import React from 'react';
import style from './Profile.module.css'
import Posts from './Post/Posts';
import bg from '../../img/bg.png'
import WallPosts from './WallPosts/WallPosts';



function Profile() {
  return (

    <div className={style.main}>
      <div >
      <img src={bg} alt="background" />
      </div>
      < Posts />
      < WallPosts />
    </div>

  );
}

export default Profile;

