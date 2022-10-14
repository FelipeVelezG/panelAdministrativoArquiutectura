import { Router } from "react-router-dom";
import "./MenuAdminitrativo.css"

export function MenuAdministrativo(){
    return (

        <>
            
                <div className="row " >
                    <div className="col-3" >
                        <div className="rowSuperior">
                            <div className="col-8 d-block mx-auto" id="cuadroContenedorLogo">
                                <img src="https://firebasestorage.googleapis.com/v0/b/metodologiasagilesfinal.appspot.com/o/logoPrincipal.png?alt=media&token=d451eebe-ca68-4b1f-a79b-d99472cad201" alt="" className="img-fluid w-100 " data-bs-toggle="collapse" id="logoPrincipal"/>

                            </div>
                        </div>
                        <div className="rowInferior">
                            <div className="col-8 d-block mx-auto" >
                                <p><a className="enlaces" href="">PRODUCCIONES</a> </p>
                                <p className="mt-3"><a className="enlaces" href="">CATEGORÍAS</a> </p>
                            </div>

                        </div>

                        
                    </div>
                    
                </div>
            
        </>

    )
}