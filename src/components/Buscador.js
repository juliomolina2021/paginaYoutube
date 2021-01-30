import React, { Component} from 'react'

class Buscador extends Component{
    //para leer el input
    busquedaRef= React.createRef();

    //para el onsubmit
    obtenerDatos=(e)=>{
        e.preventDefault();
        //tomamos el valor del input
        const termino=this.busquedaRef.current.value
        
        //lo enviamos al componente  principal
        this.props.datosBusqueda(termino)
       
    }
    render(){
        return(
            <form onSubmit={this.obtenerDatos} className="form-inline justify-content-center">
                <input ref={this.busquedaRef} type="text" className="form-control col-8"
                placeholder="Buscar"/>
                    <button type="submit" className="btn btn-outline-success" fill="gray">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
                        fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </button>
            </form>
        )
    }
}
export default Buscador;