import React from 'react';

import classes from './Logo.css';

import NotesWaleBabaLogo from '../../../../../assets/images/logo2.png';

const logo = (props) => (
   <div className={classes.Logo + ' p-2 bg_cl_wh'}><img src={NotesWaleBabaLogo} alt="notes wale baba" /></div>
)

export default logo;