import React, {Component} from 'react';
import classes from './Nav.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";


const Nav = (props) => {

    let FriendsElement = props.state.friends.map(friend => <Friends name={friend.name} image={friend.image}/>)

    return <nav className={classes.nav}>
        <div className={`${classes.active} ${classes.item}`}>
            <NavLink to="/Profile" activeClassName={classes.activeLink}>Profile</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/Dialogs" activeClassName={classes.activeLink}>Messages</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/News" activeClassName={classes.activeLink}>News</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/Music" activeClassName={classes.activeLink}>Music</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/Settings" activeClassName={classes.activeLink}>Settings</NavLink>
        </div>
        <div className={classes.header}>
            friends
            <div className={classes.itemContent}>
                {/*<i className={classes.itemImage}></i>*/}
                {FriendsElement}
            </div>
        </div>
    </nav>
};

export default Nav;