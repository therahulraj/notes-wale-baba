import React from 'react';

import NavigationBarItems from './NavigationBarItems/NavigationBarItems'

const navigationBar = (props) => (
 <nav> 
   <ul>
    <NavigationBarItems>notes wale baba</NavigationBarItems>
    <NavigationBarItems>download</NavigationBarItems>
    <NavigationBarItems>upload</NavigationBarItems>
    <NavigationBarItems>login</NavigationBarItems>
    <NavigationBarItems>register</NavigationBarItems>
   </ul>
  </nav>
)

export default navigationBar;
