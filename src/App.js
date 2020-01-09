import React, { Component } from 'react';
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

  switchNameHandler = (newName) =>{
    
    // DONT DO this this.state.persons[0].name ="Carolina";
    this.setState({
     persons: [
      {name: newName, age: 32},
      {name: 'Jaco', age: 10},
      {name: 'Tomas', age: 8}
     ]
  })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
       {name: 'Juan', age: 32},
       {name: event.target.value, age: 10},
       {name: 'Tomas', age: 8}
      ]
   })
  }

  render() {
    const style = {
      backgroundColor: 'orange',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };


    return (
      <div className="App">
        <h1>HI, I'm a REACT App</h1>
        <p> This is really working</p>
        
        <button 
          style={style}
          onClick= {() => this.switchNameHandler('Carolina!!')}>Switch name</button>

        <Person 
         name={this.state.persons[0].name} 
         age ={this.state.persons[0].age}/>
        <Person 
         name={this.state.persons[1].name} 
         age ={this.state.persons[1].age}
         click={this.switchNameHandler.bind(this, 'Mama')}
         changed={this.nameChangeHandler} > My Hobbies </Person>
        <Person 
         name={this.state.persons[2].name} 
         age ={this.state.persons[2].age}/>
        
      </div>
    );
    //return React.createElement('div',{className:"App"},React.createElement('h1',null,'Does this works now'))
  }
}

export default App;
