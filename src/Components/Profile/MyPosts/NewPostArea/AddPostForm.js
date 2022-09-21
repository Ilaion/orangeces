import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../common/Textarea";
import {MaxLengthCreator, required} from "../../../../utils/validators";
import mod from "./NewPostArea.module.css"

const msxLength90 = MaxLengthCreator(90);

const AddPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}  validate={[msxLength90]} name={"newPostForm"}/>
            </div>
            <div>
                <button className={mod.butn}>Send</button>
            </div>
        </form>
    )
}

export const AddPostFormR = reduxForm({form: "add_new_post"})(AddPostForm);