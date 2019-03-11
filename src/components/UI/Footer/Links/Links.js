import React from 'react'

import classes from './Links.css';

const links = (props) => {
    let fn = (child) => React.cloneElement(child, {
        className: 'cl_wh fs_14 d_bl py-2 ' + classes.ThisLinks
    });
    let items = React.Children.map(props.children, fn);

  return (
    <div className={'col-6 cl_wh text-center text-md-left ' + classes.Links}>
     <div className="d-inbl text-left">
      <p className={'cl_wh fs_18 fw_600'}>{props.heading}</p>
      {items}
      </div>
    </div>
  )
}

export default links
