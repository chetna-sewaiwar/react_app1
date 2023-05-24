import React from "react";
import ClassCom from "./Classcom";
import FunctionCom from "./FunctionCom";
import "./App.css";

class App extends React.Component{
  constructor(){
    super();
    this.state={
      functionclick:false,
      classclick:false
    };
  }
  render(){
    return(
      <>
        <h1 classNmae='top'>Styling using FunctionCom and Component</h1>
        <div className='box1'>
        <button type="button" onClick={()=>this.setState({functionclick:!this.state.functionclick})}>To see stylingin FunctionCom Component</button>
        <button type="button" onClick={()=>this.setState({classclick:!this.state.classclick})}>To see styling in Class Component</button>
        </div>

        <div className="box2">
          {this.state.functionclick && <FunctionCom/>}
          {this.state.classclick && <ClassCom/>}
        </div>
      </>
    )
  }
}

export default App;