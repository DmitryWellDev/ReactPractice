import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";



const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav state={props.state.sidebar}/>
                <div className='app-wrapper-content'>
                    <Route path='/Dialogs' render={() => <Dialogs state={props.state.dialogsPage} addMessage={props.addMessage} updateNewMessageText={props.updateNewMessageText} newMessageText={props.state.dialogsPage.newMessageText}/>}/>
                    <Route path='/Profile' render={() => <Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
                    <Route path='/News' render={() => <News state={props.state.newsPage} addNews={props.addNews} updateNewNewsText={props.updateNewNewsText}/>}/>
                    <Route path='/Music' render={() => <Music state={props.state.musicPage} addMusic={props.addMusic} updateNewMusicText={props.updateNewMusicText}/>}/>
                    <Route path='/Settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;


