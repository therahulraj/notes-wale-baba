import React, {Component} from 'react';

import Aux from '../../hoc/Auxilliary/Auxilliary';
import Header from '../Header/Header';

class Layout extends Component {
  render () {
    return (
      <Aux>
      <Header />
        {this.props.children}
      </Aux>
    )
  }
}


export default Layout;
