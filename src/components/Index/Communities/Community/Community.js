import React from "react";

import classes from "./Community.css";

const community = props => {
  return (
    <div className="col-lg-4 col-6 my-md-3 my-2 px-2 px-md-3">
      <div className={classes.Community}>
        <div className={classes.Community__Figure}>
          <img src={props.imageUrl} />
        </div>
        <div className="px-2 px-sm-3">
          <div className={classes.Community__Heading}>
            <h5>{props.groupName}</h5>
          </div>
          <div className={classes.Community__Person}>
            <div className="d-flex flex-row align-items-center">
              <div
                className={classes.Community__Person__Image}
                style={{
                  backgroundImage: `url(${props.personImageUrl})`
                }}
              />
              <div
                className={
                  "d-flex flex-column pl-1 pl-md-3 " +
                  classes.Community__Person__Name__Description
                }
              >
                <p className={classes.Community__Person__Name}>
                  <span className={classes.Community__Person__Hosted__Text}>
                    By{" "}
                  </span>
                  <a href="#">{props.personName}</a>
                </p>
                <p className={classes.Community__Person__Description}>
                  {props.personDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default community;
