import React, { Component } from 'react';

class App extends Component{
  render() {
    let x=1;
    let y=2;
    return (
      <div>
        {/* <div className="header">
          Phone Directory
        </div>
        <button> Add </button>
        <div>
          <span>Name</span> <br/>
          <span>Phone</span>
        </div> */}
        <label htmlFor="name">Name:</label>
        <input type="text" defaultValue={x+y} placeholder="Enter here" />
        
      </div>
    );
  }
}

export default App;
