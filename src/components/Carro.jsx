import Abc from '@mui/icons-material/Abc';
import AccountCircle from '@mui/icons-material/AccountCircle';
import CreditCard from '@mui/icons-material/CreditCard';
import Mail from '@mui/icons-material/Mail';
import Menu from '@mui/icons-material/Menu';
import Smartphone from '@mui/icons-material/Smartphone';
import { Alert, Button, Card, CardActions, CardContent, CardMedia, Container, FormControl, Grid, InputAdornment, MenuItem, TextField, Typography } from "@mui/material";
import * as React from "react";
import { useState } from "react";
import { FormatPhoneNumber } from '../helpers/FormatNumberPhone';
import Bbva from './BBVA';

const Carro = () => {

  const [errors, setErrors] = useState({ });
  
  //errors.servicio = "Seleccione el servicio para continuar"

  const [servicio, setServicio] = useState( 0 );
  const [curp, setCurp] = useState( '' );
  const [nombre, setNombre] = useState( '' );
  const [apellido1, setApellido1] = useState( '' );
  const [apellido2, setApellido2] = useState( '' );
  const [correo, setCorreo] = useState( '' );  
  const [celular, setCelular] = useState( '' );

  /* Solo letras y espacios */
  const onlyLetters = (e) => { e.target.value = e.target.value.replace(/[^a-zA-Z ]/g, '') }

  /* Solo letras y numeros */
  const onlyLettersNumbers = (e) => { e.target.value = e.target.value.replace(/[^a-zA-Z0-9]/g, '') }

    /* Solo letras y numeros */
  const onlyEmail = (e) => { e.target.value = e.target.value.replace(/[^a-zA-Z0-9_@.-]/g, '') }

  const [servicioArray, setServicioArray] = useState( [ 
    {idServicio:'1', descripcion:'Taller de Orientación Prematrimonial',costo:284.20},
    {idServicio:'2', descripcion:'Curso de preparación en materia de mediación',costo:2849.35},
    {idServicio:'3' , descripcion:'Certificación de Mediadores' , costo:710.50 }, 
    {idServicio:'4' , descripcion:'Validación Extemporánea de Convenios' , costo:710.50 }, 
    {idServicio:'5' , descripcion:'Curso de Capacitación para Externos' , costo: 426.30 }, 
    {idServicio:'8' , descripcion:'Constancia de no registro en el REDAM' , costo: 142.10 }, 
    {idServicio:'9' , descripcion:'Grabación de la audiencia' , costo: 40.43 }, 
    {idServicio:'10' , descripcion:'Reposición de Credencial Institucional' , costo: 214.38 }, 
    {idServicio:'11' , descripcion:'Renta de instalaciones' , costo: 710.50 }, 
    {idServicio:'12' , descripcion:'3 de 3 contra la Violencia de Género' , costo: 133.53 }, 
  ] );

  const validateFields = () => {
    setErrors( { } );

    let valid = true;
    let errores = {};
    
    if(servicio===0){
      errores.servicio = "Seleccione un servicio";
      setErrors( errores );
      return false;
    }
    if(nombre === "" || nombre.length < 6){
      errores.nombre = "Escriba su nombre";
      setErrors( errores );
      return false;
    }
    if(apellido1 === "" || apellido1.length < 3){
      errores.apellido1 = "Escriba al menos un apellido";
      setErrors( errores );
      return false;
    }
    if(curp === "" || curp.length != 18){
      errores.curp = "Escriba completa la CURP";
      setErrors( errores );
      return false;
    }
    var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
    if(correo === "" || !pattern.test(correo)){
      errores.correo = "Escriba un correo electrónico valido";
      setErrors( errores );
      return false;
    }
    if(celular === "" || celular.length!=14){
      errores.celular = "Escriba su telefono celular completo (10 digitos)";
      setErrors( errores );
      return false;
    }
    
    return <Bbva />;

  }

  return (
    <>
      <style>{'html {min-height:100%; margin:0; background-image: -webkit-linear-gradient(100deg, #fff 50%, #004360 50%); } body{background-color:transparent}'}</style>
      <Container maxWidth='lg' sx={{ mt: { md: '3em', xs: '8em' }, mb: 5 }} style={{ display:'flex', justifyContent:'center' }} >
        <Card sx={{ maxWidth: 800, boxShadow:13}} >
          <CardMedia
            component="img"
            alt="pagos pjecz"
            height="200"
            image="/src/assets/pagos.png"
            style={{backgroundColor:'#efeff1'}}
          />
          <CardContent style={{paddingLeft:60 , paddingRight:60}}>
            <Grid container spacing={2}>
              
              <Grid item md={12} xs={12} >

                <Typography gutterBottom variant="p" component="div" sx={{color:'#aaa'}}>
                    Registre sus datos para realizar el pago
                </Typography><br></br>

                <FormControl fullWidth>
                  
                  <TextField
                          select
                          id='select-servicio'                                            
                          label='Servicio'
                          name='servicio'
                          fullWidth
                          value={ servicio }                                           
                          onChange={ ( e ) => { setServicio( e.target.value ); } }
                          disabled={ false }
                          sx={{boxShadow:4, fontSize:3}}
                          InputProps={{ startAdornment: <InputAdornment position="start"><Menu /></InputAdornment>, style:{fontSize:18}}} 
                          size='small'
                      >
                      <MenuItem value={0}>Seleccione un servicio</MenuItem>
                      {
                          servicioArray.map( (elem) => (
                              <MenuItem key={ elem.idServicio} value={ elem.idServicio}> {elem.descripcion} ( $ {elem.costo} )</MenuItem>
                          ))
                      }  
                    </TextField>
                  </FormControl>
                  {   
                    errors.servicio && ( <Alert color='warning' severity="warning" variant="filled" style={{ marginTop: '1em' }} > { errors.servicio } </Alert> )
                  }
                </Grid>

                <Grid item md={6} xs={12} >

                  <FormControl fullWidth>
                    <TextField 
                        name='nombre'
                        label='Nombre'
                        value={nombre}
                        onChange={ (e) => { setNombre(e.target.value) } }
                        fullWidth
                        inputProps={{ maxLength: 60 , style: { textTransform: "uppercase", fontSize:16 } }}
                        autoComplete='off'
                        sx={{boxShadow:4, marginTop:1}}
                        InputProps={{ startAdornment: <InputAdornment position="start"><AccountCircle /></InputAdornment>, style:{fontSize:18}}} 
                        size='small'
                        onInput= {(e) => onlyLetters(e)}
                    />

                  </FormControl>
                  {   
                    errors.nombre && ( <Alert color='warning' severity="warning" variant="filled" style={{ marginTop: '1em' }} > { errors.nombre } </Alert> )
                  }
                </Grid>

                <Grid item md={3} xs={12} >
                
                  <FormControl fullWidth>
                    <TextField 
                        name='apellido1'
                        label='Apellido 1'
                        value={apellido1}
                        onChange={ (e) => { setApellido1(e.target.value) } }
                        fullWidth
                        inputProps={{ maxLength: 30 , style: { textTransform: "uppercase", fontSize:16 } }}
                        autoComplete='off'
                        sx={{boxShadow:4, marginTop:1}}
                        InputProps={{ startAdornment: <InputAdornment position="start"><AccountCircle /></InputAdornment>, style:{fontSize:18}}} 
                        size='small'
                        onInput= {(e) => onlyLetters(e)}
                    />

                  </FormControl>
                  {   
                    errors.apellido1 && ( <Alert color='warning' severity="warning" variant="filled" style={{ marginTop: '1em' }} > { errors.apellido1 } </Alert> )
                  }

                </Grid>

                <Grid item md={3} xs={12} >
                  <FormControl fullWidth>
                    <TextField 
                        name='apellido2'
                        label='Apellido 2'
                        value={apellido2}
                        onChange={ (e) => { setApellido2(e.target.value) } }
                        fullWidth
                        inputProps={{ maxLength: 60 , style: { textTransform: "uppercase", fontSize:16 } }}
                        autoComplete='off'
                        sx={{boxShadow:4, marginTop:1}}
                        InputProps={{ startAdornment: <InputAdornment position="start"><AccountCircle /></InputAdornment>, style:{fontSize:18}}} 
                        size='small'
                        onInput= {(e) => onlyLetters(e)}
                    />

                  </FormControl>
                </Grid>

                <Grid item md={6} xs={12} >
                  <FormControl fullWidth>
                  
                    <TextField 
                        name='CURP'
                        label='CURP'
                        value={curp}
                        onChange={ (e) => { setCurp(e.target.value) } }
                        fullWidth
                        inputProps={{ maxLength: 18 ,style: { textTransform: "uppercase" }}}
                        autoComplete='off'
                        sx={{boxShadow:4, marginTop:1}}
                        InputProps={{ startAdornment: <InputAdornment position="start"><Abc /></InputAdornment>}} 
                        size='small'
                        onInput= {(e) => onlyLettersNumbers(e)}
                    />

                  </FormControl>
                  {   
                    errors.curp && ( <Alert color='warning' severity="warning" variant="filled" style={{ marginTop: '1em' }} > { errors.curp } </Alert> )
                  }
                </Grid>
                
                <Grid item md={6} xs={12} >  
                <FormControl fullWidth>
                  
                    <TextField 
                        name='celular'
                        label='Teléfono celular'
                        value={celular}
                        onChange={ (e) => { setCelular( FormatPhoneNumber(e.target.value)) } }
                        fullWidth
                        inputProps={{ maxLength: 18 ,style: { textTransform: "uppercase" }}}
                        autoComplete='off'
                        sx={{boxShadow:4, marginTop:1}}
                        InputProps={{  startAdornment: <InputAdornment position="start"><Smartphone /></InputAdornment>}} 
                        size='small'
                    />

                </FormControl>
                {   
                  errors.celular && ( <Alert color='warning' severity="warning" variant="filled" style={{ marginTop: '1em' }} > { errors.celular } </Alert> )
                }
              </Grid>
              
                <Grid item md={12} xs={12} >
                  <FormControl fullWidth>
                  
                    <TextField 
                        name='correo'
                        label='correo Electrónico'
                        value={correo}
                        onChange={ (e) => { setCorreo(e.target.value) } }
                        fullWidth
                        inputProps={{ maxLength: 60 ,style: { textTransform: "uppercase" }}}
                        autoComplete='off'
                        sx={{boxShadow:4, marginTop:1}}
                        InputProps={{ startAdornment: <InputAdornment position="start"><Mail /></InputAdornment>}} 
                        size='small'
                        onInput= {(e) => onlyEmail(e)}
                    />

                </FormControl>
                {   
                  errors.correo && ( <Alert color='warning' severity="warning" variant="filled" style={{ marginTop: '1em' }} > { errors.correo } </Alert> )
                }
              </Grid>

              
            </Grid> 
          </CardContent>
          <CardActions style={{paddingLeft:60, paddingBottom:30, paddingRight:60}}>
            <Button  onClick={validateFields} /*href="/BBVA"*/   size="small" variant="contained" endIcon={<CreditCard />} style={{backgroundColor:'#004360', width:'100%'}} >Pagar</Button>
          </CardActions>
        </Card>
            
      </Container>
    </>
  );
};

export default Carro;


    