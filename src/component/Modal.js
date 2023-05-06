//look at how we are creating & exporting a separate component and how we are passing in the props object of which we destructured the children out of the flow so we do not need to use the props.this and pros.that

//By default the modal will stand alone but it will still be inside of the general div we can also add to our application the concept of portal, "portal"(by importing the react DOM) meaning that we want to remove something from the flow and put it elsewhwere without distorting what we have in our  webflow, since we have the modal(when we inspect with the browser) nested within the body of our application we can take away from that nest by saying
import React from "react";
// import {ReactDOM} from "react"; //this is not working that is using the createPortal declaration, so we go with the normal stuff
import './Modal.css'

export default function Modal({children,handleClick}) {
return (
  <div className='modal-backdrop'>
    <div className='modal' style={{position:'relative'}}>
      {children}
      <button onClick={handleClick} className='closebtn' style={{position:'absolute', top:"99px", padding:"6px"}}>close</button>
    </div>
  </div>
)
}
