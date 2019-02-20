import React from 'react';

import classes from './Button.css';

const button = (props) => (
  <button className={classes[props.classType]}>{props.children}</button>
)


export default button;