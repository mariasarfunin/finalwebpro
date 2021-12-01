import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch';
import Main from '../../components/Main';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Home extends Component {
      render() {
        return (
          <Main />
        );
      }
}

export default Home;
