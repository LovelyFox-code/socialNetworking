import React from 'react';
import style from './Bio.module.css'

function Bio() {
  return (

    <div className={style.bio}>
          <h1>Alina Dakhno</h1>
          <ul className ={style.info}>
            <li>Date of birth: <span>17.11.1988</span> </li>
            <li>City: <span>Almere</span></li>
            <li>Education: <span>HBO</span></li>
            <li>Info: <span>frontend developer</span></li>
          </ul>
    </div>

  );
}

export default Bio;

