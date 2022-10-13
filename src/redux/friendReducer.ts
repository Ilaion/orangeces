type OnlineType = {
    name: string,
    id: number
}

let initialState = {
    online: [
        {name: 'Victor', id: 2},
        {name: 'Roman', id: 3},
        {name: 'Andrey', id: 4}
    ] as Array<OnlineType>
};

type InitialStateType = typeof initialState;

const friendReducer = (state = initialState, action: any): InitialStateType => {

    return state
}

export default friendReducer;