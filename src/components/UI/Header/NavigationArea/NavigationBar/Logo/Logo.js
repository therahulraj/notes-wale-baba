import React from 'react';

import classes from './Logo.css';


const logo = (props) => (
   <div className={classes[props.classType]}
   style={{
      padding: props.navigationBarBackgroundProps2 ? '.30rem' : '.40rem'
    }}>
   <img src={props.imageUrl}
        alt="notes wale baba"/>
   </div>
)

export default logo;