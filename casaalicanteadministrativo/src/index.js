import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import { Rutas } from './Router/Rutas';
import { MenuAdministrativo } from './MenuAdministrativo/MenuAdministrativo';
import { AdministrativoCasaAlicante } from './AdministrativoCasaAlicante/AdministrativoCasaAlicante';
import { AdministrativoHelado } from './AdministrativoHelado/AdministrativoHelado';
import { AdministrativoBebidas } from './AdministrativoBebidas/AdministrativoBebidas';
import { Inicio } from './Inicio/Inicio';
import { Cerrar } from './Cerrar/Cerrar'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Vista/> */}
    {/* <VistaPrincipal/> */}
    <MenuAdministrativo />
    <Cerrar/>
    
    {/* <Inicio/>
    
    <AdministrativoBebidas/> */}
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

