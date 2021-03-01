import React, { Component } from 'react';
import Header from "./Header"
import PhoneDirectoryDetails from './PhoneDirectoryDetails';

class App extends Component{
  render() {
    return (
      <div>
        <Header/>
        <PhoneDirectoryDetails/>
      </div>
    );
  }
}

export default App;
