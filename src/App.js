import './App.css';
import Message from './Message';

const newText = 'переданный текст';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        My First React App
        <h3>Hello world!</h3>
        <Message text={newText}/>
      </header>
    </div>
  );
}

export default App;