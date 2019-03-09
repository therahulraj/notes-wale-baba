import React from 'react';

import classes from './HeroArea.css';

import Input from '../../Input/Input';
import Button  from '../../Button/Button';

const heroArea = (props) => (
  <div className={'text-center pb-5 pt-5 ' + classes.HeroArea} >
     <div className='py-5'>
       <div className='pt-5'>
       <h1 className={'cl_wh mt-md-5 mt-0 ' + classes.HeroArea__Primary__Heading}>Search for your Notes</h1>
         <p className={'cl_wh fs_34'}>with</p>
         <h2 className={'cl_wh fw_700'}>Notes Wale Baba</h2>
       </div>
       <div className="text-center">
       <div className="d-flex flex-md-row flex-column justify-content-center py-3">
         <div className="px-2 py-1 py-md-0">
           <Input elementType="input" classType="HeroAreaInput" placeholder="subject"/>
         </div>
         <div className="px-2 py-1 py-md-0">
           <Input elementType="input" classType="HeroAreaInput" placeholder="standard"/>
         </div>
         </div>
         <div>
         <div className="px-2">
            <Button classType="HeroArea__Button">SEARCH</Button>
         </div>
       </div>
         </div>
       
     </div>
  </div>
)

export default heroArea;
