// import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

// const textLorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis enim sint provident, odio neque repellendus? Minus saepe ipsa magni debitis delectus consequatur quam recusandae. Voluptate quia facere amet fugit?';
const AUTHORS = {
    ME: 'Me',
    BOT: 'bot',
}

let id = 0;

function Message(props) {
    return (
        <p className={props.className}>{props.author}: {props.text}</p>
    );
}

function App() {
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
      <div className="App">
          <div className="messages">
              {messageList.map( (message, index) => (
                  <Message key={message.id} text={message.text} author={message.author} className={"border"}></Message>
              ))}
          </div>

          <form onSubmit={handleMessageSubmit}>
              <input value={inputValue} onChange={handleMessageChange} required/>
              <button>Send</button>
          </form>
      </div>
  );
}

export default App;
