import React, { Component } from 'react';
import "../App.css";


export default class MakeInstrument extends Component {
    constructor(props) {
        super(props);
       
    }


    render() { 
        
        return ( 
        <div className="inputMakeInstruments">
            
            <div className="inputBox">Brand:<input name="brand" onChange={e=>{this.props.userInput(e)}}/></div>
            <div className="inputBox">Image:<input name="imageUrl" onChange={e=>{this.props.userInput(e)}}/></div>
            <div className="inputBox">Type:<input name="type" onChange={e=>{this.props.userInput(e)}}/></div>
            <div className="inputBox">Cost:<input name="cost" onChange={e=>{this.props.userInput(e)}}/></div>
            <div className="inputBox">Finish:<input name="finishes" onChange={e=>{this.props.userInput(e)}}/></div>
            <button onClick={()=>this.props.postnewInstrument()}>Add New Instrument</button>
            
        </div> 
        
        );
    }
}
 
