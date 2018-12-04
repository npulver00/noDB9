import React, { Component } from "react";
import "./App.css";
import Instruments from "./component/Instruments";
import Title from "./component/Title";
import MakeInstrument from "./component/MakeInstrument";
import Song from "./Song";
import Weather from "./component/Weather";
import AudioPlayer from "react-h5-audio-player";

class App extends Component {
  constructor() {
    super();
    this.state = {
      allInstruments: []
    };
  }

  render() {
    return (
      <div className="App">
        <div className="title">
          <Title />
        </div>
        <div className="allInstruments">
          <Instruments allInstruments={this.state.allInstruments} />
        </div>
        <div className="weather">
          <Weather />
        </div>
        <div>
          <Song />
        </div>
        {/* const Player = () => (
  <AudioPlayer
    autoPlay
    src="https://music.youtube.com/watch?v=yG_dmbhrCmI&list=OLAK5uy_minCqORktl3V46ASD7KkSOJ-gE9avfR5A"
    onPlay={e => console.log("onPlay")}
    // other props here
  />
); */}
        <footer>
          {" "}
          <div>By Natalie Pulver</div>
        </footer>
      </div>
    );
  }
}

export default App;
