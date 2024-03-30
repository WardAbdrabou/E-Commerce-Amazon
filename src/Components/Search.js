import React from "react";
import { Dropdown } from "react-bootstrap";

export default function SearchBar(){
  return(
    <>
    
     <Dropdown style={{ zIndex:"1"}} data-bs-theme="dark">
    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" style={{height:"46px", marginLeft:"5px"}}>
  All </Dropdown.Toggle>

    <Dropdown.Menu style={{ zIndex:"1" }}>
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  
    <div class="input-group">
   
    <div class="form-outline" data-mdb-input-init>
      <input placeholder="Enter" className="search"/>
    </div>
    <button  type="button" class="btn btn-search" style={{height:"45px" , marginLeft:"-5px"}}>
      <i class="fas fa-search"></i>
    </button>
  </div>
  </>
  )
}