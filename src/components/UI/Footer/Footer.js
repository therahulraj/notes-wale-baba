import React from 'react'

import classes from './Footer.css'
import Links from './Links/Links';
import Logo from '../Logo/Logo';
import NotesWaleBabaWhiteLogo from '../../../assets/images/Untitled2.png';

const footer = () => {
  return (
    <div className={'py-5 ' + classes.Footer}>
      <div className="row no-gutters justify-content-between">
       <div className="col-md-9">
       <div className="row no-gutters">
       <div className="col-md-6">
       <div className="row no-gutters">
       <Links heading="Notes Wale Baba">
         <a href="#">Home</a>
         <a href="#">Upload Notes</a>
         <a href="#">Download Notes</a>
         <a href="#">About Us</a>
         <a href="#">Contact Us</a>
         <a href="#">Careers</a>
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
       <div className="col-md-6 mt-md-0 mt-4 justify-content-center">
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
       </div>
       <div className="col-md-3">
         <Logo />
       </div>
      </div>
    </div>
    </div>
  )
}

export default footer
