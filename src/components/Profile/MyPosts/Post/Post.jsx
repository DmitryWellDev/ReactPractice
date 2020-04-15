import React, {Component} from 'react';
import classes from "./Post.module.css";


const MyPosts = (props) => {
    return <div className={classes.content}>
        <div>
            <div>
                <div className={classes.item}>
                    <img src={"https://klike.net/uploads/posts/2019-03/1551511825_37.jpg"}/>
                    {props.message}
                </div>
                <span>
                    Likes: {props.likesCount}
                </span>
            </div>
        </div>
    </div>
}

export default MyPosts;