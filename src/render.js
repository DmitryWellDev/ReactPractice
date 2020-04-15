import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
    addMessage,
    addPost,
    updateNewPostText,
    updateNewMessageText,
    addNews,
    updateNewNewsText,
    addMusic,
    updateNewMusicText
} from './redax/state';

 export let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state}
                         addPost={addPost}
                         addMessage={addMessage}
                         addNews={addNews}
                         addMusic={addMusic}
                         updateNewPostText={updateNewPostText}
                         updateNewMessageText={updateNewMessageText}
                         updateNewNewsText={updateNewNewsText}
                         updateNewMusicText={updateNewMusicText}/>, document.getElementById('root'));
};

