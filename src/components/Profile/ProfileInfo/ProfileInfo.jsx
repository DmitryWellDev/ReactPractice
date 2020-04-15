import React, {Component} from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return <div>
        <div>
            <img
                src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'/>
        </div>
        <div className={classes.profileDescription}>
            ava
        </div>
    </div>
};

export default ProfileInfo;