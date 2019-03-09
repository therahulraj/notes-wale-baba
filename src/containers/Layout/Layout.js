import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Header from '../../components/UI/Header/Header';
import Modal from '../../components/UI/Modal/Modal';
import Footer from '../../components/UI/Footer/Footer';

class Layout extends Component {
  state = {
    loginRegister: false,
    showNavDropDown: false,
    navigationBarBackground: false
  }
  handleScrollEvent = () => {
    console.log('fuck');
    console.log(window.pageYOffset);
    if(window.pageYOffset) {
      console.log(window.pageYOffset);
      this.setState({
        navigationBarBackground: true
      })
      console.log(this.state.navigationBarBackground);
    } else {
      this.setState({
        navigationBarBackground: false
      })
      console.log(this.state.navigationBarBackground);
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScrollEvent);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollEvent);
  }
  loginRegisterHandler = () => {
    this.setState({loginRegister: true});
 }
 toggleNavDropDownHandler = () => {
   console.log('clicked');
   console.log(this.state.showNavDropDown);
   this.setState( (prevState)  => {
     return { showNavDropDown: !prevState.showNavDropDown,
              navigationBarBackground: true}
   });
 }
 loginRegisterCancelHandler = () => {
   this.setState({loginRegister: false});
 }
 handleScroll() {
   console.log('fuck');
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
      showNavDropDownState={this.state.showNavDropDown} 
      navigationBarBackgroundState={this.state.navigationBarBackground}/>
        {this.props.children}
      <Footer />
     
      </Aux>
    )
  }
}


export default Layout;
