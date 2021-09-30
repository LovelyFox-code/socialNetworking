import React, {useState} from 'react';
import style from './Post.module.css';
import avatar from '../../../../img/flower.png';
import { FcLikePlaceholder } from 'react-icons/fc';

function Post(props) {
  const [count, setCount] = useState(0);
  
  return (
      <div className={style.item}>
          <img src={avatar} alt="avatar" />
          <p>{props.message}</p>
          <div><span onClick={() => setCount(count + 1)}>< FcLikePlaceholder /></span> {count}</div>
      </div>
  );
}

export default Post;

