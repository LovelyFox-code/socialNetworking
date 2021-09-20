import React from 'react';
import style from './WallPosts.module.css'

function WallPosts() {
  return (

    <div className={style.main}>
      <ul className={style.items}>
          <li>something here</li>
          <li>something there</li>
          <li>and no one else matter</li>
          <li>too interesting</li>
      </ul>
    </div>

  );
}

export default WallPosts;

