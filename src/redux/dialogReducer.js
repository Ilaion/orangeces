const ADD_MESSAGE = 'ADD_MESSAGE';

let initialState = {
    dialogs: [
        {name: 'Ilya', id: 1},
        {name: 'Victor', id: 2},
        {name: 'Roman', id: 3},
        {name: 'Andrey', id: 4},
    ],
    message: [
        {message: 'Hi'},
        {message: 'How your social network?'},
        {message: 'All fine'},
        {message: 'Yo'}
    ],
};

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                message: [...state.message, {message: action.newMessageText}]
            }
        default:
            return state;
    }
}

export let addMessageAC = (newMessageText) => ({
    type: ADD_MESSAGE,
    newMessageText
})
export default dialogReducer;