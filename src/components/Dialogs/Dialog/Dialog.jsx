import React, {Component} from 'react';
import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom"


const Dialog = (props) => {

    let Path = "/dialogs/" + props.id;

    return <div className={classes.dialog + ' ' + classes.active}>
        <NavLink to={Path} className={classes.link}><img className={classes.ava} src={props.photo}/>{props.name}</NavLink>
    </div>
};


export default Dialog;