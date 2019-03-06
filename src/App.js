import React, { Component } from 'react';

// import './App.css';
import Layout from './containers/Layout/Layout';
import Index from './containers/Index/Index';

class App extends Component {
  render() {
    return (
      <Layout>
        <Index />
      </Layout>
    )
  }
}

export default App;
