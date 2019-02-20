import React from 'react';

import classes from './Modal.css';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

const modal = ( props ) => (
  <Aux>
    <Backdrop show={props.loginRegisterShow} clicked={props.modalClosed} />
    <div 
    className={classes.Modal}
    style={{
      transform: props.loginRegisterShow ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: props.loginRegisterShow ? '1' : '0'
    }}>
    {props.children}
    </div>
  </Aux>
)

export default modal;