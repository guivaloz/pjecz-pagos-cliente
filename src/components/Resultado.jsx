import { Card, CardContent, CardMedia, Container } from "@mui/material";
import * as React from "react";




const Resultado = () => {
  return (
    <>
      <Container maxWidth='lg' sx={{ mt: { md: '3em', xs: '8em' }, mb: 5 }} style={{ display:'flex', justifyContent:'center' }} >
        <Card sx={{ width:900, maxWidth: 900, boxShadow:13}} >
          <CardMedia 
            component="img"
            alt="pagos en linea pjecz"
            height="300"
            image="/src/assets/success-true.gif"
            style={{backgroundColor:'#efeff1'}}
          >
            
          </CardMedia>
          <CardContent sx={{paddingLeft:9, paddingRight:0}}>
            <p><center>¡¡ Su pago ha sido acreditado correctamente !!</center></p>
            <p>Le hemos enviado un correo electronico con los detalles de su transacción.</p>
            <p>Gracias por hacer uso de esta plataforma de Pagos en Línea</p>
          </CardContent>
        </Card>
      </Container>
      
    </>
  );
};

export default Resultado;
