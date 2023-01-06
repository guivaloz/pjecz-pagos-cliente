import * as React from "react";
import { Route, Routes } from "react-router-dom";

import Aviso from "./components/Aviso";
import Bbva from "./components/BBVA";
import Bienvenida from "./components/Bienvenida";
import Carro from "./components/Carro";
import Layout from "./components/Layout";
import Resultado from "./components/Resultado";
import { Terminos } from "./components/Terminos";


const App = () => {
  return (
    <Routes>
      <Route path="bbva" element={<Bbva />} />
      
      <Route path="/" element={<Layout />}>
        <Route index element={<Bienvenida />} />
        <Route path="carro" element={<Carro />} />
        <Route path="resultado" element={<Resultado />} />
        <Route path="aviso" element={<Aviso />} />
        <Route path="terminos" element={<Terminos />} />
        <Route path="bienvenida" element={<Bienvenida />} />
      </Route>
    </Routes>
  );
};

export default App;
