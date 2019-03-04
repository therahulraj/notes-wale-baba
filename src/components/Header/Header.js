import React from 'react';

// import Aux from '../../hoc/Auxiliary/Auxiliary';
import NavigationBar from './NavigationArea/NavigationBar/NavigationBar';
import HeroArea from './HeroArea/HeroArea';

const header = (props) => (
  <header>
     <NavigationBar 
     loginRegisterOnClick={props.loginRegisterClicked} 
     toggleNavDropDownOnClick={props.toggleNavDropDownClicked} 
     showNavDropDownProps1={props.showNavDropDownState} />
     <HeroArea />
  </header>
)

export default header;
