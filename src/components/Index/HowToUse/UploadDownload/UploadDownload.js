import React from "react";

import classes from './UploadDownload.css';


const uploadDownload = props => {
  let fn = child => React.cloneElement(child, {
    className: "fs_13 fw_600 cl_pr"
  })
  let items = React.Children.map(props.children, fn);
  return (
    <div className={"py-5 px-5 mx-3 mx-md-4 mt-md-0 mt-5 " + classes.UploadDownload}>
      <div className="text-center">
        <h5 className="fs_14 fw_700 cl_pr">{props.heading}</h5>
      </div>
      <div className="text-center py-3">
      <img src={props.imageUrl} alt="" />
    </div>
      <div className="text-left my-4">
        {items}
      </div>
      <div className="text-center mt-5">
        <a href="#" className={classes.PrimaryButton}>{props.buttonText}</a>
      </div>
    </div>
  );
};

export default uploadDownload;