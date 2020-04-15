import React, {Component} from 'react';
import classes from './Music.module.css';
import Mus from "./Mus/Mus";


const Music = (props) => {

let musicElement = props.state.musicData.map(m => <Mus newTrack={m.newTrack}/>)

    let newMusicElement = React.createRef()

    let addMusic = () => {
      let text = newMusicElement.current.value;
      props.addMusic(text);
        props.updateNewMusicText('')
    };

    let onMusicChange = () => {
        let text = newMusicElement.current.value;
        props.updateNewMusicText(text)
    };

    return <div>
        Music
        <div>
            {musicElement}
        </div>
        <div>
            <textarea ref={newMusicElement} onChange={onMusicChange}/>
        </div>
        <div>
            <button onClick={addMusic}>Add Music</button>
        </div>
    </div>
};

export default Music;