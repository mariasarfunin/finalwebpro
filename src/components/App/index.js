import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch';
import Main from '../../components/Main';
import About from '../../components/About';
import Home from '../../components/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class App extends Component {
      render() {
        return (
          <div className="App">
              <AppBar position="static" >
                  <Toolbar >
                      <Typography variant="title" color="inherit" style={{flex:1}} align="center">
                        <Link style={{color:"#fff",textDecoration:'none',marginRight:20}}to="/">Home</Link>
                        <Link style={{color:"#fff",textDecoration:'none'}}to="/about">About</Link>
                      </Typography>
                  </Toolbar>
              </AppBar>
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
          </div>
        );
      }
}

export default App;
