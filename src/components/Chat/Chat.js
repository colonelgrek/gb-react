import React from 'react'
import { Redirect, useParams } from 'react-router'
import Message from '../Message/Message'
import Input from '../Input/Input'
import usePrevious from '../../hooks/usePrevious'
import { AUTHORS } from '../App/constants'
import { addMessage } from '../../actions/messages'
import { useDispatch, useSelector } from 'react-redux'
import { useIsChatExists } from '../../hooks/useIsChatExists'

const Chat = (props) => {
    const { getIsChatExists } = props
    const { chatId } = useParams()



    const messageList = useSelector((state) => state.messages[chatId] || [])
    const dispatch = useDispatch()

    const timer = React.useRef(null)

    const prevMessageList = usePrevious(messageList)

    // React.useEffect(() => {
    //     if (
    //         prevMessageList?.length < messageList.length &&
    //         messageList[messageList.length - 1].author !== AUTHORS.BOT
    //     ) {
    //         timer.current = setTimeout(
    //             () =>
    //                 setMessageList((currentMessageList) => [
    //                     ...currentMessageList,
    //                     { author: AUTHORS.BOT, text: 'Я назойливый bot' },
    //                 ]),
    //             1500
    //         )
    //     }
    // }, [messageList, prevMessageList])

    React.useEffect(() => {
        return () => {
            clearTimeout(timer.current)
        }
    }, [])

    const handleMessageSubmit = (newMessageText) => {
        dispatch(
            addMessage(chatId, {
                id: `message${Date.now()}`,
                author: AUTHORS.ME,
                text: newMessageText,
            })
        )
    }

    const isChatExists = useIsChatExists({ chatId })

    if (!isChatExists) {
        return <Redirect to="/chats" />
    }

    return (
        <div className="chat">
            {messageList.length ? (
                <div className="bordered">
                    {messageList.map((message) => (
                        <Message
                            key={message.id}
                            text={message.text}
                            author={message.author}
                        />
                    ))}
                </div>
            ) : null}

            <Input onSubmit={handleMessageSubmit} />
        </div>
    )
}

export default Chat