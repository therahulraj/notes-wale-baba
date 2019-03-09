import React from 'react'

import classes from './Links.css';

const links = (props) => {
    let fn = (child) => React.cloneElement(child, {
        className: 'cl_wh fs_13 d_bl a_hov py-1'
    });
    let items = React.Children.map(props.children, fn);

  return (
    <div className={'col-6 cl_wh text-center ' + classes.Links}>
     <div className="d-inbl text-left">
      <p className={'cl_wh fs_15 fw_600'}>{props.heading}</p>
      {items}
      </div>
    </div>
  )
}

export default links
