import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Navbar from './components/Navbar';
import News from './components/News';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize ={6} country = "in" category= "science"/>
      </div>
    );
  }
}




export default App;


