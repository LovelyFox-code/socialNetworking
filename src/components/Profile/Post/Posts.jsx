import React from 'react';
import style from './Posts.module.css'

function Posts() {
    return (

        <div>
            <h1>My posts</h1>
            <div >
                <input type="text" className={style.form_control} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                <input className={style.btn} type="submit" value="Send"></input>
            </div>
        </div>

    );
}

export default Posts;

