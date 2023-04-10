import logo from './logo.svg';
import './App.scss';
import Nav from './navigation/Nav';
// import ListTodo from './todos/ListTodo'
import Home from './example/Home';
import ListUser from './users/ListUser';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import MyComponent from './example/MyComponent';

import ListTodo from './todos/ListTodo';
import DetailUser from './users/DetailUser';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />


          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/user" exact>
              <ListUser />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>
            <Route path="/user/:id">
              <DetailUser />
            </Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App; 
