import { Router } from "react-router-dom";
import { MenuAdministrativo } from "../MenuAdministrativo/MenuAdministrativo";


export function Rutas() {
    return (
      <div className="App">
        <MenuAdministrativo>
            
        </MenuAdministrativo>
        {/* <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="historia" element={<Historia />} />
          <Route path="integrantes" element={<Musicos/>} />
          <Route path="albumes" element={<Albumes />} /> }
        </Routes> */}
      </div>
    );
  }