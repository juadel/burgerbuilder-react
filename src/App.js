import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Juan', age: 28},
      {name: 'Jaco', age: 10},
      {name: 'Tomas', age: 8}
    ]
  }

  switchNameHandler = () =>{
    
    // DONT DO this this.state.persons[0].name ="Carolina";
    this.setState({
     persons: [
      {name: 'Carolina', age: 32},
      {name: 'Jaco', age: 10},
      {name: 'Tomas', age: 8}
     ]
  })
  }

  render() {
    return (
      <div className="App">
        <h1>HI, I'm a REACT App</h1>
        <p> This is really working</p>
        
        <button onClick= {this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age ={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age ={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age ={this.state.persons[2].age}/>
        
      </div>
    );
    //return React.createElement('div',{className:"App"},React.createElement('h1',null,'Does this works now'))
  }
}

export default App;
