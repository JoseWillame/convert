import React, {Component } from 'react';
import './App.css';

const lower= "lower";
const upper= "upper";

class App extends Component {
  
  constructor(props){
    super(props);

    this.state= {message: "" }
  }
  
  converter(action){ // função dos botões Minúsculas e Maiúsculas.

    let message = this.state.message

    switch (action) {
      case lower:
        console.log("lower");

        message = message.toLowerCase();
        break;
      
      case upper :

        message = message.toUpperCase();
        break;

      default:
        break;
    }

    this.setState({message });
  }
  
  render(){
    return <div  className= "App">

      <textarea onChange={(evt)=>{
        let message= evt.target.value
        /*(evt= é para mudar), (target= textarea),(value=valor)*/
        this.setState({message}); /*atualizando o estado podendo inserir mensagem.*/

      }} className="textarea" 
      value={this.state.message} />

      <div>

      <button onClick={()=>{this.converter(lower)}}>lowercase</button>
      <button onClick={()=>{this.converter(upper)}}>UPPERCASE</button>

      </div>

    </div>;
  }
} 

export default App;
