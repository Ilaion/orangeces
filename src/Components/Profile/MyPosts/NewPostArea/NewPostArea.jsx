import React from "react";
import mod from './NewPostArea.module.css';
import {AddPostFormR} from "./AddPostForm";


const NewPostArea = (props) => {

    const addPostN = (value) => {
        props.addPost(value.newPostForm);
        value.newPostForm = ""
    }

    return (
        <AddPostFormR onSubmit={addPostN}/>
    )
}

export default NewPostArea;