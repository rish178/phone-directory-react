import React, { Component } from 'react';
import Header from './Header.js';
import './App.css';

class App extends Component {
  func(message){
    alert(message)
  }
  render() {
    let subscribers = [
      { 
          id:1,
          name:"Sam",
          phone:123344

      },
      {
        id:2,
        name:"Eric",
        phone:123
      }
    ]
   
    return (
    
      <div>
        <Header test1="i am test" test2="i am test 2"/>
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
          {
          subscribers.map(sub => {
          return <div className="grid-container">
            <span id={sub.id} className="grid-item">{sub.name}</span>
            <span id={sub.id} className="grid-item">{sub.phone}</span>
            <span className="grid-item action-btn-container">
              <button className="custom-btn delete-btn" onClick={this.func.bind(this,"message")}>Delete</button>
            </span>

          </div>
          })
          }
          </div>
      
      </div>
    );
  }
}

export default App;