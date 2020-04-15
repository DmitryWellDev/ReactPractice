import React, {Component} from 'react';
import classes from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import UncheckedDialog from "./UncheckedDialog/UncheckedDialog"
import UncheckedMessage from "./UncheckedMessages/UncheckedMessages";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData
        .map(dialog => <Dialog name={dialog.name} id={dialog.id} photo={dialog.photo}/>);

    let messagesElements = props.state.messagesData
        .map(message => <Message message={message.message}/>);

    let uncheckedDialogsElements = props.state.dialogsUncheckedData
        .map(uncheckedDialog => <UncheckedDialog name={uncheckedDialog.name} id={uncheckedDialog.id} photo={uncheckedDialog.photo} comment={uncheckedDialog.comment}/>);

    let uncheckedMessagesElements = props.state.messagesUncheckedData
        .map(message => <UncheckedMessage message={message.message}/>);

    let addMessageElement = React.createRef();

    let addMessage = () => {
        let textMessage = addMessageElement.current.value;
        props.addMessage(textMessage);
        props.updateNewMessageText('');
    };

    let onMessageChange = () => {
        let textMessage = addMessageElement.current.value;
        props.updateNewMessageText(textMessage)
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <div>
                {uncheckedDialogsElements}
            </div>
            <div>
                {uncheckedMessagesElements}
            </div>
            <div>
                <textarea onChange={onMessageChange} ref={addMessageElement} value={props.newMessageText}></textarea>
            </div>
            <div>
                <button onClick={addMessage}>Add Message</button>
            </div>
        </div>
    )
};

export default Dialogs;