import React, { Component } from 'react';
import AddSubscribers from './AddSubscribers';
import ShowSubscribers from './ShowSubscribers';
import { BrowserRouter as Router, Route } from "react-router-dom";

class PhoneDirectory extends Component{

    constructor(){
        super();
        this.state={
            subscriberList:[{
                id:1,
                name:"Sandeep",
                phone:"5555555"
            },
            {
                id:2,
                name:"Sandy",
                phone:"58852555"
            }]
        }
    }

    addSubscriberHandler=(newSubscriber)=>{
        let subscriberList=this.state.subscriberList;
        if(subscriberList.length>0){
            newSubscriber.id=subscriberList[subscriberList.length-1].id+1;
        }
        else{
            newSubscriber.id=1
        }
        subscriberList.push(newSubscriber);
        this.setState({subscriberList: subscriberList});
    }

    render(){
        return(
            <Router>
                <Route exact path="/" render={(props) => <ShowSubscribers {...props} subscriberList={this.state.subscriberList} />}/>
                <Route exact path="/addSubscriber" render={({history}, props) => <AddSubscribers history={history} {...props} addSubscriberHandler={this.addSubscriberHandler} />}/>
            </Router>
        )
    }
}
export  default PhoneDirectory;