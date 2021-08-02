import { CHANGE_IS_ONLINE, CHANGE_NAME } from '../actions/profile'

const initialState = {
    name: 'John',
    age: 27,
    isOnline: true,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_NAME: {
            return {
                ...state,
                name: action.payload.name,
            }
        }
        case CHANGE_IS_ONLINE: {
            return {
                ...state,
                isOnline: action.payload.isOnline,
            }
        }
        default:
            return state
    }
}