import React from 'react'

import classes from './FeaturedNotes.css';
import categoryBooks from "../../../assets/images/category.jpg";
import john from '../../../assets/images/john.jpg';
import IndividualNote from "./IndividualNote/IndividualNote";

const featuredNotes = (props) => {
  return (
    <div className={"py-5 " + classes.FeaturedNotes}>
      <h3 className="fs_28 fw_700 cl_pr mb-0 mb-md-4 px-3">FEATURED NOTES</h3>
      <div className="row justify-content-between">
      <IndividualNote 
      imageUrl={categoryBooks}
      heading="NCERT Physics notes"
      personImageUrl={john}
      personName="Rahul Raj"
      personDescription="Principal at Notre Dame"
      downloadsNumber="0"
      ratingsNumber="4.5"
      viewsNumber="3"
      />
      <IndividualNote 
      imageUrl={categoryBooks}
      heading="NCERT Chemistry notes"
      personImageUrl={john}
      personName="Rahul Raj"
      personDescription="Principal at Notre Dame"
      downloadsNumber="0"
      ratingsNumber="4.5"
      viewsNumber="3"
      />
      <IndividualNote 
      imageUrl={categoryBooks}
      heading="NCERT Biology notes"
      personImageUrl={john}
      personName="Rahul Raj"
      personDescription="Principal at Notre Dame"
      downloadsNumber="0"
      ratingsNumber="4.5"
      viewsNumber="3"
      />
      <IndividualNote 
      imageUrl={categoryBooks}
      heading="NCERT Chemistry notes"
      personImageUrl={john}
      personName="Rahul Raj"
      personDescription="Principal at Notre Dame"
      downloadsNumber="0"
      ratingsNumber="4.5"
      viewsNumber="3"
      />
      <IndividualNote 
      imageUrl={categoryBooks}
      heading="NCERT Chemistry notes"
      personImageUrl={john}
      personName="Rahul Raj"
      personDescription="Principal at Notre Dame"
      downloadsNumber="0"
      ratingsNumber="4.5"
      viewsNumber="3"
      />
      <IndividualNote 
      imageUrl={categoryBooks}
      heading="NCERT Chemistry notes"
      personImageUrl={john}
      personName="Rahul Raj"
      personDescription="Principal at Notre Dame"
      downloadsNumber="0"
      ratingsNumber="4.5"
      viewsNumber="3"
      />
      </div>
    </div>
  )
}

export default featuredNotes;
