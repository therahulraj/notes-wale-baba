import React from "react";

import classes from "./Communities.css";
import Community from "./Community/Community";
import categoryBooks from "../../../assets/images/category1.jpg";

const communities = (props) => {
  return (
    <div className="py-5">
      <h3 className="fs_28 fw_700 cl_pr text-center">POPULAR COMMUNITIES</h3>
      <div className="row no-gutters">
      {/* <div className="owl-nav">
        <div className="owl-prev"><img src="./img/right-arrow.svg" alt="" /></div>
        
    </div> */}
      
        <Community
        imageUrl={categoryBooks}
        categoryName="NCERT"
        />
        <Community
        imageUrl={categoryBooks}
        categoryName="Engineering"
        />
        <Community
        imageUrl={categoryBooks}
        categoryName="Medical"
        />
      </div>
    </div>
  );
};

export default communities;
