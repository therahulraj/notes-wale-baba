import React from "react";

import classes from './Community.css'

const community = props => {
  return (
      <div style={{
        backgroundImage: `url(${props.imageUrl})`
      }} 
      className={'mx-auto ' + classes.Community}></div>
    
  );
};

export default community;
