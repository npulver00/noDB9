import React, { Component } from "react";
import axios from "axios";
import CardInstrument from "./CardInstrument";
import MakeInstrument from "./MakeInstrument";

export default class Instruments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allInstruments: [],
      brand: "",
      imageUrl: "",
      type: "",
      cost: "",
      finishes: "",
      editBox:""
    };
  }

  componentDidMount() {
    this.getInstruments();
  }

  getInstruments = () => {
    axios.get("/api/instruments").then(response => {
      this.setState({
        allInstruments: response.data
      });
    });
  };
  setInstrument = instrument => {
    this.setState({});
  };
  postnewInstrument=()=>{
    const{brand, imageUrl, type, cost, finishes} = this.state
    const postNew={
        brand,
        imageUrl,
        type,
        cost,
        finishes
    }

    axios.post("/api/instruments", postNew).then(response=>{
        console.log(response)
        this.setState({
            allInstruments: response.data
        })
    })

   }
   userInput=(event)=>{
     this.setState({
       [event.target.name]:event.target.value
     })

   }
   userDelete=id=>{
     axios.delete(`/api/instruments/${id}`).then(response=>{
       console.log("delete", response)
       this.setState({
         allInstruments: response.data
       })
     })
   }
  userEdit=(id)=>{
    console.log("id",id)
    const updateInstrument = {
      cost: this.state.editBox
    }
    axios.put(`/api/instruments/${id}`, updateInstrument).then(response=>{
      console.log("response", response)
      this.setState({
       allInstruments: response.data,
      
      })
    })

  }
  editInputBox=(input)=>{
    this.setState({
       editBox: input.target.value
    })
  }
  render() {
    const {allInstruments} = this.state;
    

    const myInstruments = allInstruments.map(instrument => {
      console.log(instrument)
      return (
        <div className= "boxofInstruments">
        <CardInstrument
          brand={instrument.brand}
          image={instrument.imageUrl}
          type={instrument.type}
          cost={instrument.cost}
          finishes={instrument.finishes}
          id={instrument.id}
          userDelete={this.userDelete}
          userEdit={this.userEdit}
          editInputBox={this.editInputBox}
         />
         </div>
         
      );
    });
   
    return <div> 
              <div className="makeInstrument">
              <MakeInstrument postnewInstrument={this.postnewInstrument} userInput={this.userInput} />
              </div>
              <div>
              {myInstruments}
            </div>
    </div>;
  }
}
