import React from 'react';

import classes from './NavigationBar.css';


// import NavigationBarItems from './NavigationBarItems/NavigationBarItems'
import Logo from './Logo/Logo';

const navigationBar = ( props ) => {
  return (
    <nav className={"d-flex flex-row justify-content-between align-items-center bg_cl_pr " + classes.NavBar}> 
      <ul className="list-unstyled mb-0">
       <li>
        <Logo />
       </li>
      </ul>
      <ul className={'d-flex flex-row align-items-center list-unstyled ' + classes.Nav__items}>
        <li className="mx-4">
          <a href="#" className="cl_wh ls_1 fw_600">DOWNLOAD 
          <i class="fas fa-angle-down"></i></a>
        </li>
        <li className="mx-4">
          <a href="#" className="cl_wh ls_1 fw_600">UPLOAD 
          <i class="fas fa-angle-down"></i></a>
        </li>
        <li className={"ml-4 " + classes.Nav__account}>
          <button
             className="cl_wh ls_1 d-block px-3 py-1 bg_cl_tr no_outline border_none"
             onClick={props.loginRegisterOnClick}>SIGN IN / MY ACCOUNT</button>
        </li>
      </ul>
   </nav>
  )
}

export default navigationBar;
