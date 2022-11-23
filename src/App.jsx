import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Bienvenida from "./components/Bienvenida";
import Carro from "./components/Carro";
import Layout from "./components/Layout";
import Resultado from "./components/Resultado";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Bienvenida />} />
        <Route path="carro" element={<Carro />} />
        <Route path="resultado" element={<Resultado />} />
      </Route>
    </Routes>
  );
};

export default App;
