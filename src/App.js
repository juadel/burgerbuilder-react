import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personState, setPersonState] = useState({
    persons: [
      {name: 'Juan', age: 28},
      {name: 'Jaco', age: 10},
      {name: 'Tomas', age: 8}
    ]
  });

  const [otherState, setOtherState] = useState(200);
  
  const switchNameHandler = () =>{
  
    // DONT DO this this.state.persons[0].name ="Carolina";
    setPersonState({
     persons: [
      {name: 'Carolina', age: 32},
      {name: 'Jaco', age: 10},
      {name: 'Tomas', age: 8}
     ]
  })
  }


    return (
      <div className="App">
        <h1>HI, I'm a REACT App</h1>
        <p> This is really working</p>
        
        <button onClick= {switchNameHandler}>Switch name</button>
        <Person name={personState.persons[0].name} age ={personState.persons[0].age}/>
        <Person name={personState.persons[1].name} age ={personState.persons[1].age}/>
        <Person name={personState.persons[2].name} age ={personState.persons[2].age}/>
        
      </div>
    );
    //return React.createElement('div',{className:"App"},React.createElement('h1',null,'Does this works now'))
  }


export default app;


