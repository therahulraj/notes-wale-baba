import React from "react";

import classes from './HowToUse.css';

import UploadDownload from "./UploadDownload/UploadDownload";
import moneySvg from '../../../assets/images/money.svg';
import notebookSvg from '../../../assets/images/notebook.svg';


const howToUse = props => {
  return (
    <div className={"py-5 " + classes.HowToUse}>
      <h3 className={"primary_heading text-center mb-3 mb-md-5"}>WHY YOU SHOULD CHOOSE US</h3>
      <div className="d-flex flex-md-row flex-column justify-content-center">
        <UploadDownload
        topic="Notes"
        heading="Upload then Earn"
        buttonText="Upload" 
        imageUrl={moneySvg}>
        <p>Get right value for your efforts.</p>
        <p>Earn while anyone downloads your notes.</p>
        </UploadDownload>
        
        <UploadDownload
        topic="Notes"
        heading="Search then Download"
        buttonText="Search" 
        imageUrl={notebookSvg}>
        <p>Get only verified notes.</p>
        <p>Get only high quality notes.</p>
        {/* <p>Search then Download</p> */}
        </UploadDownload>
      </div>
    </div>
  );
};

export default howToUse;
