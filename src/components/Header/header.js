import React from 'react';
import style from './header.css';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import SideNav from './SideNav/sideNav';

const Header = (props)=>{

    const navBars = ()=>{
        return(
            <div className={style.bars}>

                <FontAwesome name ="bars" 
                onClick ={props.onOpenNav}
                style={{
                    color: '#fff', 
                    padding: '10px',
                    cursor: 'pointer',
                  }}
                    ></FontAwesome>
            </div>
        );
    }

    const logo =()=>{
        return(
            <Link to="/" className={style.logo}>
                <img alt ="logo" src="/images/nba_logo.png"/>
            </Link>
        )
    }
    return(
        <header className={style.header}>
            <SideNav {...props}/>
           <div className={style.headerOpt}>
               {logo()}
               {navBars()}
           </div>
            </header>
    );
}
export default  Header;