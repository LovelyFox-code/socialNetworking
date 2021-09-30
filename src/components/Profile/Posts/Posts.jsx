import React from 'react';
import style from './Posts.module.css'
import Post from './Post/Post';

function Posts(props) {

  
    const post = props.postData.map(el => < Post message={el.message} />);
    return (
        <div>
            <h1>My posts</h1>
            <div >
                <textarea type="text" className={style.form_control} />
                <button className={style.btn} type="submit">Add post</button>
            </div>
            {post}
        </div>

    );
}

export default Posts;

