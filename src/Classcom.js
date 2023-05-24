import React from "react";

class ClassCom extends React.Component{

    render(){
        return(
            <div className='card card1'>
                <h1>This is created using Class Component</h1>
                <p className='p'>This is done using external css</p>
                <h4 style={{color:'blue'}}>This is done by lnline css</h4>
            </div>
        )
    }
}
export default ClassCom;