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

class About extends Component {
      render() {
        return (
          <div>
              <h1>About Page</h1>
              <p>Sarfunin, Maria</p>
              <p>105011910100</p>
              <p>Sistem Informasi<p>
          </div>
        );
      }
}

export default About;
