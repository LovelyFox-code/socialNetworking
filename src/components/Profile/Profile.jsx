import React from 'react';
import style from './Profile.module.css'
import Posts from './Posts/Posts';
import Bio from './Bio/Bio';

function Profile(props) {
 
  return (
    <div className={style.main}>
      < Bio />
      < Posts postData={props.state.postData}
      addPost={props.addPost}/>
    </div>
  );
}

export default Profile;

