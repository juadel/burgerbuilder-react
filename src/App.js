import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
//import Radium, {StyleRoot} from 'radium';

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
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover':{
        backgroundColor: 'lightgreen',
        color: 'black'
      }
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
      style.backgroundColor = 'black';
      style[':hover']={
        backgroundColor: 'red',
        color: 'orange'
      }
    }
    let classes =[];
    if (this.state.persons.length <=2){
      classes.push('red');
    }    
    if (this.state.persons.length <=1){
      classes.push('bold');
    }


    return (
     //<StyleRoot>
      <div className="App">
        <h1>HI, I'm a REACT App</h1>
        <p className={classes.join(' ')}> This is really working</p>
        
        <button 
          style={style}
          onClick= {this.togglePersonHandler}>Switch name</button>
          {persons}
        
          
        
        
      </div>
      //</StyleRoot>
    );
    //return React.createElement('div',{className:"App"},React.createElement('h1',null,'Does this works now'))
  }
}

//export default Radium(App);
export default App;
