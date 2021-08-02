import { ADD_CHAT, REMOVE_CHAT } from '../actions/chats'

const initialState = {
    chat1: {
        id: 'chat1',
        name: 'Чат 1',
    },
}

export default function chatsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CHAT: {
            return {
                ...state,
                [action.payload.id]: action.payload,
            }
        }
        case REMOVE_CHAT: {
            delete state[action.payload.chatId]

            return {
                ...state,
            }
        }
        default:
            return state
    }
}
