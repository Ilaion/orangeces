import React from 'react';
import mod from './MyPosts.module.css';
import Post from "./Post/Post";
import NewPostArea from "./NewPostArea/NewPostArea";


const MyPosts = (props) => {

    const postElements = props.post.map(p => <Post key={p.id} postMeassage={p.postMessage} likesCount={p.likesCount}/>)

    return (
        <div className={mod.postsBlock}>
            <span>My posts</span>
            <NewPostArea newPostText={props.newPostText}
                         addPost={props.addPost}
                         updatePostText={props.updateText}
            />
            {postElements.slice().reverse()}
        </div>
    )
}

export default MyPosts;