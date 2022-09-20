import React from "react";
import mod from './Post.module.css';
import post_ava from "../../../../Images/default_post_ava_gif.gif"

const Post = (props) => {
    return (
        <div className={mod.post}>
            <img src={post_ava}/>
            <span className={mod.pf}>{props.postMeassage}</span>
            <div className={mod.like}>
                like{props.likesCount}
            </div>
        </div>
    )
}

export default Post;