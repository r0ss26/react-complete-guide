import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Ross', age: 26 },
      { name: 'Shanti', age: 26 },
      { name: 'Bob', age: 30 },
    ]
  }

  switchNameHandler = () => {
    // console.log('was clicked');
    this.setState({persons: [
      { name: 'Maximillian', age: 26 },
      { name: 'Shanti', age: 26 },
      { name: 'Bob', age: 30 },
    ]})
  }

  render() {
    // JSX
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Hobby: Coding</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>  
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>  
      </div>
    );
    
    // JSX gets compiled to React createElement calls
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
