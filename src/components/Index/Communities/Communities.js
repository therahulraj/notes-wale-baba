import React, { Component } from "react";

import classes from "./Communities.css";
import Community from "./Community/Community";


// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';


// import categoryBooks from "../../../assets/images/category1.jpg";
// import rightArrow from "../../../assets/images/right-arrow.svg";
import groupPhoto from "../../../assets/images/group.jpg";
import john from "../../../assets/images/john.jpg";
// import rightArrow from "../../../assets/images/right-arrow.png";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import classes from 'react-responsive-carousel/lib/styles/carousel.min.css';

class Communities extends Component {
  render() {
    return (
    <div className={"py-5 " + classes.Communities}>
        <h3 className="primary_heading mb-md-5 mb-3 pl-0 pl-md-3">POPULAR COMMUNITIES</h3>
        <div className="row no-gutters justify-content-between">
        <Community 
      imageUrl={groupPhoto}
      groupName="NCERT Notes"
      personImageUrl={john}
      personName="Rahul Raj"
      personDescription="Principal at Notre Dame"
      />
      <Community 
      imageUrl={groupPhoto}
      groupName="NCERT Notes"
      personImageUrl={john}
      personName="Rahul Raj"
      personDescription="Principal at Notre Dame"
      />
      <Community 
      imageUrl={groupPhoto}
      groupName="NCERT Notes"
      personImageUrl={john}
      personName="Rahul Raj"
      personDescription="Principal at Notre Dame"
      />
      </div>
    </div>
    );
}
}

export default Communities;