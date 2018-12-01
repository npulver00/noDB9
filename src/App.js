import React, { Component } from 'react';
import './App.css';
import Instruments  from "./component/Instruments";
import Title from "./component/Title";
import MakeInstrument from "./component/MakeInstrument";




class App extends Component {
  constructor(){
    super();
    this.state={
      allInstruments: [],
    }
  }
  

  

  render() {
    return (
      <div className="App">
        <div className="title"><Title/></div>
       
         <div className="allInstruments">
         <Instruments allInstruments={this.state.allInstruments}/>
         </div>
         
       
      </div>
    );
  }
}

export default App;
