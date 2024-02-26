import React, {useState, useEffect, useRef} from 'react';
import './Filter.css'

import filterblack from '../../img/filterb.svg'
import filtericon from '../../img/filtericon.png'

function Filter() {
    const [open, setOpen] = useState(false);

    let menuRef = useRef();
  
    useEffect(() => {
      let handler = (e)=>{
        if(!menuRef.current.contains(e.target)){
          setOpen(false);
          console.log(menuRef.current);
        }      
      };
  
      document.addEventListener("mousedown", handler);
      
      return() =>{
        document.removeEventListener("mousedown", handler);
      }
  
    });
  
    return (
      <div className="filter">
        <div className='menu-container' ref={menuRef}>
          <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
            <img src={filterblack}></img>
          </div>
  
          <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
            <h3>FILTROS<br/><span>TECH STORE</span></h3>
            <ul>
              <DropdownItem img = {filtericon} text = {"CATEGORIA"}/>
              <DropdownItem img = {filtericon} text = {"MARCA"}/>
              <DropdownItem img = {filtericon} text = {"PRECIO"}/>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  function DropdownItem(props){
    return(
      <li className = 'dropdownItem'>
        <img src={props.img}></img>
        <a> {props.text} </a>
      </li>
    );
  }

export default Filter