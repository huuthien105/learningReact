import logo from './logo.svg';
import './App.scss';
import MyComponent from './example/MyComponent.js';
import ListTodo from './todos/ListTodo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Simple TODO App with React.js
        </p>
        {/* <MyComponent /> */}

        <ListTodo />


      </header>
    </div>
  );
}

export default App; 
