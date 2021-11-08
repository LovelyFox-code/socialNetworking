import React from 'react';
import style from './Posts.module.css'
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profile-reducer'

const Posts = (props) => {

    const post = props.postData.map(el => < Post message={el.message} />);

    const newPostELement = React.createRef();

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    const onPostChange = () => {
        let text = newPostELement.current.value;
        props.dispatch(updateNewPostActionCreator(text))
        // props.updateNewPostText(text);
        // props.newPostELement.current.value ='';
    }
    return (
        <div>
            <h1>My posts</h1>
            <div >
                <textarea onChange={onPostChange} ref={newPostELement} className={style.form_control} value={props.newPostText} />
                <button onClick={addPost} className={style.btn} type="submit">Add post</button>
            </div>
            {post}
        </div>

    );
}

export default Posts;

