import React, {Component} from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
        props.updateNewPostText('');
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    };


    return <div className={classes.content}>
        <div className={classes.MyPostsDescription}>
            My posts
            <div>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className={classes.MyPostsDescription}>
                New post
            </div>

            <div className={classes.MyPostsComments}>
                {postsElements}
            </div>
        </div>
    </div>
};

export default MyPosts;