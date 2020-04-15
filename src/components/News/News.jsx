import React, {Component} from 'react';
import classes from './News.module.css';
import New from "./new/New";


const News = (props) => {

    let newsPostElement = props.state.newsData.map(n => <New id={n.id} newsPost={n.newsPost}/>);

    let newNewsElement = React.createRef();

    let addNews = () => {
        let newsText = newNewsElement.current.value;
        props.addNews(newsText);
        newNewsElement.current.value = '';
    };

    let onNewsChange = () => {
        let newsText = newNewsElement.current.value;
        props.updateNewNewsText(newsText)
    };
    return <div>
        News
        <div>
            {newsPostElement}
        </div>
        <div>
            <textarea ref={newNewsElement} onChange={onNewsChange} value={props.newNewsText}/>
        </div>
        <div>
            <button onClick={addNews}>AddNews</button>
        </div>
    </div>
}

export default News;