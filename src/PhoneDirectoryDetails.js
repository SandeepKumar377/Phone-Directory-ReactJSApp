import React from 'react';
import './PhoneDirectoryDetails.css'

const PhoneDirectoryDetails= function(){
    return(
        <div className="component-body-container">
            <button className="custom-btn add-btn"> Add </button>
            <div className="grid-container heading-container">
                <span className="grid-item name-heading">NAME</span>
                <span className="grid-item phone-heading">PHONE</span>
            </div>  
                       
        </div>
    )
}
export default PhoneDirectoryDetails;