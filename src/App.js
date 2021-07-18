import logo from './logo.svg';
import './App.css';

const textLorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis enim sint provident, odio neque repellendus? Minus saepe ipsa magni debitis delectus consequatur quam recusandae. Voluptate quia facere amet fugit?';

function Message(props) {
    return (
        <p className="Message">{props.text}</p>
    );
}

function App(props) {
  return (
      <div className="App">
        <Message text = {textLorem} className="App-header">
        </Message>
      </div>
  );
}

export default App;
