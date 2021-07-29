import React from 'react';
// import logo from './logo.svg';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import './App.css';
import {useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import { useHistory, useLocation, useParams, useRouteMatch } from 'react-router'

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

function ChatList1(props) {
    const { chatList } = props;

    return (
    <List className={props.className} subheader={"Chats:"}>
        {chatList.map( (chatItem) => (
            <ListItem key={chatItem.id}>{chatItem.name}</ListItem>
        ))}
    </List>
    );
}

function Chat1() {
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
                  <Message
                      key={message.id}
                      text={message.text}
                      author={message.author}
                      className={"bgcYellow"}>
                  </Message>
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
              <Button type="submit">Отправить</Button>
          </form>
      </div>
  );
}

const initialChats = {
    id1: {
        name: "Chat1",
        messages: [{ text: "FirstMessage", author: AUTHORS.BOT }],
    },
    id2: {
        name: "Chat2",
        messages: [{ text: "FirstMessageHereToo!", author: AUTHORS.ME }],
    },
};

const Home = () => (
    <>
        <div>Home</div>
    </>
)

const Profile = () => (
    <>
        <div>Profile</div>
    </>
);

function MessagesList() {
    const [messages, setMessages] = useState([
        "message 1",
        "message 2",
        "message 3",
    ]);
    return messages.map((message) => <div>{message}</div>);
}

const ChatList = ({ chats, chatId }) => (
    <div>
        {Object.keys(chats).map((id, i) => (
            <div key={i}>
                <Link to={`/chats/${id}`}>
                    <b style={{ color: id === chatId ? "#000000" : "grey" }}>
                        {chats[id].name}
                    </b>
                </Link>
            </div>
        ))}
    </div>
);


function Chats() {
    const { chatId } = useParams();
    const [chats, setChats] = useState(initialChats);
    // if (!chatId || !chats[chatId]) {
    //     return <Redirect to="/nochat" />;
    // }
    return (
        <>
            <header>Header</header>
            <div className="wrapper">
                <div>
                    <ChatList
                        chats={chats}
                        chatId={chatId}
                    />
                </div>
                <div>
                    {/*<Message messages={chats[chatId].messages} />*/}
                    {/*<MessagesList messages={chats[chatId].messages} />*/}

                </div>
            </div>
        </>
    );
}

const NoChat = (chats) => (
    <>
        <ChatList

        />
        <span>Please select a chat</span>
    </>
)


function Router() {
    const [chats, setChats] = useState(initialChats);

    return (
        <BrowserRouter>
            <header>
                <ul>
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    <li>
                        <Link to="/profile">profile</Link>
                    </li>
                    <li>
                        <Link to="/chats">chats</Link>
                    </li>
                </ul>
            </header>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/chats/:chatId?">
                    {/*<Route path="/chats/">*/}
                    <Chats chats={chats} setChats={setChats} />
                </Route>
                <Route path="/nochat">
                    <NoChat chats={chats} />
                </Route>
                <Route>
                    <h3>404 Page not found</h3>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

function App() {

    return (
        <>
            <Router/>
        </>
    );
}

export default App;
