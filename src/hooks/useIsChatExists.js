import { useSelector } from 'react-redux'

export const useIsChatExists = ({ chatId }) => {
    const chats = useSelector((state) => state.chats)

    return Boolean(Object.values(chats).find((chat) => chat.id === chatId))
}
