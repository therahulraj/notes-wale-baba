import React from "react";

import classes from './UploadDownload.css';


const uploadDownload = props => {
  let fn = child => React.cloneElement(child, {
    className: "fs_14 fw_600 cl_pr"
  })
  let items = React.Children.map(props.children, fn);
  return (
    <div className={"p-4 p-md-5  mx-0 mx-md-4 mt-md-0 mt-3 " + classes.UploadDownload}>
      <div className="text-center">
        <h5 className="fs_18 fw_700 cl_pr">{props.heading}</h5>
      </div>
      <div className="text-center py-3">
      <img src={props.imageUrl} alt="" />
    </div>
      <div className="text-left my-3 my-md-4">
        {items}
      </div>
      <div className="text-center mt-4 mt-md-5">
        <a href="#" className={classes.PrimaryButton}>{props.buttonText}</a>
      </div>
    </div>
  );
};

export default uploadDownload;