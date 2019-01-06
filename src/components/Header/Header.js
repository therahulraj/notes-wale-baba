import React from 'react';

import Aux from '../../hoc/Auxilliary/Auxilliary';
import NavigationBar from './Navigation/NavigationBar/NavigationBar';
import HeroArea from './HeroArea/HeroArea';

const header = (props) => (
  <Aux>
     <NavigationBar />
     <HeroArea />
  </Aux>
)

export default header;
