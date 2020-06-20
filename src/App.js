import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    // JSX
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <Person name="Ross" age="26">My Hobbies: Coding</Person>
        <Person name="Shanti" age="26"/>
        <Person name="Bob" age="30"/>
      </div>
    );
    
    // JSX gets compiled to React createElement calls
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
