const ADD_MESSAGE = 'ADD_MESSAGE';

type dialogType = {
    name: string
    id: number
}

type messageType ={
    message: string
}

let initialState = {
    dialogs: [
        {name: 'Ilya', id: 1},
        {name: 'Victor', id: 2},
        {name: 'Roman', id: 3},
        {name: 'Andrey', id: 4},
    ] as Array<dialogType>,
    message: [
        {message: 'Hi'},
        {message: 'How your social network?'},
        {message: 'All fine'},
        {message: 'Yo'}
    ] as Array<messageType>,
};

export type InitialStateType = typeof initialState;

const dialogReducer = (state = initialState, action: any) :InitialStateType => {
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

type AddMessageActionType = {
    type: typeof ADD_MESSAGE,
    newMessageText: string
}

export let addMessageAC = (newMessageText:string) : AddMessageActionType => ({
    type: ADD_MESSAGE,
    newMessageText
})
export default dialogReducer;