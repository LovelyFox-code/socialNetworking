import React from 'react';
import style from './Posts.module.css'
import Post from './Post/Post';

function Posts(props) {
    const post = props.postData.map(el => < Post message={el.message} />);

    const newPostELement = React.createRef();

    const addPost = () => {
        let text = newPostELement.current.value;
        props.addPost(text);
        newPostELement.current.value ='';
    }
    return (
        <div>
            <h1>My posts</h1>
            <div >
                <textarea ref={newPostELement} type="text" className={style.form_control} />
                <button onClick={ addPost } className={style.btn} type="submit">Add post</button>
            </div>
            {post}
        </div>

    );
}

export default Posts;

