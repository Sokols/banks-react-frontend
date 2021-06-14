import React from 'react';
import './index.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import LoginForm from './components/forms/LoginForm';
import RegisterForm from './components/forms/RegisterForm';
import HomeScreen from './components/screens/HomeScreen';

function App() {

  return (
    <Router>
      <NavigationBar />
          <Switch>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/register" exact component={RegisterForm} />
            <Route path="/login" exact component={LoginForm} />
          </Switch>
    </Router>
  );
}

export default App;
