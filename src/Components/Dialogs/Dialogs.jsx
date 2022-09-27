import React from "react";
import mod from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import NewMessageArea from "./NewMessageArea/NewMessageArea";
import {Navigate} from "react-router-dom";


const Dialogs = (props) => {

    const dialogElements = props.dialogs.map(d => <Dialog key={d.id} name={d.name} id={d.id}/>)

    const messageElements = props.messages.map(m => <Message message={m.message}/>)

    return (
        <div className={mod.dialogs}>
            <div className={mod.dialogsItems}>
                {dialogElements}
            </div>
            <div className={mod.messageItems}>
                {messageElements}
                <NewMessageArea  sendMessage={props.sendMessage}
                />
            </div>
        </div>
    )
}

export default Dialogs;