import React, { Component } from "react";

class App extends Component {
  render(){
    let sarah = new Date;
    let ojd = sarah.getDate()
    return(
      <div>
        <h1>Nous sommes le {ojd}.</h1>
      </div>
    );
  }
}

export default App;
