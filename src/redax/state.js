import {rerenderEntireTree} from "../render"

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It is my post.', likesCount: 38},
            {id: 3, message: 'Yo', likesCount: 0},
            {id: 4, message: 'Uroy', likesCount: 13}
        ],
        newPostText: 'react.com'
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: 'Sasha', photo: "https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg"},
            {id: 2, name: 'Kolechka', photo: "https://klike.net/uploads/posts/2019-03/1551512876_4.jpg"},
            {id: 3, name: 'Andrey', photo: "https://klike.net/uploads/posts/2019-03/medium/1551515289_11.jpg"},
            {id: 4, name: 'Chekatilo', photo: "https://klike.net/uploads/posts/2019-03/medium/1551512890_12.jpg"},
            {id: 5, name: 'Vorobey', photo: "https://klike.net/uploads/posts/2019-03/medium/1551512905_15.jpg"}
        ],
        dialogsUncheckedData: [
            {id: 1, name: 'Ej', photo: "https://klike.net/uploads/posts/2019-03/1551512897_16.jpg"},
            {id: 2, name: 'Skril', photo: "https://klike.net/uploads/posts/2019-03/medium/1551512911_25.jpg"},
            {id: 3, name: 'Banan', photo: "https://klike.net/uploads/posts/2019-03/medium/1551512926_36.jpg"},
            {id: 4, name: 'Prelia', photo: "https://klike.net/uploads/posts/2019-03/1551512878_44.jpg"},
            {id: 5, name: 'Ostriy', photo: "https://klike.net/uploads/posts/2019-03/1551512969_49.jpg"}
        ],
        messagesData: [
            {id: 1, message: 'Hi!'},
            {id: 2, message: 'Byhai'},
            {id: 3, message: 'How is your wife?'},
        ],
        messagesUncheckedData: [
            {id: 1, message: 'Hi!'},
            {id: 2, message: 'I em weiting!'},
            {id: 3, message: 'Do not forget a mask'},
            {id: 4, message: 'Hey Mask, do not forget a mask'},
            {id: 5, message: 'I em home!'}
        ],
        newMessageText: 'react.com'
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Vera', image: ' '},
            {id: 2, name: 'Nadejda', image: ' '},
            {id: 3, name: 'Lybov', image: ' '}
        ]
    },
    newsPage: {
        newsData: [
            {id: 1, newsPost: 'sport'},
            {id: 2, newsPost: 'fishing'},
            {id: 3, newsPost: 'cars'}
            ],
        newNewsText: 'news.com'
    },
    musicPage: {
        musicData: [
            {newTrack: 1},
            {newTrack: 2},
            {newTrack: 3}
        ],
        newMusicText: 'music.com'
    }
};

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 6
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
};

export let addMessage = () => {
    let newMessage = {
        id: 6,
        message: state.dialogsPage.newMessageText
    };
    state.dialogsPage.messagesData.push(newMessage);
    rerenderEntireTree(state);
};

export let addNews = () => {
    let newNews = {
        id: 4,
        newsPost: state.newsPage.newNewsText
    };
    state.newsPage.newsData.push(newNews);
    rerenderEntireTree(state);
};

export let addMusic = () => {
    let Music = {
        id:1,
        track: state.musicPage.newMusicText
    };
    state.musicPage.musicData.push(Music);
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export let updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
};

export let updateNewNewsText = (newText) => {
    state.newsPage.newNewsText = newText;
    rerenderEntireTree(state);
};

export let updateNewMusicText = (musicText) => {
    state.musicPage.newMusicText = musicText;
    rerenderEntireTree(state);
};

export default state;