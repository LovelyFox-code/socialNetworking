import React from 'react';
import style from './Music.module.css'

const Music = (props) => {
    
    return (
        <div className={style.audioPlayer}>
            <h1>Never stop the music</h1>
            <h2>Select a song!</h2>
            <label className={style.fileUpload}>
                <input type="file" name="songs" multiple />
                <p>click here to find a song</p>
            </label>
            <audio src=""></audio>
            <div className={style.buttons}>
                <button id="prev">⏮</button>
                <button id="play">▶️</button>
                <button id="next">⏭</button>
            </div>
        </div>
    )
}

export default Music;