import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Ross', age: 26 },
      { name: 'Shanti', age: 26 },
      { name: 'Bob', age: 30 },
    ],
    otherState: 'some other value'
  });

  const switchNameHandler = () => {
    // console.log('was clicked');
    setPersonsState({persons: [
      { name: 'Maximillian', age: 26 },
      { name: 'Shanti', age: 26 },
      { name: 'Bob', age: 20 },
    ]})
  };

  return (
    // JSX
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>Hobby: Coding</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}></Person>  
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}></Person>  
    </div>
  )// JSX gets compiled to React createElement calls
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
}

export default App;