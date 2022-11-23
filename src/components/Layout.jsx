import * as React from "react";
import { Link, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Typography variant="h2" gutterBottom>
        Portal de Pagos
      </Typography>
      <Typography variant="body1" gutterBottom>
        <Link href="/carro" underline="hover">
          Carro de compras
        </Link>
      </Typography>
      <Typography variant="body1" gutterBottom>
        <Link href="/resultado" underline="hover">
          Resultado de la operación bancaria
        </Link>
      </Typography>
      <Outlet />
    </>
  );
};

export default Layout;
