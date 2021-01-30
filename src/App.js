import React, {Component} from 'react'
import Buscador from "./components/Buscador"
import Resultado from "./components/Resultado"
import Sidebar from "./components/Sidebar"
import "./App.css"

class App extends Component{

  state={
    termino:'',
    imagenes:[]
  }

  consltarApi=()=>{
    const url=`https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${this.state.termino}&per_page=60`;

    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => this.setState({imagenes:resultado.hits}))
  }
  datosBusqueda=(termino)=>{
    this.setState({
      termino
    }, ()=>{
      this.consltarApi();
    })
  }

  render(){
    return(
      <div className="App">
        <div id="head">
          <div id="logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>

            <label> &nbsp; &nbsp;</label>
            <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" fill="red" class="bi bi-youtube" viewBox="0 0 16 16">
            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.122C.002 7.343.01 6.6.064 5.78l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
            </svg>    
            <label id="titulo"> &nbsp; &nbsp;<strong>YouTube</strong></label>
          </div>
          <div className="navbar2 navbar-expand-lg ">
            <Buscador 
              datosBusqueda={this.datosBusqueda}
            />
          </div>
        </div>
        <div className="wrapper">
            <div className="Sidebar">
              <Sidebar/>  
            </div>
            <div  id="cuadros" onLoad={this.consltarApi()} className="row justify-content-center">
              <Resultado 
                imagenes={this.state.imagenes}
              />
            </div>
        </div>
      </div>
    );
  }
}
export default App;
