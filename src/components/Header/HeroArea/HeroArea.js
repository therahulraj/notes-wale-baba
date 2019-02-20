import React from 'react';

import classes from './HeroArea.css';

import Input from '../../UI/Input/Input';
import Button  from '../../UI/Button/Button';

const heroArea = (props) => (
  <div className={'text-center py-5 ' + classes.HeroArea} >
     <div className='py-5'>
       <div>
       <h1 className={'cl_wh fw_800 fs_50'}>Search for your Notes</h1>
         <p className={'cl_wh fs_34'}>with</p>
         <h2 className={'cl_wh fw_700'}>Notes Wale Baba</h2>
       </div>
       <div className="text-center">
       <div className="d-flex flex-row justify-content-center py-3">
         <div className="px-2">
           <Input elementType="input" classType="HeroAreaInput" placeholder="subject"/>
         </div>
         <div className="px-2">
           <Input elementType="input" classType="HeroAreaInput" placeholder="standard"/>
         </div>
         </div>
         <div>
         <div className="px-2">
            <Button classType="HeroAreaButton">SEARCH</Button>
         </div>
       </div>
         </div>
       
     </div>
  </div>
)

export default heroArea;
