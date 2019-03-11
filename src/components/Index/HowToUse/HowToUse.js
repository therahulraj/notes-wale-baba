import React from "react";

import UploadDownload from "./UploadDownload/UploadDownload";
import moneySvg from '../../../assets/images/money.svg';
import notebookSvg from '../../../assets/images/notebook.svg';


const howToUse = props => {
  return (
    <div className="py-5">
      <h3 className="fs_28 fw_700 cl_pr text-center">WHY YOU SHOULD CHOOSE US</h3>
      <div className="d-flex flex-md-row flex-column justify-content-center mt-5">
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
