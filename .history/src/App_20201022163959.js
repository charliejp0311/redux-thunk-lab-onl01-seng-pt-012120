import React, { Component } from 'react';
import {connect} from 'react-redux';
class App extends Component {   

  
  render() {
    
    return (
      <div>
        <h1>CatBook</h1>
        {/* add CatList component here */}
      </div>
    );
  }
}

const mapStateToProps=state=>{
  return{cats:state.cats}

}

export default connect(mapStateToProps)(App)

