import React from "react";
import {Field, reduxForm} from "redux-form";
import {MaxLengthCreator, required} from "../../../utils/validators";
import {Textarea} from "../../common/Textarea";
import mod from "./NewMessageArea.module.css"

const msxLength20 = MaxLengthCreator(20);

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newMessage"} component={Textarea} ></Field>
            </div>
            <div>
                <button className={mod.butn}>
                    Send
                </button>
            </div>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm({form:"dialogs_add_message"})(DialogsForm);