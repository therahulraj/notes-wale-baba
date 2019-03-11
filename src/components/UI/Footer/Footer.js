import React from "react";

import classes from "./Footer.css";
import Links from "./Links/Links";
import SocialLogo from "./SocialLogo/SocialLogo";
import Logo from "../Logo/Logo";
import NotesWaleBabaWhiteLogo from "../../../assets/images/Untitled2.png";
import CopyrightLogo from "../../../assets/images/copyright.svg";
import FacebookLogo from "../../../assets/images/facebook.svg";
import TwitterLogo from "../../../assets/images/twitter.svg";
import InstagramLogo from "../../../assets/images/instagram.svg";
import LinkedinLogo from "../../../assets/images/linkedin.svg"


const footer = () => {
  return (
    <div className={"py-5 " + classes.Footer}>
      <div className="mb-4">
        <div className="row no-gutters">
          <div className="col-12">
            <div className="row no-gutters">
              <div className="col-md-4 mt-4 mt-md-0">
                <div className="row no-gutters">
                  <Links heading="Notes Wale Baba">
                    <a href="#">Home</a>
                    <a href="#">Upload Notes</a>
                    <a href="#">Download Notes</a>
                    <a href="#">About Us</a>
                    <a href="#">Forum</a>
                    <a href="#">Team</a>
                    <a href="#">Blog</a>
                    <a href="#">FAQs</a>
                  </Links>
                  <Links heading="Notes By Course">
                    <a href="#">Engineering</a>
                    <a href="#">Engineering</a>
                    <a href="#">Engineering</a>
                    <a href="#">Engineering</a>
                    <a href="#">Engineering</a>
                    <a href="#">Engineering</a>
                    <a href="#">Engineering</a>
                  </Links>
                </div>
              </div>
              <div className="col-md-4 mt-4 mt-md-0">
                <div className="row no-gutters">
                  <Links heading="Notes By Subject">
                    <a href="#">Physics</a>
                    <a href="#">Physics</a>
                    <a href="#">Physics</a>
                    <a href="#">Physics</a>
                    <a href="#">Physics</a>
                    <a href="#">Physics</a>
                    <a href="#">Physics</a>
                  </Links>
                  <Links heading="Trending Topics">
                    <a href="#">Startup</a>
                    <a href="#">Startup</a>
                    <a href="#">Startup</a>
                    <a href="#">Startup</a>
                    <a href="#">Startup</a>
                    <a href="#">Startup</a>
                    <a href="#">Startup</a>
                  </Links>
                </div>
              </div>
              <div className="col-md-4 mt-4 mt-md-0">
                <div className="row no-gutters">
                  <Links heading="Contact">
                    <a href="#">Contact Us</a>
                    <a href="#">Help & Support</a>
                    <a href="#">Careers</a>
                  </Links>
                  <Links heading="Legal">
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Cookie Policy</a>
                  </Links>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.Footer__HorizontalLine + " bg_cl_wh my-4"} />
      <div />
      <div>
        <div className="row no-gutters">
          <div className="col-12">
            <div className="row no-gutters justify-content-between">
              <div className="col-3">
                <div className="d-flex flex-row align-items-center">
                  <Logo
                    imageUrl={NotesWaleBabaWhiteLogo}
                    classType="Footer__Logo"
                  />&nbsp;&nbsp;
                  <div
                    className={
                      classes.Copyright +
                      " cl_wh d-flex flex-row align-items-center"
                    }
                  >
                    <div>
                      <img src={CopyrightLogo} alt="notes wale baba" />
                    </div>
                    <div>&nbsp;&nbsp;Notes Wale Baba 2019</div>
                  </div>
                </div>
              </div>
              <div className="col-5">
                <div className="d-flex flex-row justify-content-end">
                  <SocialLogo
                  classType="Footer__SocialLink__Facebook"
                  imageUrl={FacebookLogo}
                  />
                  <SocialLogo
                  classType="Footer__SocialLink__Twitter"
                  imageUrl={TwitterLogo}
                  />
                  <SocialLogo
                  classType="Footer__SocialLink__Instagram"
                  imageUrl={InstagramLogo}
                  />
                  <SocialLogo
                  classType="Footer__SocialLink__Linkedin"
                  imageUrl={LinkedinLogo}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
