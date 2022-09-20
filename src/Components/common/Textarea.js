import React from "react";
import mod from './Textarea.module.css'

export const Textarea = ({input, meta, ...props}) => {
    let hasError = meta.error && meta.touched;
    return (
        <div className={mod.formControl + " " + (hasError ? mod.error : "")}>
            <div>
                <textarea {...input} {...props} className={mod.custom}/>
            </div>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}

export const Inputarea = ({input, meta, ...props}) => {
    let hasError = meta.error && meta.touched;
    return (
        <div className={mod.formControl + " " + (hasError ? mod.error : "")}>
            <div>
                <input {...input} {...props} className={mod.decorInput}/>
            </div>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}