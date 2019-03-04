import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Header from '../Header/Header';
import Modal from '../UI/Modal/Modal';

class Layout extends Component {
  state = {
    loginRegister: false,
    showNavDropDown: false
  }
  loginRegisterHandler = () => {
    this.setState({loginRegister: true});
 }
 toggleNavDropDownHandler = () => {
   console.log('clicked');
   console.log(this.state.showNavDropDown);
   this.setState( (prevState)  => {
     return { showNavDropDown: !prevState.showNavDropDown}
   });
 }
 loginRegisterCancelHandler = () => {
   this.setState({loginRegister: false});
 }
  render () {
    return (
      <Aux>
      <Modal 
      loginRegisterShow={this.state.loginRegister}
      modalClosed={this.loginRegisterCancelHandler}
      >
      <div>whoo!</div>
      </Modal>
      <Header loginRegisterClicked={this.loginRegisterHandler} 
      toggleNavDropDownClicked={this.toggleNavDropDownHandler} 
      showNavDropDownState={this.state.showNavDropDown} />
        {this.props.children}
      </Aux>
    )
  }
}


export default Layout;
