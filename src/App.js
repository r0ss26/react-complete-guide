import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // JSX
    // return (
    //   <div className="App">
    //     <h1>Hi, I'm a React App</h1>
    //   </div>
    // );
    
    // JSX gets compiled to React createElement calls
    return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
