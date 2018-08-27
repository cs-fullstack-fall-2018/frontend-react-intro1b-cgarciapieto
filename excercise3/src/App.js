import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StudentAccount from './StudentAccount'


class App extends Component {
  render() {
      var student = {name: "Carlos Garcia", grade:"A"};
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <StudentAccount student={student}/>
      </div>
    );
  }
}

export default App;
