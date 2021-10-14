import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,

  
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


class App extends Component {
  state={
    progress:10
  }
 setProgress=(p)=>{
    this.setState({progress:p});
  }
   api_key = "2d0e20ac4af14547be292ba02d79d494"
  render() {
   
    return (
     

      <div>
          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
       
      />
        <Router>
        <Navbar/> 
        <Switch>
          <Route exact path="/"><News setProgress={this.setProgress} api_key = {this.api_key} key="general" pageSize={6} country="in" category="general"/></Route> 
          <Route exact path="/business"><News setProgress={this.setProgress} api_key = {this.api_key} key="business" pageSize={6} country="in" category="business"/></Route> 
          <Route exact path="/entertainment"><News setProgress={this.setProgress} api_key = {this.api_key} key="entertainment" pageSize={6} country="in" category="entertainment"/></Route> 
          <Route exact path="/general"><News setProgress={this.setProgress} api_key = {this.api_key} key="general" pageSize={6} country="in" category="general"/></Route> 
          <Route exact path="/health"><News setProgress={this.setProgress} api_key = {this.api_key} key="health" pageSize={6} country="in" category="health"/></Route> 
          <Route exact path="/science"><News setProgress={this.setProgress} api_key = {this.api_key} key="science" pageSize={6} country="in" category="science"/></Route> 
          <Route exact path="/sports"><News setProgress={this.setProgress} api_key = {this.api_key} key="sports" pageSize={6} country="in" category="sports"/></Route> 
          <Route exact path="/technology"><News setProgress={this.setProgress} api_key = {this.api_key}key="technology" pageSize={6} country="in" category="technology"/></Route> 
        </Switch>
        </Router>
      </div>
       
    );
  }
}




export default App;


