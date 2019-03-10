import React from 'react';

import classes from './NavigationBar.css';
import hamBurgerSvg from '../../../../../assets/images/menu.svg';
import notesWaleBabaLogo from '../../../../../assets/images/logo2.png';

// import NavigationBarItems from './NavigationBarItems/NavigationBarItems'
import Logo from './Logo/Logo';


const navigationBar = ( props ) => {
  // let attachedClassesShowNavDropDownString = '';
  let attachedClassesShowNavDropDown = [classes.NavBar__close];
  if(props.showNavDropDownProps1) {
    console.log(props.showNavDropDownProps1);
    attachedClassesShowNavDropDown = [classes.NavBar__show]
  }

  // let onScrollHandler = () =>  {
  //  console.log('scrroll is working');
  // }

  // attachedClassesShowNavDropDownString = attachedClassesShowNavDropDown.join(' ');

  return (
    <nav
    style={{
      backgroundColor: props.navigationBarBackgroundProps1 ? 'rgba(23,108,108, 1)' : 'rgba(23,108,108, .2)',
      padding: props.navigationBarBackgroundProps1 ? '12px 50px' : '20px 50px'
      
    }}
    className={"d-flex flex-column flex-md-row justify-content-between align-items-center " + classes.NavBar}
    > 
    <div className={classes.NavBar__ListLogoButton}>
    <ul className={'list-unstyled mb-0 d-flex flex-row justify-content-between align-items-center'} >
       <li>
        <Logo classType="NavBar__Logo"
              imageUrl={notesWaleBabaLogo}
              navigationBarBackgroundProps2={props.navigationBarBackgroundProps1}/>
       </li>
       <li className={classes.HamBurger__Button__Display} onClick={props.toggleNavDropDownOnClick} >
         <button className={"bg_cl_tr " + classes.HamBurger__Button}>
         <img src={hamBurgerSvg} className={classes.HamBurger} alt=""/>
         </button>
        </li>
      </ul>
    </div>
     <div className={classes.NavBar__Show__Content}>
     <ul className={'d-flex flex-row align-items-center list-unstyled'}>
        <li className="mx-4">
          <a href="#" className="cl_wh ls_1 fw_600">DOWNLOAD 
          <i class="fas fa-angle-down"></i></a>
        </li>
        <li className="mx-4">
          <a href="#" className="cl_wh ls_1 fw_600">UPLOAD
          <i class="fas fa-angle-down"></i></a>
        </li>
        <li className={"ml-4 " + classes.NavBar__Account}>
          <button
             className="cl_wh ls_1 d-block px-3 py-1 bg_cl_tr no_outline border_none"
             onClick={props.loginRegisterOnClick}>SIGN IN / MY ACCOUNT</button>
        </li>
      </ul>
     </div>

    <div className={attachedClassesShowNavDropDown.join(' ')}>
     <ul className={'d-flex flex-column align-items-center list-unstyled'}>
        <li className="pt-3 pb-2">
          <a href="#" className="cl_wh ls_1 fw_600">DOWNLOAD 
          <i class="fas fa-angle-down"></i></a>
        </li>
        <li className="py-2">
          <a href="#" className="cl_wh ls_1 fw_600">UPLOAD
          <i class="fas fa-angle-down"></i></a>
        </li>
        <li className={"py-2 " + classes.NavBar__Account}>
          <button
             className="cl_wh ls_1 d-block px-3 py-1 bg_cl_tr no_outline border_none"
             onClick={props.loginRegisterOnClick}>SIGN IN / MY ACCOUNT</button>
        </li>
      </ul>
     </div>
      
   
     
   </nav>
  )
}

export default navigationBar;
