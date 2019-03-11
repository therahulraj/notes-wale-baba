import React, {Component} from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import HowToUse from '../../components/Index/HowToUse/HowToUse';
import Communities from '../../components/Index/Communities/Communities';
class Index extends Component {
  render () {
    return (
    <Aux>
      <HowToUse/>
      <Communities />
    </Aux>
      
    )
  }
}

export default Index;
