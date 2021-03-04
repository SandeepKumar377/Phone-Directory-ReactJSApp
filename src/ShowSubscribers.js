import React, { Component } from 'react';
import Header from "./Header"
import './ShowSubscribers.css'

  //  let subscribers=[
  //     {
  //         id:1,
  //         name:"Sandeep",
  //         phone:"5555555"
  //     },
  //     {
  //         id:2,
  //         name:"Sandy",
  //         phone:"58852555"
  //     }
  // ]

class ShowSubscribers extends Component{
 

  render() {
    console.log("Render called")
    return (
      <div>
        <Header heading="Phone Directory App"/>
        <div className="component-body-container">
            <button className="custom-btn add-btn"> Add </button>
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
