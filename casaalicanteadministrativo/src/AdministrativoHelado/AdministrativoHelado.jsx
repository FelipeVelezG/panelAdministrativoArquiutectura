import "./AdministrativoHelado.css"

export function AdministrativoHelado() {

    return (
      <>
        <div className="contenedorPrincipal">
          <div className="contenedor">
            <button className="botonAgregar">AGREGAR FOTO</button>
  
            <div id="contendorTarjetas">
              <div className="fotoHelados1" >
                <div className="barraIconos">
                  <button className="botonIconoEditar" type="submit" ><img className="iconoEditar" src="https://firebasestorage.googleapis.com/v0/b/metodologiasagilesfinal.appspot.com/o/editar.png?alt=media&token=c6bb408f-c692-48ac-9400-49cabe555c48"></img></button>
                  <button className="botonIconoEliminar" type="submit" ><img className="iconoEliminar" src="https://firebasestorage.googleapis.com/v0/b/metodologiasagilesfinal.appspot.com/o/eliminar.png?alt=media&token=00ed402b-d287-4333-8971-d2dfc07a6d81"></img></button>
                </div>
              </div>
              <div className="fotoHelados2" >
                <div className="barraIconos">
                  <button className="botonIconoEditar" type="submit" ><img className="iconoEditar" src="https://firebasestorage.googleapis.com/v0/b/metodologiasagilesfinal.appspot.com/o/editar.png?alt=media&token=c6bb408f-c692-48ac-9400-49cabe555c48"></img></button>
                  <button className="botonIconoEliminar" type="submit" ><img className="iconoEliminar" src="https://firebasestorage.googleapis.com/v0/b/metodologiasagilesfinal.appspot.com/o/eliminar.png?alt=media&token=00ed402b-d287-4333-8971-d2dfc07a6d81"></img></button>
                </div>
              </div>
              <div className="fotoHelados3" >
                <div className="barraIconos">
                  <button className="botonIconoEditar" type="submit" ><img className="iconoEditar" src="https://firebasestorage.googleapis.com/v0/b/metodologiasagilesfinal.appspot.com/o/editar.png?alt=media&token=c6bb408f-c692-48ac-9400-49cabe555c48"></img></button>
                  <button className="botonIconoEliminar" type="submit" ><img className="iconoEliminar" src="https://firebasestorage.googleapis.com/v0/b/metodologiasagilesfinal.appspot.com/o/eliminar.png?alt=media&token=00ed402b-d287-4333-8971-d2dfc07a6d81"></img></button>
                </div>
              </div>
              <div className="fotoHelados4" >
                <div className="barraIconos">
                  <button className="botonIconoEditar" type="submit" ><img className="iconoEditar" src="https://firebasestorage.googleapis.com/v0/b/metodologiasagilesfinal.appspot.com/o/editar.png?alt=media&token=c6bb408f-c692-48ac-9400-49cabe555c48"></img></button>
                  <button className="botonIconoEliminar" type="submit" ><img className="iconoEliminar" src="https://firebasestorage.googleapis.com/v0/b/metodologiasagilesfinal.appspot.com/o/eliminar.png?alt=media&token=00ed402b-d287-4333-8971-d2dfc07a6d81"></img></button>
                </div>
              </div>
  
            </div>
            
  
          </div>
  
        </div>
      </>
    );
  }