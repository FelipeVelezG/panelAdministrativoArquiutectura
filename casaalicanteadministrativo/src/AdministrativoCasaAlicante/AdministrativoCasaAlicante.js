import { Route } from "react-router-dom";
import "./AdministrativoCasaAlicante.css";

export function AdministrativoCasaAlicante() {

  let casaalicante = [
    {
      foto: "https://firebasestorage.googleapis.com/v0/b/metodologiasagilesfinal.appspot.com/o/1.png?alt=media&token=28e11b32-6dd0-4d43-b865-5bef6e88d234"
    },
    {
      foto: "https://firebasestorage.googleapis.com/v0/b/metodologiasagilesfinal.appspot.com/o/2.png?alt=media&token=a8fd8eef-b5b0-418c-a376-f17351737517"
    },
    {
      foto: "https://firebasestorage.googleapis.com/v0/b/metodologiasagilesfinal.appspot.com/o/3.png?alt=media&token=29ccde50-a897-4fa3-bb7e-2941051f433c"
    },
    {
      foto: "https://firebasestorage.googleapis.com/v0/b/metodologiasagilesfinal.appspot.com/o/4.png?alt=media&token=624d36dc-e500-486f-8837-53194f7d4118"
    },
    {
      foto: "https://firebasestorage.googleapis.com/v0/b/metodologiasagilesfinal.appspot.com/o/5.png?alt=media&token=b37e39c9-9115-4897-970a-91845830509d"
    },
    {
      foto: "https://firebasestorage.googleapis.com/v0/b/metodologiasagilesfinal.appspot.com/o/6.png?alt=media&token=f805691d-b726-4e83-bb0b-ba0e714fdb98"
    },
  ]

  return (
    <>
      <div className="contenedor">
        <button className="botonAgregar">AGREGAR FOTO</button>
        

        <div id="imagen">
          <div id="fotos" class="col-2">
            <img 
              className="img-fluid"
              src="https://firebasestorage.googleapis.com/v0/b/metodologiasagilesfinal.appspot.com/o/1.png?alt=media&token=28e11b32-6dd0-4d43-b865-5bef6e88d234"
            ></img>
          </div>
          <div id="fotos" class="col-2">
            <img 
              className="img-fluid"
              src="https://firebasestorage.googleapis.com/v0/b/metodologiasagilesfinal.appspot.com/o/1.png?alt=media&token=28e11b32-6dd0-4d43-b865-5bef6e88d234"
            ></img>
          </div>
          <div id="fotos" class="col-2">
            <img 
              className="img-fluid"
              src="https://firebasestorage.googleapis.com/v0/b/metodologiasagilesfinal.appspot.com/o/1.png?alt=media&token=28e11b32-6dd0-4d43-b865-5bef6e88d234"
            ></img>
          </div>
          <div id="fotos" class="col-2">
            <img 
              className="img-fluid"
              src="https://firebasestorage.googleapis.com/v0/b/metodologiasagilesfinal.appspot.com/o/1.png?alt=media&token=28e11b32-6dd0-4d43-b865-5bef6e88d234"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
