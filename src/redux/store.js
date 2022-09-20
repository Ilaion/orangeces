import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import friendReducer from "./friendReducer";


let store = {
    _state: {
        profile: {
            post: [
                {postMessage: 'Its my first post on final version my social network', likesCount: ' ' + 3},
                {postMessage: 'I think my end version this project will be great!', likesCount: ' ' + 22}
            ],
            newPostText: 'tutu'
        },
        dialog: {
            dialogs: [
                {name: 'Ilya', id: 1},
                {name: 'Victor', id: 2},
                {name: 'Roman', id: 3},
                {name: 'Andrey', id: 4},
            ],
            message: [
                {message: 'Hi'},
                {message: 'How your social network?'},
                {message: 'Im not alcoholic'},
                {message: 'Yo'},
                {message: 'Yo'}
            ],
            newMessageText: 'Yo'
        },
        friend: {
            online: [
                {name: 'Victor', id: 2},
                {name: 'Roman', id: 3},
                {name: 'Andrey', id: 4}
            ]
        }
    },
    getState() {
        return this._state
    },
    rerenderAll() {
        console.log('state changed');
    },
    subscribe(observer) {
        this.rerenderAll = observer;
    },

    addPost() {
        let post = {
            postMessage: this._state.profile.newPostText,
            id: 3,
            likesCount: 0
        }
        this._state.profile.post.push(post);
        this.rerenderAll(this._state);
        this._state.profile.newPostText = '';
    },
    textUpdater(newText) {
        this._state.profile.newPostText = newText;
        this.rerenderAll(this._state);
    },
    addMessage() {
        let message = {
            message: this._state.dialog.newMessageText,
        }
        this._state.dialog.message.push(message);
        this._state.dialog.newMessageText = '';
        this.rerenderAll(this._state);
    },
    messageUpdater(newMessage) {
        this._state.dialog.newMessageText = newMessage;
        this.rerenderAll(this._state)
    },

    dispatch(action) {

        this._state.profile = profileReducer(this._state.profile, action);
        this._state.dialog = dialogReducer(this._state.dialog, action);
        this._state.friend = friendReducer(this._state.friend, action);
        this.rerenderAll(this._state);
        /*if (action.type === UPDATE_TEXT){
            this._state.profile.newPostText = action.newText;
            this.rerenderAll(this._state);
        } else if (action.type === ADD_POST){
            let post = {
                postMessage: this._state.profile.newPostText,
                id: 3,
                likesCount: 0
            }
            this._state.profile.post.push(post);
            this.rerenderAll(this._state);
            this._state.profile.newPostText = '';
        } else if (action.type === ADD_MESSAGE){
            let message = {
                message: this._state.dialog.newMessageText,
            }
            this._state.dialog.message.push(message);
            this.rerenderAll(this._state);
            this._state.dialog.newMessageText = '';
        } else if (action.type === UPDATE_MESSAGE){
            this._state.dialog.newMessageText = action.newMessage;
            this.rerenderAll(this._state)
        }*/
    }
}


export default store;