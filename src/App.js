import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Planned from "./components/Planned";
import Started from './components/Started';
import Done from './components/Done';
import AddNewTaskModal from './commons/Modal';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header />
        <Planned />
        <Started />
        <Done />
       
      </div>
    );
  }
}

export default App;
