import React from 'react';
import style from './Bio.module.css'
import bg from '../../../img/bg.png'
function Bio() {
  return (

    <div className={style.bio}>
      <div >
        <img src={bg} alt="background" />
      </div>
      <h1>Alina Dakhno</h1>
      <ul className={style.info}>
        <li>City: <span>Almere</span></li>
        <li>Education: <span>HBO</span></li>
        <li>Info: <span>frontend developer</span></li>
      </ul>
    </div>

  );
}

export default Bio;

