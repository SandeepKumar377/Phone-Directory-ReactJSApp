import React from 'react';
import './PhoneDirectoryDetails.css'

const PhoneDirectoryDetails= function(){
    let subscribers=[
        {
            id:1,
            name:"Sandeep",
            phone:"5555555"
        },
        {
            id:2,
            name:"Sandy",
            phone:"58852555"
        }
    ]
    return(
        <div className="component-body-container">
            <button className="custom-btn add-btn"> Add </button>
            <div className="grid-container heading-container">
                <span className="grid-item name-heading">NAME</span>
                <span className="grid-item phone-heading">PHONE</span>
            </div>  
            {
                subscribers.map(sub=> {
                    return <div key={sub.id} className="grid-container">
                        <span className="grid-item">{sub.name}</span>
                        <span className="grid-item">{sub.phone}</span>
                        <span className="grid-item"><button className="custom-btn delete-btn"> DELETE </button></span>
                    </div>                    
                })
            }
                       
        </div>
    )
}
export default PhoneDirectoryDetails;