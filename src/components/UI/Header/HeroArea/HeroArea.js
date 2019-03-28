import React from "react";

import classes from "./HeroArea.css";

import Input from "../../Input/Input";
import Button from "../../Button/Button";

const heroArea = props => (
  <div className={"text-center pb-5 pt-5 " + classes.HeroArea}>
    <div className="py-5">
      <div className="pt-5">
        <h1
          className={"cl_wh mt-md-5 mt-0 " + classes.HeroArea__Primary__Heading}
        >
          Search for your Notes
        </h1>
        <p className={"cl_wh fs_34"}>with</p>
        <h2 className={"cl_wh fw_700"}>Notes Wale Baba</h2>
      </div>
      <div className="text-center">
        <div className="d-flex flex-sm-row flex-column justify-content-center py-3">
          <div className="px-2 py-1 py-md-0">
            <Input
              elementType="input"
              classType="HeroAreaInput"
              placeholder="subject"
            />
          </div>
          <div className="px-2 py-1 py-md-0">
            <Button classType="HeroArea__Button">SEARCH</Button>
          </div>
        </div>
        <div className={"d-flex flex-row flex-wrap justify-content-center px-3 " + classes.HeroArea__Categories}>
        <div className={classes.HeroArea__Categries__Category}><a href="#">Engineering</a></div>
        <div className={classes.HeroArea__Categries__Category}><a href="#">Medical</a></div>
        <div className={classes.HeroArea__Categries__Category}><a href="#">Medical</a></div>
        <div className={classes.HeroArea__Categries__Category}><a href="#">NCERT</a></div>
        <div className={classes.HeroArea__Categries__Category}><a href="#">Class 12</a></div>
        <div className={classes.HeroArea__Categries__Category}><a href="#">Class 10</a></div>
        <div><a href="#" className={classes.HeroArea__Categories__viewAll}>View all</a></div>
        </div>
        
      </div>
    </div>
  </div>
);

export default heroArea;
