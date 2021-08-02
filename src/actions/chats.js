export const ADD_CHAT = 'CHATS::ADD_CHAT'
export const REMOVE_CHAT = 'CHATS::REMOVE_CHAT'

export const addChat = (chatId, name) => ({
    type: ADD_CHAT,
    payload: {
        id: chatId,
        name,
    },
})

export const removeChat = (chatId) => ({
    type: REMOVE_CHAT,
    payload: {
        chatId,
    },
})
