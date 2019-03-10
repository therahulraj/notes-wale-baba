import React from 'react';

import classes from './SocialLogo.css';


const SocialLogo = (props) => (
   <a href="#" className={classes[props.classType]}>
   <img src={props.imageUrl}
        alt="notes wale baba"/>
   </a>
)

export default SocialLogo;