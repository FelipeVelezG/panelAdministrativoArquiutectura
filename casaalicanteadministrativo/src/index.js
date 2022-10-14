import React from 'react';
import ReactDOM from 'react-dom/client';
import { MenuAdministrativo } from './MenuAdministrativo/MenuAdministrativo';
import { AdministrativoCasaAlicante } from './AdministrativoCasaAlicante/AdministrativoCasaAlicante';
import { Inicio } from './Inicio/Inicio';
import { Cerrar } from './Cerrar/Cerrar';
import { AdministrativoBebidas } from './AdministrativoBebidas/AdministrativoBebidas';
import { AdministrativoHamburguesas } from './AdministrativoHamburguesa/AdministrativoHamburguesas';
import { AdministrativoHelado } from './AdministrativoHelado/AdministrativoHelado';
import { AdministrativoBodas } from './AdminitrativoBodas/AdministrativoBodas';
import { VistaPrincipal } from './VistaPrincipal/VistaPrincipal';
import { Crear } from './Crear/Crear';
import { EditarCategoria } from './EditarCategoria/EditarCategoria'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Inicio/>      */}
    <MenuAdministrativo />
    {/* <Cerrar/>  */}
    {/* <VistaPrincipal/> */}
    {/* <Crear/>   */}
    {/* <EditarCategoria/> */}
    {/* <Eliminar/> karen*/}
    {/* <AdministrativoCasaAlicante/> */}
    {/* <AdministrativoHamburguesas/> */}
    {/* <AdministrativoBebidas/> */}
    {/* <AdministrativoHelado/> */}
    {/* <AdministrativoBodas/> */}
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

