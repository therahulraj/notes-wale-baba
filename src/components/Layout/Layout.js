import React, {Component} from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';
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
