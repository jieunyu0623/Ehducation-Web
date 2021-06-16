import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';
import MyPage from './components/pages/MyPage';

function App() {

  return (
    <Component>
      <div className='main'>
        <Router>
          <Fragment>
            <Navbar />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/:id' component={MyPage} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </div>
    </Component>
  );
}

export default App;
