import React, { Component } from 'react';
import Header from "./Header"
import './ShowSubscribers.css'
import { Link } from "react-router-dom";

class ShowSubscribers extends Component{
   render() {
    return (
      <div>
        <Header heading="Phone Directory App"/>
        <div className="component-body-container">
          <Link to="/addSubscriber"><button className="custom-btn add-btn"> Add </button></Link>
          <div className="grid-container heading-container">
              <span className="grid-item name-heading">NAME</span>
              <span className="grid-item phone-heading">PHONE</span>
          </div>  
          {
            this.props.subscriberList.map(sub=> {
              return <div key={sub.id} className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
                <button className="custom-btn delete-btn" onClick={this.deleteHandler}> DELETE </button>                       
              </div>                    
            })
          }                       
        </div>
      </div>
    );
  }
}

export default ShowSubscribers;
