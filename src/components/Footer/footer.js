import React from 'react';
import style from './footer.css';
import {Link} from 'react-router-dom';

const Footer = ()=>{
   return(
    <div className={style.footer}>
        <Link to ="/" className={style.logo}>
            <img src="/images/logo.png" alt="logo"/>
        </Link>
        <div className={style.right}>
        ©Premier League All rights reserved.
        </div>
    </div>
   );
}
export default Footer;