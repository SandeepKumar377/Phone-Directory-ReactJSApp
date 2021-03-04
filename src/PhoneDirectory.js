import React, { Component } from 'react';
import AddSubscribers from './AddSubscribers';
import ShowSubscribers from './ShowSubscribers';

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
        console.log(this.state.subscriberList)
    }

    render(){
        return(
            // <AddSubscribers addSubscriberHandler={this.addSubscriberHandler} />
            <ShowSubscribers subscriberList={this.state.subscriberList} />
        )
    }
}
export  default PhoneDirectory;