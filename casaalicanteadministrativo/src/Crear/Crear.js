import './Crear.css'

export function Crear(){
return (
<>
<div className="todo">
                <div className="rowColumnas">
                    <div className="col-2">
                        
                    </div>
                    <div className="rowColumnas2">
                        <div className="contenedorCrearCategoria">
                            <div className="textoDeConfirmacion">
                                <p>
                                    NOMBRE CATEGORÍA
                                </p>
                            </div>
                            <div className="textoDeConfirmacion">
                                <p>
                                    DESCRIPCIÓN
                                </p>
                            </div>
                            <div className="textoDeConfirmacion">
                                <p>
                                    SUBIR UNA IMAGEN
                                </p>
                            </div>
                            <div className="ContenedorGuardarBorrar">
                                <div className="guardarCerrarSesion">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/examen-184d3.appspot.com/o/guardar.png?alt=media&token=53c531b7-fed6-4c84-9ec5-02fcce2724a3" alt=""/>
                                </div>
                                <div className="cancelarCerrarSesion">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/examen-184d3.appspot.com/o/cancelar.png?alt=media&token=c2d71e05-820c-4d04-aecd-37f4392a927a" alt=""/>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="body"></div>
                </div>
            </div>




</>

)
}