import React, { Component } from 'react';
import "./style.css"

class App extends Component{

  constructor(props){
    super(props);
    this.state={
      numero: 0,
      botao: "Começar",
    }

    this.timer = null;
    this.comecar = this.comecar.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  comecar(){

    let state = this.state

    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      state.botao = "Começar"
    } else{
      this.timer = setInterval(() => {
        let state = this.state;
        state.numero += 0.1;
        this.setState(state);
      }, 100 )
      state.botao = "Pausar"
    }

    this.setState(state);
  }

  limpar(){
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
    }

    let state = this.state;
    state.botao = "Começar";
    state.numero = 0;
    this.setState(state);
  }

  render(){
    return(
      <div className='container'>
        <img src={require("./assets/cronometro.png")} className='container__img'/>
        <a className='container__timer' >{this.state.numero.toFixed(1)}</a>
        <div className='botoes'>
          <a className='botao' onClick={this.comecar} >{this.state.botao}</a>
          <a className='botao' onClick={this.limpar} >Limpar</a>
        </div>
      </div>
    )
  }
}

export default App;
