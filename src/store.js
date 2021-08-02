import { combineReducers, createStore } from 'redux'
import profileReducer from './reducers/profile'
import chatsReducer from './reducers/chats'
import messagesReducer from './reducers/messages'

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)