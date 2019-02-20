import React from 'react';

import classes from './Input.css';

const input = (props) => {

  let inputElement = null;
  let attachedClasses = [props.classType];
  // attachedClasses = props.classType;

  switch (props.inputType) {
    case('input'): 
    inputElement = <input className={classes[props.classType]} {...props.placeholder}/>
    break;
    case ('textarea'): 
    inputElement = <textarea/>
    break;
    default: 
    inputElement = <input className={classes[props.classType]} placeholder={props.placeholder}/>
  }
  return (inputElement)
}

export default input;