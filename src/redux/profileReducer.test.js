
import profileReducer, {addPost, deletePost} from "./profileReducer";

let state = {
    post: [
        {postMessage: 'Its my first post on final version my social network', likesCount: ' ' + 3, id:1},
        {postMessage: 'I think my end version this project will be great!', likesCount: ' ' + 22, id:2}
    ]
}

test('posts length', () => {
    let action = addPost("pepega");

    let newState = profileReducer(state, action);

    expect(newState.post.length).toBe(3);
    expect(newState.post[2].postMessage).toBe("pepega");
    expect(newState.post[2].likesCount).toBe(0);
});

test('new posts value and base valLikes', () => {
    let action = addPost("pepega");

    let newState = profileReducer(state, action);

    expect(newState.post[2].postMessage).toBe("pepega");
    expect(newState.post[2].likesCount).toBe(0);
});

test('count posts after deleting', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);

    expect(newState.post.length).toBe(1);
});

test('wrong id for delete post', () => {
    let action = deletePost(122222);

    let newState = profileReducer(state, action);

    expect(newState.post.length).toBe(2);
});
