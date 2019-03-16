import React, {Component} from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import HowToUse from '../../components/Index/HowToUse/HowToUse';
import Communities from '../../components/Index/Communities/Communities';
import FeaturedNotes from '../../components/Index/FeaturedNotes/FeaturedNotes';
import Test from '../../components/Index/Communities/Communities';
class Index extends Component {
  render () {
    return (
    <Aux>
      <HowToUse/>
      <Communities />
      <FeaturedNotes />
    </Aux>
      
    )
  }
}

export default Index;
