import React from "react";
import mod from './NewMessageArea.module.css';
import {AddMessageFormRedux} from "./DialogsAddMessageForm";


const NewMessageArea = (props) => {

    let addNewMessage = (value) => {

        props.sendMessage(value.newMessage);
        value.newMessage=""
    }

    return (
        <AddMessageFormRedux onSubmit={addNewMessage}/>
    )
}

export default NewMessageArea;