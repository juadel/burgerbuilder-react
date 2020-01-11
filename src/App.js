import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {id: '1',name: 'Juan', age: 28},
      {id: '2',name: 'Jaco', age: 10},
      {id: '3',name: 'Tomas', age: 8}
    ],
    showPersons : false

  }

  switchNameHandler = (newName) =>{
    
    
    this.setState({
     persons: [
      {name: newName, age: 32},
      {name: 'Jaco', age: 10},
      {name: 'Tomas', age: 8}
     ]
     
  })
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  togglePersonHandler = () =>{
   const doesShow = this.state.showPersons;
   this.setState({showPersons : !doesShow});
  }

  deletePersonHandler = (PersonIndex) =>{
    //const persons = this.state.persons.slice();
    const persons= [...this.state.persons];
    persons.splice(PersonIndex, 1);
    this.setState({persons: persons});

  }

  render() {
    const style = {
      backgroundColor: 'orange',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) =>{
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} 
              key={person.id} 
              changed={(event) => this.nameChangeHandler(event, person.id)}/>
          })}
            
          </div> 
      );
    }

    return (
      <div className="App">
        <h1>HI, I'm a REACT App</h1>
        <p> This is really working</p>
        
        <button 
          style={style}
          onClick= {this.togglePersonHandler}>Switch name</button>
          {persons}
        
          
        
        
      </div>
    );
    //return React.createElement('div',{className:"App"},React.createElement('h1',null,'Does this works now'))
  }
}

export default App;
