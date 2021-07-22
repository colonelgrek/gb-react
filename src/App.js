import React from 'react';
// import logo from './logo.svg';
import TextField from '@material-ui/core/TextField';
import './App.css';
import {useEffect, useState} from "react";

const AUTHORS = {
    ME: 'Me',
    BOT: 'bot',
}

const chatList = [
    {
        name: 'First Chat',
        id: 'Chat1'
    },
    {
        name: 'Second Chat',
        id: 'Chat2'
    },
    {
        name: 'Third Chat',
        id: 'Chat3'
    },
    {
        name: 'Fourth Chat',
        id: 'Chat4'
    }
];

let id = 0;

function Message(props) {
    return (
        <p className={props.className}>{props.author}: {props.text}</p>
    );
}

function ChatList(props) {
    const { chatList } = props;
    // const [chatList, setChatList] = useState(chatList1);

    // return (
    //     <div className="chatList">
    //         {chatList.map( (chat) => (
    //             <ChatName key={chat.id} text={chat.name} className={"border"}></ChatName>
    //         ))}
    //     </div>
    return (
        // <p className={chatList.id}>{chatList.name}</p>
    <div className={props.className}>
        {chatList.map( (chatItem) => (
            <p key={chatItem.id}>{chatItem.name}</p>
        ))}
    </div>
    );
}

function Chat() {
    const [messageList, setMessageList] = useState([]);
    const [inputValue, setInputValue] = useState('');


    useEffect( () => {
        if (messageList.length && messageList[messageList.length - 1].author !== AUTHORS.BOT) {
            setTimeout( () => {
                id++;
                setMessageList( (currentMessageList) => [
                        ...currentMessageList,
                        {author: AUTHORS.BOT, text: 'Я назойливый bot', id: id},
                    ]
                );
            }, 1500)
        }
    }, [messageList]);

    const handleMessageChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleMessageSubmit = (event) => {
        event.preventDefault();
        setMessageList( (currentMessageList) => [
            ...currentMessageList,
            {author: AUTHORS.ME, text: inputValue, id: id},
        ]);
        setInputValue('');
        id++;
    }

  return (
      <div>
          <div className="messages">
              {messageList.map( (message) => (
                  <Message key={message.id} text={message.text} author={message.author} className={"bgcYellow"}></Message>
              ))}
          </div>

          <form className="app__form" onSubmit={handleMessageSubmit}>
              <TextField
                  fullWidth
                  required
                  autoFocus
                  className="child__text-field bordered"
                  variant="outlined"
                  label="Сообщение"
                  placeholder="Введите сообщение"
                  value={inputValue}
                  onChange={handleMessageChange}
              />
              <button>Отправить</button>
          </form>
      </div>
  );
}

function App() {

    return (
        <div className="App">
            <ChatList chatList = {chatList} className={"chatList"}></ChatList>
            <Chat/>
        </div>
    );
}

export default App;
