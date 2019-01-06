import React from 'react';

// import Aux from '../../hoc/Auxiliary/Auxiliary';
import NavigationBar from './NavigationArea/NavigationBar/NavigationBar';
import HeroArea from './HeroArea/HeroArea';

const header = (props) => (
  <header>
     <NavigationBar />
     <HeroArea />
  </header>
)

export default header;
