import React, { Component } from 'react';
import {connect} from 'react-redux';
import CatList  from "./CatList";
class App extends Component {   

  
  render() {
    
    return (
      <div>
        <h1>CatBook</h1>
        <CatList catPics={this.props.catPics} loading={this.props.loading} />
      </div>
    );
  }
}

const mapStateToProps=state=>{
  return{
    catPics: state.cats,
    loading: state.loading
  }

}

export default connect(mapStateToProps)(App)

