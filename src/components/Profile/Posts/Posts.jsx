import React from 'react';
import style from './Posts.module.css'
import Post from './Post/Post';
const postsData = [
    { message: "Hello" },
    { message: "Hello" },
    { message: "It's my first post" },
    { message: "Hello" },
    { message: "Hello" },
    { message: "Hello" },
    { message: "Hello" },
]
const post = postsData.map(el => < Post message={el.message} />);
console.log(post);

function Posts() {
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

