import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
// import './styles.css'
import { useHistory } from 'react-router'
import Input from '../Input/Input'
import { Button } from '@material-ui/core'
import { addChat, removeChat } from '../../actions/chats'
import { useDispatch, useSelector } from 'react-redux'

export default function Chats(props) {
    const {
        currentChat,
        onCurrentChatChange,
        // onAddChat,
        onRemoveChat,
    } = props

    const history = useHistory()

    const chats = useSelector((state) => state.chats)

    const dispatch = useDispatch()

    const handleChatLinkClick = (chat) => {
        history.push(`/chats/${chat.id}`)
    }

    const handleAddChat = (name) => {
        dispatch(addChat(`chat${Date.now()}`, name))
    }

    const handleRemoveChat = (chatId) => {
        dispatch(removeChat(chatId))
    }

    return (
        <div className="chats">
            <div className="chats__sidebar">
                <List className="app__sidebar" subheader={<p>Список чатов</p>}>
                    {Object.values(chats).map((chat) => (
                        <div style={{ display: 'flex' }}>
                            <ListItem
                                button
                                component="a"
                                key={chat.id}
                                selected={chat.id === currentChat.id}
                                onClick={() => handleChatLinkClick(chat)}
                            >
                                {chat.name}
                            </ListItem>
                            <Button onClick={() => onRemoveChat(chat.id)}>
                                Удалить
                            </Button>
                        </div>
                    ))}
                </List>
            </div>

            <Input onSubmit={handleAddChat} />
        </div>
    )
}
