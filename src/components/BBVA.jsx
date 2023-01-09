import { Button, Card, CardContent, CardMedia, Container, Typography } from "@mui/material";
import * as React from "react";


const Bbva = () => {


  function Respuesta(respuesta){
    if(respuesta){
        var data = {
            "success" : "true",
            "nombre" : "Sara Hernández"
        }
    }
    else{
        var data = {
            "success" : "false",
            "nombre" : "Sara Hernández"
        }
    }
    console.log(data) ;
    
  } 

  return (
    <>
    <Container maxWidth='lg' sx={{ mt: { md: '3em', xs: '8em' }, mb: 5 }} style={{ display:'flex', justifyContent:'center' }} >
        <Card sx={{ width:900, maxWidth: 900, boxShadow:13}} >
          <CardMedia
            component="img"
            alt="pagos en linea pjecz"
            height="300"
            image="/src/assets/bbva.png"
            style={{backgroundColor:'#efeff1'}}
          >
          </CardMedia>
          <CardContent sx={{fontSize:18, padding:10}}>
            <Typography variant="body" gutterBottom>
               Click en el boton para simular aprobación de transaccion del banco.
            </Typography>
            <Button size="small" onClick={ Respuesta(true) } variant="contained"  style={{padding:10, margin:20, backgroundColor:'green', width:'100%'}} >Aprobar Transaccion</Button>
            <Button size="small" onClick={ Respuesta(false) }  style={{color: '#fff' , padding:10, margin:20, backgroundColor:'#FF4B4B', width:'100%'}} >Rechazar Transaccion</Button>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Bbva;
