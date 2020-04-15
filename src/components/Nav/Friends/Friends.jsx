import React, {Component} from 'react';
import classes from './Friends.module.css';
import {NavLink} from "react-router-dom";


const Friends = (props) => {
    return <div className={classes.item}>
        <div className={classes.itemImage}>{props.image}</div>{props.name}
    </div>

};

export default Friends;