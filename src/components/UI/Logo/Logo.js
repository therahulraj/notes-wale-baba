import React from 'react';

import classes from './Logo.css';

// import notesWaleBabaLogo from '../../../../../assets/images/logo2.png';

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