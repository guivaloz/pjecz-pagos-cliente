import { Button, Card, CardContent, CardMedia, Container, Typography } from "@mui/material";
import * as React from "react";

const Bienvenida = () => {
  return (
    <>
    <Container maxWidth='lg' sx={{ mt: { md: '3em', xs: '8em' }, mb: 5 }} style={{ display:'flex', justifyContent:'center' }} >
        <Card sx={{ width:900, maxWidth: 900, boxShadow:13}} >
          <CardMedia
            component="img"
            alt="pagos en linea pjecz"
            height="300"
            image="/src/assets/pagos-en-linea.png"
            style={{backgroundColor:'#efeff1'}}
          >
          </CardMedia>
          <CardContent sx={{fontSize:18, padding:10}}>
            <Typography variant="body" gutterBottom>
              <h3><center>Bienvenido(a) al Sistema de Pagos del PJECZ</center></h3>

              <p>El Poder Judicial del Estado de Coahuila de Zaragoza pone al servicio de la ciudadanía el nuevo Sistema de Pagos en Linea que te permitirá realizar pagos de servicios desde la comodidad de tu espacio.</p>

              <p>Aclaraciónes, dudas y comentarios, contáctenos al correo: pagosenlinea@pjecz.gob.mx</p>

              <p>¿Tienes dudas? Lee las Preguntas Frecuentes</p>
            </Typography>
            <Button size="small" href="/carro" variant="contained"  style={{padding:10, margin:20, backgroundColor:'#004360', width:'100%'}} >Iniciar solicitud de pago</Button>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Bienvenida;
